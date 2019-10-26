// Images import from config/users.json
//import users from "../../../config/users";

// Get img elements from the DOM
const images = Array.from(document.querySelectorAll("img"));
const avatars = images.filter(image => image.hasAttribute("class"));

(function displayUsers() {
  // Render images to DOM img elements
  avatars.forEach((avatar, i, avatars) => {
    avatar.src = `https://source.unsplash.com/collection/${Math.floor(
      Math.random() * 1000000
    )}/50x50`;
  });
})();
