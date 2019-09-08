// Images import from config/users.json
import users from "../../../config/users";

// Get img elements from the DOM
const images = Array.from(document.querySelectorAll("img"));
const avatars = images.filter(image => image.hasAttribute("class"));

(function displayUsers() {
  // Render images to DOM img elements
  let counter = 0;
  avatars.forEach((avatar, i, avatars) => {
    users.forEach((user, j, users) => {
      avatars[counter].src = users[counter].img;
      //console.log("I je ", i, "Counter je ", counter);
      counter++;
      if (counter === users.length) {
        counter = 0;
      }
    });
  });
})();
