export const SITE = {
  website: "https://thinkly.cc/", // 你的网站域名
  author: "Thinkly", // 作者昵称或名称
  profile: "https://thinkly.cc/", // 作者个人主页链接
  desc: "欢迎来到我的个人博客，这里记录了我的项目实践、学习笔记，以及一些有趣的思考和生活碎片⭐️",
  title: "Thinkly", // 网站主标题
  ogImage: "astropaper-og.jpg", // 默认分享图像
  lightAndDarkMode: true, // 是否启用深/浅色模式切换
  postPerIndex: 8, // 首页显示的文章数量
  postPerPage: 8, // 每页显示的文章数量
  scheduledPostMargin: 15 * 60 * 1000, // 允许延迟发布的时间间隔（15分钟）
  showArchives: true, // 是否开启“归档”页面
  showBackButton: true, // 文章页是否显示返回按钮
  editPost: {
    enabled: false,
    text: "编辑此页",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true, // 是否启用动态 OG 图
  dir: "auto", // 文本方向 auto/ltr/rtl
  lang: "zh-CN", // 页面语言（推荐中文站点设置为 zh-CN）
  timezone: "Asia/Shanghai", // 你的时区（中国大陆建议设为 Asia/Shanghai）
} as const;
