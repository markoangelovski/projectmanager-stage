const avatarTrigger = () => {
  // Set user avatar from local storage
  const userAvatar = JSON.parse(localStorage.user).avatar_url;

  // Set user nickname from local storage
  const userName = JSON.parse(localStorage.user).email.split("@")[0];

  // Create output
  const avatar = `<img alt="user-image" class="rounded-circle user-avatar" src="${userAvatar}">
  <span class="pro-user-name ml-1"><span class="user-name" style="text-transform: capitalize;">${userName}</span>
      <i class="mdi mdi-chevron-down"></i>
  </span>`;

  // Render output
  document.querySelector(".nav-user").innerHTML = avatar;
};

export default avatarTrigger();
