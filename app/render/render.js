// Generic render HTML function, takes HTML element in string format and position in the DOM
const render = (html, element) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return element.appendChild(doc.body.firstChild);
};

export default render;
