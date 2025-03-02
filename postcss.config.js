// postcss.config.js
const tailwindWeb = require('./tailwind.config.web.js'); // فایل پیکربندی وب
const tailwindMobile = require('./tailwind.config.mobile.js'); // فایل پیکربندی موبایل

module.exports = ({ mode }) => {
  return {
    plugins: {
      tailwindcss: mode === 'mobile' ? tailwindMobile : tailwindWeb, // استفاده از پیکربندی مناسب
      autoprefixer: {},
    },
  };
};
