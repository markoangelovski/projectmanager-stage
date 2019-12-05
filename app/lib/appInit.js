// Import of main app functionalities
const vendor = document.createElement("script");
vendor.setAttribute("type", "text/javascript");
vendor.setAttribute("src", "assets/js/vendor.min.js");

const app = document.createElement("script");
app.setAttribute("type", "text/javascript");
app.setAttribute("src", "assets/js/app.min.js");

const body = document.getElementsByTagName("body")[0];
body.appendChild(vendor);
setTimeout(() => {
  body.appendChild(app);
}, 0);
