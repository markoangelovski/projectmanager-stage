// Dynamic import of the entire Kanboard functionality
// Loading eaach file sequentialy resulted in different errors on each pageload
const kanboard = document.createElement("script");
kanboard.setAttribute("type", "text/javascript");
kanboard.setAttribute("src", "assets/js/kanboard.js");

const body = document.getElementsByTagName("body")[0];
body.appendChild(kanboard);
