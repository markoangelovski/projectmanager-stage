// Styles import
import "./styles/main.css";

// App start
import checkAuth from "./helpers/auth.helper";
import { getProjectDetails } from "./drivers/Project/project.driver";
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
    // If backend is down render failiure message
    console.warn(error);
    apiFailiure();
  }
})();

export const renderProjectManager = async () => {
  try {
    // Fetch project details
    await getProjectDetails();
    const {
      projectManagerBody
    } = require("./components/project-manager-body/projectManagerBody");
    body.insertAdjacentHTML("afterbegin", projectManagerBody);
    // Dynamic import for the rest of the app functionality
    require("./lib/appInit");
    import(/* webpackChunkName: "app"*/ "./components/app");
  } catch (error) {
    // If backend is down render failiure message
    console.warn(error);
    apiFailiure();
  }
};

const apiFailiure = () => {
  // Load login form
  const { loginForm } = require("./components/login/loginForm");
  // If api is not available, render login form with warning and disable log in button
  body.insertAdjacentHTML("afterbegin", loginForm);
  const warning = document.querySelector(".invalid-feedback");
  warning.innerHTML =
    "Application is not available at the moment. Try again later.";
  warning.setAttribute("style", "display: block;");
  document.querySelector("#login-form button").setAttribute("disabled", "");
};
