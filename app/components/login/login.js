import { logInCall } from "../../drivers/User/user.driver";
import { renderProjectManager } from "../../index";

const logIn = async e => {
  e.preventDefault();

  // Get body element
  const body = document.getElementsByTagName("body")[0];

  // Get input fields
  const inputEmail = document.getElementById("emailaddress");
  const inputPassword = document.getElementById("password");

  // Set log in spinner
  const { spinner } = require("./loginForm");

  // Get submit button
  const submit = document.querySelector("#login-form button");
  submit.innerHTML = spinner;
  submit.setAttribute("disabled", "");

  // Get user details
  const payload = {
    email: inputEmail.value,
    password: inputPassword.value
  };
  try {
    // Submit user details and receive token
    const login = await logInCall(payload);
    // Save token
    if (login.error) {
      inputEmail.classList.add("is-invalid");
      inputPassword.classList.add("is-invalid");
      submit.innerHTML = " Log In ";
      submit.removeAttribute("disabled");
    } else {
      localStorage.user = JSON.stringify(login.user);
      body.querySelector(".account-pages.mt-5.mb-5").remove();
      // If user is logged in render project manager body
      renderProjectManager();
    }
  } catch (error) {
    console.warn(error);
  }
};
export default logIn;
