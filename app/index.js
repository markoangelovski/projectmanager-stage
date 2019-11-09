// Styles import
import "./styles/main.css";

// App start
import checkAuth from "./helpers/auth.helper";
import logIn from "./components/login/login";

// Get body element
const body = document.getElementsByTagName("body")[0];

(async () => {
  // Check if user is authenticated
  if (await checkAuth()) {
    // If user is authenticated render project manager body
    const {
      projectManagerBody
    } = require("./components/project-manager-body/projectManagerBody");
    body.innerHTML = projectManagerBody;
  } else {
    // Load login form
    const { loginForm } = require("./components/login/loginForm");
    // If not render login form
    body.insertAdjacentHTML("afterbegin", loginForm);
    document.getElementById("login-form").addEventListener("submit", logIn);
  }
})();
