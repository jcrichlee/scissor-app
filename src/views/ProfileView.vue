<template>
  <div class="user-profile-container">
    <!-- User Profile and Tabs -->
    <div class="user-profile">
      <img :src="profilePicture" alt="profile" class="profile-picture" />
      <div class="user-details">
        <p>
          <em>Welcome</em> <strong>{{ firstname }}</strong>
        </p>
        <p>@{{ username }}</p>
        <p>{{ email }}</p>
      </div>
    </div>
    <div class="tabs">
      <button :class="{ active: activeTab === 'urls' }" @click="activeTab = 'urls'">
        Shortened URLs
      </button>
      <button :class="{ active: activeTab === 'general' }" @click="activeTab = 'general'">
        Account Information
      </button>
    </div>
    <div class="tab-content">
      <!-- Shortened URLs Content -->
      <div v-if="activeTab === 'urls'">
        <h4>Shortened URLs</h4>
        <div class="url-list-container" v-if="!loading">
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
                <p class="clicks"><strong>Clicks:</strong> {{ url.clickCount || 0 }}</p>
                <p class="created-at">
                  <strong>Created:</strong> {{ formatCreatedAt(url.createdAt) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>Loading URLs...</p>
        </div>
      </div>
      <!-- General Information Content -->
      <div v-if="activeTab === 'general'">
        <h4>Account Information</h4>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Total Shortened URLs:</strong> {{ urlCount }}</p>
        <p><strong>Total Clicks:</strong> {{ totalClicks }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { getAuth } from "firebase/auth"; // Import getAuth

const generateAvatarUrl = (email) => {
  // Use the email as the seed for RoboHash
  return `https://robohash.org/${encodeURIComponent(email)}?size=100x100`;
};

const profilePicture = ref(generateAvatarUrl(""));

const email = ref("");
const firstname = ref("");
const username = ref("");
const userId = ref(""); // Set userId to the actual user ID
const activeTab = ref("urls");
const urls = ref([]);
const loading = ref(true);
const urlCount = ref(0);
const totalClicks = ref(0);

const auth = getAuth(); // Initialize auth

// Format the createdAt value to a readable string
const formatCreatedAt = (createdAt) => {
  if (!createdAt) return "Unknown";
  if (createdAt.toDate) {
    return createdAt.toDate().toLocaleString(); // Firebase Timestamp
  }
  if (createdAt instanceof Date) {
    return createdAt.toLocaleString(); // JavaScript Date object
  }
  return createdAt; // Default case, assume it's a string or already in a readable format
};

// Fetch user data from Firestore using userId
const fetchUserData = async () => {
  if (!userId.value) return; // Exit if no userId

  try {
    const userRef = collection(db, "users");
    const q = query(userRef, where("userId", "==", userId.value));
    const userSnapshot = await getDocs(q);
    const userData = userSnapshot.docs
      .map((doc) => doc.data())
      .find((user) => user.userId === userId.value);

    if (userData) {
      console.log("Fetched user data:", userData); // Debug log
      firstname.value = userData.firstname || "No name available"; // Default value for debugging
      username.value = userData.username || "No username available"; // Default value for debugging
      email.value = userData.email || "No email available"; // Default value for debugging
      profilePicture.value = generateAvatarUrl(email.value); // Generate avatar based on email
      urlCount.value = userData.urlCount || 0;
      totalClicks.value = userData.totalClicks || 0;
    } else {
      console.log("No user data found for userId:", userId.value);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

// Fetch user URLs from Firestore using userId
const fetchUserUrls = async () => {
  if (!userId.value) return; // Exit if no userId

  try {
    const urlsRef = collection(db, "urls");
    const q = query(urlsRef, where("userId", "==", userId.value));
    const urlsSnapshot = await getDocs(q);
    urls.value = urlsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log("Fetched URLs:", urls.value); // Debug log
  } catch (error) {
    console.error("Error fetching URLs:", error);
  } finally {
    loading.value = false;
  }
};

// Check Firebase auth state and fetch user data and URLs
onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      email.value = user.email; // Set the email when user is authenticated
      userId.value = user.uid; // Set userId to the actual user ID
      console.log("Authenticated user email:", email.value); // Debug log
      console.log("Authenticated user ID:", userId.value); // Debug log
      fetchUserData();
      fetchUserUrls();
    } else {
      // Handle case where no user is signed in
      console.log("No user is signed in.");
    }
  });

  // Cleanup the subscription when the component is unmounted
  return () => unsubscribe();
});
</script>

<style scoped>
/* Your existing styles */
</style>




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

.tabs button.active {
  background-color: #007bff;
  color: #fff;
  border-radius: 800px;
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
