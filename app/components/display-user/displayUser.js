const avatarTrigger = () => {
  // Set user avatar from local storage
  document.querySelector(".user-avatar").src = JSON.parse(
    localStorage.user
  ).avatar_url;

  // Set user nickname from localstorage
  const userName = document.querySelector(".user-name");
  userName.textContent = JSON.parse(localStorage.user).email.split("@")[0];
  userName.setAttribute("style", "text-transform: capitalize;");
};

export default avatarTrigger();
