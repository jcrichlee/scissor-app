<template>
  <div class="user-profile-container">
    <div class="user-profile">
      <img :src="profilePicture" alt="profile" class="profile-picture" />
      <div class="user-details">
        <h3>{{ fullName }}</h3>
        <p>
          <em> ID: {{ userId }} </em>
        </p>
      </div>
      <button @click="editProfile">Edit profile</button>
    </div>
    <div class="tabs">
      <button :class="{ active: activeTab === 'general' }" @click="activeTab = 'general'">
        General Information
      </button>
      <button :class="{ active: activeTab === 'urls' }" @click="activeTab = 'urls'">
        Shortened URLs
      </button>
      <button :class="{ active: activeTab === 'settings' }" @click="activeTab = 'settings'">
        Settings
      </button>
    </div>
    <div class="tab-content">
      <div v-if="activeTab === 'general'">
        <!-- General Information Content -->
        <h4>General Information</h4>
        <p><strong>Phone</strong>: {{ phoneNumber }}</p>
        <p><strong>Email</strong>: {{ emailAddress }}</p>
      </div>
      <div v-if="activeTab === 'urls'">
        <!-- Shortened URLs Content -->
        <h4>Shortened URLs</h4>
        <div class="url-list-container" v-if="!loading">
          <h2>Your Shortened URLs</h2>
          <ul class="url-list">
            <li v-for="url in urls" :key="url.id" class="url-item">
              <div class="url-info">
                <p class="original-url"><strong>Original:</strong> {{ url.originalURL }}</p>
                <p class="shortened-url">
                  <strong>Shortened:</strong>
                  <a :href="url.shortenedURL" target="_blank">{{ url.shortenedURL }}</a>
                </p>
                <p class="created-at">
                  <strong>Created At:</strong> {{ url.createdAt?.toDate().toLocaleString() }}
                </p>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <div v-if="activeTab === 'settings'">
        <!-- Settings Content -->
        <h4>Settings</h4>
        <p>User settings...</p>
      </div>
    </div>
  </div>
</template>

<script>
import profilePicture from "@/assets/images/profile-picture.jpg";

export default {
  data() {
    return {
      profilePicture,
      fullName: "Richard Adeyele",
      phoneNumber: "123-456-7890",
      emailAddress: "johndoe@example.com",
      userId: "24462843",
      activeTab: "general"
    }
  },
  methods: {
    editProfile() {}
  }
}
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

.url-list-container {
  width: 96vw;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  text-align: center;
}

.url-list {
  list-style-type: none;
  padding: 0;
}

.url-item {
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}

.url-info {
  display: flex;
  flex-direction: column;
}

.original-url,
.shortened-url,
.created-at {
  margin-bottom: 8px;
  font-size: 16px;
}

.shortened-url a {
  color: #007bff;
  text-decoration: none;
}

.shortened-url a:hover {
  text-decoration: underline;
}

.url-item:last-child {
  margin-bottom: 0;
}
</style>
