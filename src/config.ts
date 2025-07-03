export const SITE = {
  website: "https://thinkly.cc/", // replace this with your deployed domain
  author: "Notink",
  profile: "https://thinkly.cc/",
  desc: "欢迎来到我的个人博客，在这个博客中，我将写下我的项目（我做什么/我如何做）、我的个人经历以及一些随机的东西⭐",
  title: "Notink",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 11,
  postPerPage: 11,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
