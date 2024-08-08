import { createStore } from "vuex";
import { mapGetters } from "vuex";

const store = createStore({
  name: "PricingComponent",
  computed: {
    ...mapGetters([
      "getPricingPlans",
      "getFaqs",
      "getScissorsLinks",
      "getResourcesLinks",
      "getSolutionsLinks",
      "getFeaturesLinks",
      "getProductsLinks",
      "getLegalLinks",
      "getCompanyLinks",
    ]),
  },
  data() {
    return {
      pricingPlans: this.getPricingPlans,
    };
  },
  methods: {
    navigateTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  state: {
    faqs: [
      {
        question: "Who is the owner of AltSchool?",
        answer:
          "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      },
      {
        question:
          "Is it necessary to create an account to use the URL shortening service?",
        answer:
          "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      },
      {
        question: "Are the shortened links permanent? Will they expire?",
        answer:
          "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      },
      {
        question:
          "Are there any limitations on the number of URLs I can shorten?",
        answer:
          "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      },
      {
        question:
          "Can I customize the shortened URLs to reflect my brand or content?",
        answer:
          "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      },
      {
        question: "Can I track the performance of my shortened URLs?",
        answer:
          "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      },
      {
        question:
          "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
        answer:
          "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      },
      {
        question: "What is a QR code and what can it do?",
        answer:
          "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      },
      {
        question:
          "Is there an API available for integrating the URL shortening service into my own applications or websites?",
        answer:
          "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      },
    ],
    // Footer links state
    scissorsLinks: [
      { text: "Scissors 101", href: "#scissors101" },
      { text: "Integrations & API", href: "#integrations-api" },
      { text: "Pricing", href: "#footerPricing" },
    ],
    resourcesLinks: [
      { text: "Blog", href: "#blog" },
      { text: "Resource Library", href: "#resourceLibrary" },
      { text: "Developers", href: "#developers" },
      { text: "App Connectors", href: "#appConnectors" },
      { text: "App Support", href: "#appSupport" },
      { text: "Trust Center", href: "#trustCenter" },
      { text: "Browser Extension", href: "#browserExtension" },
      { text: "Mobile App", href: "#mobileApp" },
    ],
    solutionsLinks: [
      { text: "Social Media", href: "#socialMedia" },
      { text: "Digital Marketing", href: "#digitalMarketing" },
      { text: "Customer Service", href: "#customerService" },
      { text: "For Developers", href: "#forDevelopers" },
    ],
    featuresLinks: [
      { text: "Branded Links", href: "#brandedLinks" },
      { text: "Mobile Links", href: "#mobileLinks" },
      { text: "Campaign", href: "#campaign" },
      { text: "Management & Analytics", href: "#managementAnalytics" },
      { text: "QR Code generation", href: "#qrCodeGeneration" },
    ],
    productsLinks: [
      { text: "Link Managements", href: "#linkManagement" },
      { text: "QR Codes", href: "#qrCodes" },
      { text: "Link-in-bio", href: "#linkInBio" },
    ],
    legalLinks: [
      { text: "Privacy Policy", href: "#privacyPolicy" },
      { text: "Cookie Policy", href: "#cookiePolicy" },
      { text: "Terms of Service", href: "#termsOfService" },
      { text: "Acceptable Use Policy", href: "#acceptableUsePolicy" },
      { text: "Code of Conduct", href: "#codeOfConduct" },
    ],
    companyLinks: [
      { text: "About Scissors", href: "#aboutScissors" },
      { text: "Careers", href: "#careers" },
      { text: "Partners", href: "#partners" },
      { text: "Press", href: "#press" },
      { text: "Contacts", href: "#contact" },
      { text: "Reviews", href: "#review" },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getFaqs: (state) => state.faqs,
    // Footer links getters
    getScissorsLinks: (state) => state.scissorsLinks,
    getResourcesLinks: (state) => state.resourcesLinks,
    getSolutionsLinks: (state) => state.solutionsLinks,
    getFeaturesLinks: (state) => state.featuresLinks,
    getProductsLinks: (state) => state.productsLinks,
    getLegalLinks: (state) => state.legalLinks,
    getCompanyLinks: (state) => state.companyLinks,
  },
});

export default store;
