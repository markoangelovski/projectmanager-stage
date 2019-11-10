// Dynamic import of the entire Kanboard functionality
// Loading eaach file sequentialy resulted in different errors on each pageload
const newScript = document.createElement("script");
newScript.setAttribute("type", "text/javascript");
newScript.setAttribute("src", "assets/js/kanboard.js");

document.getElementsByTagName("body")[0].appendChild(newScript);
