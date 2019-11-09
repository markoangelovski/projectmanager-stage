// Styles import
import "./styles/main.css";

// App start
import checkAuth from "./helpers/auth.helper";
import logIn from "./components/login/login";

// Get body element
const body = document.getElementsByTagName("body")[0];

(async () => {
  // Check if user is authenticated
  try {
    const checked = await checkAuth();

    if (checked) {
      // If user is authenticated render project manager body
      renderProjectManager();
    } else {
      // Load login form
      const { loginForm } = require("./components/login/loginForm");
      // If not render login form
      body.insertAdjacentHTML("afterbegin", loginForm);
      document.getElementById("login-form").addEventListener("submit", logIn);
    }
  } catch (error) {
    // Load login form
    const { loginForm } = require("./components/login/loginForm");
    // If api is not available, render login form with warning and disable log in button
    body.insertAdjacentHTML("afterbegin", loginForm);
    document.getElementById("login-form").addEventListener("submit", logIn);
    const warning = document.querySelector(".invalid-feedback");
    warning.innerHTML =
      "Application is not available at the moment. Try again later.";
    warning.setAttribute("style", "display: block;");
    document.querySelector("#login-form button").setAttribute("disabled", "");
  }
})();

export const renderProjectManager = () => {
  const {
    projectManagerBody
  } = require("./components/project-manager-body/projectManagerBody");
  body.innerHTML = projectManagerBody;
  // Dynamic import for the rest of the app functionality
  import(/* webpackChunkName: "app"*/ "./components/app");
};
