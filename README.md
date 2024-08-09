```markdown
# semester-three-project

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

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```
   git clone https://github.com/jcrichlee/scissor-app.git
   ```

2. **Navigate to the project directory:**

   ```
   cd scissor-app
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

4. **Run the development server:**

   ```
   npm run serve
   ```

5. **Build for production:**

   ```
   npm run build
   ```
## Project Structure

The project is organized as follows:
```
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

```
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

```
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

```
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

```
getters: {
  getFaqs: (state) => state.faqs,
}
```

## Styling

Global styles are handled in `main.js/@/assets/styles/index.css`, ensuring that common styles are consistent throughout the application.

### Example of a Global Style:

```
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
