<template>
  <PreloaderComponent />
  <div class="user-profile-container">
    <!-- User Profile and Tabs -->
    <div class="user-profile" v-if="signedIn">
      <img :src="profilePicture" alt="profile" class="profile-picture" />
      <div class="user-details">
        <p>
          <em>Welcome</em> <strong>{{ firstname }}</strong>
        </p>
        <p>@{{ username }}</p>
        <p>{{ email }}</p>
      </div>
    </div>

    <div v-if="signedIn" class="tabs">
      <button :class="{ active: activeTab === 'urls' }" @click="activeTab = 'urls'">
        Shortened URLs
      </button>
      <button :class="{ active: activeTab === 'general' }" @click="activeTab = 'general'">
        Account Information
      </button>
    </div>

    <div class="tab-content">
      <!-- Shortened URLs Content -->
      <div v-if="signedIn && activeTab === 'urls'">
        <h4>Shortened URLs</h4>
        <div class="url-list-container">
          <ul class="url-list">
            <li v-for="url in urls" :key="url.id" class="url-item">
              <div class="url-info">
                <p class="original-url"><strong>Original: </strong> {{ url.url }}</p>
                <p class="my-alias"><strong>Alias: </strong> {{ url.alias }}</p>
                <p class="my-selectedDomain">
                  <strong>Selected Domain: </strong> {{ url.selectedDomain }}
                </p>
                <p class="shortened-url">
                  <strong>Shortened: </strong>
                  <a :href="url.shortenedURL" target="_blank">{{ url.shortenedURL }}</a>
                </p>
                <!-- <p class="clicks"><strong>Clicks:</strong> {{ url.clickCount || 0 }}</p> -->
                <p class="created-at">
                  <strong>Created:</strong> {{ formatCreatedAt(url.createdAt) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- General Information Content -->
      <div v-if="signedIn && activeTab === 'general'">
        <h4>Account Information</h4>
        <p>
          <strong>Full Name:</strong> {{ firstname }} <strong>{{ lastname }}</strong>
        </p>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Total Shortened URLs:</strong> {{ urlCount }}</p>
        <p><strong>Total Clicks:</strong> {{ totalClicks }}</p>
      </div>
    </div>
    
    <router-link :to="{path: '/', hash: '#analytics'}">
      <button v-if="signedIn" class="primary">+ Shorten a new URL ✨</button>
    </router-link>

    <!-- Message for users not signed in -->
    <div v-if="!signedIn" class="not-signed-in-message">
      <h4>Please sign in to view your created URLs.</h4>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { getAuth } from "firebase/auth";
import PreloaderComponent from "@/components/PreloaderComponent.vue";

// Helper function to generate a RoboHash avatar based on the user's email
const generateAvatarUrl = (email) => {
  return `https://robohash.org/${encodeURIComponent(email)}?size=100x100`;
};

// Reactive references for storing user data and state
const profilePicture = ref("");
const email = ref("");
const firstname = ref("");
const lastname = ref("");
const username = ref("");
const userId = ref(""); // To store the actual user ID
const activeTab = ref("urls"); // Default tab
const urls = ref([]);
const urlCount = ref(0);
const totalClicks = ref(0);
const signedIn = ref(false); // Track if the user is signed in

// Firebase Auth initialization
const auth = getAuth();

// Function to format the createdAt timestamp to a readable string
const formatCreatedAt = (createdAt) => {
  if (!createdAt) return "Unknown";
  if (createdAt.toDate) {
    return createdAt.toDate().toLocaleString(); // For Firebase Timestamp
  }
  if (createdAt instanceof Date) {
    return createdAt.toLocaleString(); // For JavaScript Date object
  }
  return createdAt; // Default case, assuming it's already a string
};

// Function to fetch user data from Firestore using the userId
const fetchUserData = async () => {
  if (!userId.value) return; // Exit if no userId

  try {
    const userRef = doc(db, "users", userId.value); // Use userId.value to get the document reference
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      // console.log("Fetched user data:", userData);

      // Update the reactive references with the fetched user data
      firstname.value = userData.firstname || "No name available";
      username.value = userData.username || "No username available";
      email.value = userData.email || "No email available";
      profilePicture.value = generateAvatarUrl(email.value);
      urlCount.value = userData.urlCount || 0;
      totalClicks.value = userData.totalClicks || 0;
      lastname.value = userData.lastname || "No lastname available";
    } else {
      console.log("No user data found for userId:", userId.value);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

// Function to fetch user's shortened URLs from Firestore using the userId
const fetchUserUrls = async () => {
  if (!userId.value) {
    console.log("No userId available.");
    return; // Exit if no userId
  }

  try {
    const urlRef = collection(db, "urls");
    const q = query(urlRef, where("userId", "==", userId.value));
    const querySnapshot = await getDocs(q);

    const fetchedUrls = [];
    querySnapshot.forEach((doc) => {
      fetchedUrls.push({ id: doc.id, ...doc.data() });
    });

    urls.value = fetchedUrls;
    urlCount.value = fetchedUrls.length;
    // console.log("Fetched URLs:", fetchedUrls);
  } catch (error) {
    // console.error("Error fetching URLs:", error.message);
  }
};

// Check Firebase auth state on component mount and fetch data accordingly
onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      email.value = user.email;
      userId.value = user.uid;
      signedIn.value = true;
      // console.log("Authenticated user email:", email.value);
      // console.log("Authenticated user ID:", userId.value);
      fetchUserData(); // Fetch user data after auth state is confirmed
      fetchUserUrls(); // Fetch URLs after auth state is confirmed
    } else {
      signedIn.value = false;
      console.log("No user is signed in.");
    }
  });
  return () => unsubscribe();
});
</script>

<style scoped>
.user-profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 24px;
  margin-top: 96px;
}

.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 2px solid green;
}

.user-details {
  text-align: center;
  margin-bottom: 16px;
}

button {
  padding: 8px 16px;
  background-color: #fff;
  color: #007bff;
  border: 2px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
  height: 48px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
  height: 64px;
}

.tab-content div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.tab-content h4 {
  padding-bottom: 8px;
  color: #007bff;
}

.tabs button {
  color: #007bff;
  border-radius: 0;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 800px;
  width: 100%;
  height: 100%;
}

.tabs button.active, button.primary {
  background-color: #007bff;
  color: #fff;
  border-radius: 800px;
}

button.primary {
  margin-top: 40px;
  background-color: #007bff1c;
  color: #007bff;
  border: none;
  min-width: 88vw;
  height: 3.5rem;
}

.tab-content {
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
}

h2 {
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  text-align: center;
}

.url-list {
  display: flex;
  list-style-type: none;
  gap: 8px;
  padding: 0;
  flex-direction: column;
}

.url-item {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
}

.url-info {
  display: flex;
  flex-direction: column;
}

.original-url,
.shortened-url,
.alias,
.created-at {
  font-size: 16px;
}

.shortened-url a {
  color: #007bff;
  text-decoration: none;
}

.shortened-url a:hover {
  text-decoration: underline;
}

.original-url {
  word-wrap: break-word;
}
</style>
