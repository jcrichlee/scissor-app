# Scissor - URL Shortening Service

## Project Overview

**Scissor** is a URL shortening service designed to make long URLs concise and easily shareable. Built with Vue.js, this project includes features like branded links, mobile links, and in-depth analytics, all within a modern, responsive UI composed of reusable components to ensure a consistent user experience.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
  - [Footer Component](#footer-component)
  - [ScrollToTopButton Component](#scrolltotopbutton-component)
- [Vuex Store](#vuex-store)
- [Styling](#styling)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Code Snippets](#code-snippets)
- [Challenging Issues and Solutions](#challenging-issues-and-solutions)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/jcrichlee/scissor-app.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd scissor-app
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the development server:**
    ```bash
    npm run serve
    ```

5. **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure

The project is organized as follows:
```
├── src/
│   ├── assets/                    # Images, icons, and other static assets
│   ├── components/                # Vue components
│   │   ├── Footer.vue             # Footer component
│   │   ├── FooterSection.vue      # Reusable section component for the footer
│   │   ├── FooterPattern.vue      # SVG patterns used in the footer
│   │   ├── ScrollToTopButton.vue  # Button to scroll back to top
│   ├── store/                     # Vuex store
│   │   ├── index.js               # Main store configuration
│   ├── css/
│   │   ├── index.css              # Global CSS styles
│   ├── App.vue                    # Main app component
│   ├── main.js                    # App entry point
├── public/
│   ├── index.html                 # HTML template
├── README.md                      # Project documentation
```

## Key Components

### Footer Component

The `Footer.vue` component serves as the footer for the application, providing structured navigation links and branding. It includes various sections with links grouped logically.

**Example of the Footer Template:**

```vue
<template>
  <footer class="footer">
    <section class="footerLeft">
      <div class="logoBlack">
        <img src="@/assets/images/logoBlack.png" alt="Scissor Logo" />
      </div>
      <div class="socialIcons">
        <img src="@/assets/images/twitter.png" alt="Twitter" />
        <img src="@/assets/images/instagram.png" alt="Instagram" />
        <img src="@/assets/images/linkedin.png" alt="LinkedIn" />
        <img src="@/assets/images/facebook.png" alt="Facebook" />
      </div>
    </section>
  </footer>
</template>
```

**Important Properties:**

- **`scissorsLinks`**: An array of links related to the Scissor service.
- **`resourcesLinks`**: An array of resource-related links.

These properties are stored in the Vuex store for easier management and consistency across different components.

### ScrollToTopButton Component

The `ScrollToTopButton.vue` is a simple component that enhances user experience by allowing users to scroll back to the top of the page quickly.

**Example of the ScrollToTopButton Template:**

```vue
<template>
  <button @click="scrollToTop" class="scrollToTop" aria-label="Scroll to top">
    &#8593;
  </button>
</template>
```

**Methods:**

- **`scrollToTop()`**: Smoothly scrolls the user back to the top of the page.

## Vuex Store

The project uses Vuex for state management, centralizing data flow across the application.

### Store Structure (`store/index.js`):

- **State**: Holds the application's primary data structures, like FAQs and links.
- **Getters**: Expose computed properties for components to use state data.
- **Mutations**: Handle synchronous updates to the state.
- **Actions**: Manage asynchronous tasks before committing mutations.

**Example of the State:**

```javascript
state: {
  faqs: [
    {
      question: "Who is the owner of AltSchool?",
      answer: "URL shortening works by taking a long URL and creating a shorter, condensed version..."
    },
    // Additional FAQs
  ],
  scissorsLinks: [
    { text: "Scissors 101", href: "#scissors101" },
    { text: "Integrations & API", href: "#integrations-api" },
    { text: "Pricing", href: "#footerPricing" },
  ],
  // Additional state data...
}
```

**Example of a Getter:**

```javascript
getters: {
  getFaqs: (state) => state.faqs,
}
```

## Styling

Global styles are handled in `main.js/@/assets/styles/index.css`, ensuring that common styles are consistent throughout the application.

### Example of a Global Style:

```css
.scrollToTop {
  position: sticky;
  left: 96%;
  bottom: 4.5rem;
  top: 4.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #4991ff;
  color: #fff;
  border-radius: 0.5rem;
  text-decoration: none;
}
```

These styles are applied globally and can be extended as needed.

## Usage

Once the project is set up and running, you can navigate through the various features, customize links, and explore the functionalities provided by the Scissor URL shortening service. The Vuex store can be modified to include additional state management as your project scales.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

### Steps to Contribute:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Added some new features'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## Code Snippets

### Firebase Initialization

In `firebase.js`:
```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
```

### URL Shortening API Integration

In `urlShortener.js`:
```javascript
import { ref } from "vue";
import axios from "axios";

const shortenedUrl = ref("");

const shortenUrl = async (originalUrl, domain, alias) => {
  try {
    const response = await axios.post("https://api.example.com/shorten", {
      originalUrl,
      domain,
      alias
    });
    shortenedUrl.value = response.data.shortenedUrl;
  } catch (error) {
    console.error("Error shortening URL:", error);
  }
};

export { shortenedUrl, shortenUrl };
```

### User Profile Component

In `ProfileView.vue`:
```vue
<template>
  <div class="user-profile-container">
    <!-- User Profile and Tabs -->
    <div class="user-profile" v-if="signedIn">
      <img :src="profilePicture" alt="profile" class="profile-picture" />
      <div class="user-details">
        <p><em>Welcome</em> <strong>{{ firstname }}</strong></p>
        <p>@{{ username }}</p>
        <p>{{ email }}</p>
      </div>
    </div>
    <!-- ... other content ... -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { getAuth } from "firebase/auth";

const profilePicture = ref("");
const email = ref("");
const firstname = ref("");
const lastname = ref("");
const username = ref("");
const userId = ref("");
const active

Tab = ref("urls");
const urls = ref([]);
const urlCount = ref(0);
const totalClicks = ref(0);
const signedIn = ref(false);

const auth = getAuth();

const fetchUserData = async () => {
  if (!userId.value) return;
  try {
    const userRef = doc(db, "users", userId.value);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      firstname.value = userData.firstname || "No name available";
      username.value = userData.username || "No username available";
      email.value = userData.email || "No email available";
      profilePicture.value = generateAvatarUrl(email.value);
      urlCount.value = userData.urlCount || 0;
      totalClicks.value = userData.totalClicks || 0;
      lastname.value = userData.lastname || "No lastname available";
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const fetchUserUrls = async () => {
  if (!userId.value) return;
  try {
    const urlRef = collection(db, "shortenedUrls");
    const q = query(urlRef, where("userId", "==", userId.value));
    const querySnapshot = await getDocs(q);
    const fetchedUrls = [];
    querySnapshot.forEach((doc) => {
      fetchedUrls.push({ id: doc.id, ...doc.data() });
    });
    urls.value = fetchedUrls;
    urlCount.value = fetchedUrls.length;
  } catch (error) {
    console.error("Error fetching URLs:", error.message);
  }
};

onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      email.value = user.email;
      userId.value = user.uid;
      signedIn.value = true;
      fetchUserData();
      fetchUserUrls();
    } else {
      signedIn.value = false;
    }
  });
  return () => unsubscribe();
});
</script>
```

## Challenging Issues and Solutions

### 1. **Handling Missing or Insufficient Permissions**

**Issue:** Error fetching URLs due to missing or insufficient permissions.

**Solution:** Updated Firestore security rules to allow authenticated users to read/write data. Ensured rules match user IDs in documents.

### 2. **Automatic User ID Handling in Firestore**

**Issue:** User ID was not automatically sent to Firestore upon signup.

**Solution:** Setup a function to automatically set `userId` in Firestore after signup. Ensured `userId` was correctly scoped and saved in the database.

### 3. **Displaying Shortened URLs**

**Issue:** Shortened URLs were not displayed correctly on the frontend.

**Solution:** Verified the fetching and binding of URLs to the component. Ensured that `urls` was updated reactively and displayed correctly in the template.

### 4. **Ensuring QR Code Download**

**Issue:** QR code generated was not properly downloaded with the alias as the file name.

**Solution:** Implemented functionality to download QR code as PNG with alias using a client-side library, ensuring the file name matches the alias.

## License

[MIT License](LICENSE)
```
