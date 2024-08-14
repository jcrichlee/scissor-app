import axios from "axios";

// Bitly API
export async function shortenWithBitly(longUrl) {
  const bitlyAccessToken = "5fed807b85e947349cf40d44ad5c42d86f511378";
  const bitlyApiUrl = "https://api-ssl.bitly.com/v4/shorten";
  try {
    const response = await axios.post(
      bitlyApiUrl,
      { long_url: longUrl },
      {
        headers: {
          Authorization: `Bearer ${bitlyAccessToken}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.link;
  } catch (error) {
    console.error("Bitly error:", error.response?.data || error.message);
    throw error;
  }
}

// TinyURL API
export async function shortenWithTinyURL(longUrl) {
  const tinyUrlApiKey = "JEao7bG1yu2K8y7VCdbzLjWMvFUZhNlTXrWOHUim5sBm3RtsXRjRwJrRkkkt";
  try {
    const response = await axios.post(
      "https://api.tinyurl.com/create",
      {
        url: longUrl,
        domain: "tiny.one"
      },
      {
        headers: {
          Authorization: `Bearer ${tinyUrlApiKey}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.data.tiny_url;
  } catch (error) {
    console.error("TinyURL error:", error.response?.data || error.message);
    throw error;
  }
}

// Rebrandly API
export async function shortenWithRebrandly(longUrl) {
  const rebrandlyApiKey = "4508f134df2c4ef1bd341ec61eb574cf";
  const rebrandlyApiUrl = "https://api.rebrandly.com/v1/links";
  try {
    const response = await axios.post(
      rebrandlyApiUrl,
      { destination: longUrl, domain: { fullName: "rebrand.ly" } },
      {
        headers: {
          "Content-Type": "application/json",
          apikey: rebrandlyApiKey
        }
      }
    );
    return response.data.shortUrl;
  } catch (error) {
    console.error("Rebrandly error:", error.response?.data || error.message);
    throw error;
  }
}
