export const SITE = {
  website: "https://anirudhmehra.dev/",
  author: "Anirudh Mehra",
  profile: "https://github.com/anirudhmehra",
  desc:
    "Personal website and blog of Anirudh Mehra, a developer at Oracle Cloud.",
  title: "Anirudh Mehra",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/anirudhmehra/anirudhmehra.dev/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kolkata", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
