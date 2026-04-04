export const SITE = {
  website: "https://www.anirudhmehra.dev/",
  title: "Anirudh Mehra",
  desc: "Personal website and blog of Anirudh Mehra on cloud infrastructure, web engineering, developer tools, and software systems.",
  email: "me@anirudhmehra.dev",
  jobTitle: "Developer at Oracle Cloud",
  profile: "https://github.com/anirudhmehra",
  sameAs: [
    "https://github.com/anirudhmehra",
    "https://www.linkedin.com/in/mehra-anirudh/",
  ],
  location: "India",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/anirudhmehra/anirudhmehra.dev/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kolkata", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
