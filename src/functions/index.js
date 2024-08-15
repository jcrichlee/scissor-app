const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { google } = require("googleapis");
require("dotenv").config(); // Load environment variables

admin.initializeApp();

// Set up Google Analytics client
const jwtClient = new google.auth.JWT(
  process.env.GA_CLIENT_EMAIL,
  null,
  process.env.GA_PRIVATE_KEY.replace(/\\n/g, "\n"), // Replace escaped newline characters
  ["https://www.googleapis.com/auth/analytics.readonly"]
);

const analytics = google.analytics("v3");

const fetchAnalyticsData = async (startDate, endDate) => {
  try {
    // Authorize the client
    await jwtClient.authorize();

    // Make API request to Google Analytics
    const response = await analytics.data.ga.get({
      auth: jwtClient,
      ids: `ga:${process.env.GA_VIEW_ID}`, // Use the view ID from environment variables
      "start-date": startDate,
      "end-date": endDate,
      metrics: "ga:pageviews,ga:sessions",
      dimensions: "ga:date"
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    throw new functions.https.HttpsError("internal", "Unable to fetch analytics data.");
  }
};

exports.getAnalyticsData = functions.https.onCall(async (data, context) => {
  try {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "User must be authenticated to access analytics data."
      );
    }

    const { startDate = "30daysAgo", endDate = "today" } = data;

    // Fetch and return analytics data
    const analyticsData = await fetchAnalyticsData(startDate, endDate);
    return analyticsData;
  } catch (error) {
    console.error("Error in getAnalyticsData function:", error);
    throw error;
  }
});

exports.redirectAndLog = functions.https.onRequest(async (req, res) => {
  try {
    const urlId = req.query.id;
    const urlRef = admin.firestore().collection("shortenedUrls").doc(urlId);
    const urlDoc = await urlRef.get();

    if (!urlDoc.exists) {
      res.status(404).send("URL not found");
      return;
    }

    const urlData = urlDoc.data();
    const redirectUrl = urlData.originalUrl;

    // Log click event to Firebase Analytics
    admin.analytics().logEvent("url_click", { url: redirectUrl });

    // Redirect the user
    res.redirect(redirectUrl);
  } catch (error) {
    console.error("Error in redirectAndLog function:", error);
    res.status(500).send("Internal server error");
  }
});

exports.getUrlPerformance = functions.https.onCall(async (data, context) => {
  try {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "User must be authenticated to access URL performance data."
      );
    }

    const urlId = data.urlId;
    const urlRef = admin.firestore().collection("shortenedUrls").doc(urlId);
    const urlDoc = await urlRef.get();

    if (!urlDoc.exists) {
      throw new functions.https.HttpsError("not-found", "URL not found");
    }

    const urlData = urlDoc.data();

    // Fetch analytics data for the specific URL
    const analyticsData = await fetchAnalyticsData("30daysAgo", "today"); // Adjust the date range as needed

    // Example processing - you may need to filter or aggregate based on your needs
    const clickCount = analyticsData.rows ? parseInt(analyticsData.rows[0][1], 10) : 0;

    return { urlData: urlData, clickCount: clickCount || 0 };
  } catch (error) {
    console.error("Error in getUrlPerformance function:", error);
    throw error;
  }
});
