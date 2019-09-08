// Get breadcrumbs placeholder
const breadcrumbPlaceholder = document.getElementById("breadcrumb-placeholder");

// Set Root domain breadcrumb
const liMain = document.createElement("li");
liMain.setAttribute("class", "breadcrumb-item");
const aMain = document.createElement("a");
aMain.setAttribute("href", "/");
aMain.innerText = window.location.hostname;
liMain.appendChild(aMain);

breadcrumbPlaceholder.appendChild(liMain);

// Set Pathname breadcrumbs
const pathname = window.location.pathname.toString().split("/");

pathname.shift();
pathname.pop();

const paths = document.createDocumentFragment();

pathname.forEach(path => {
  const li = document.createElement("li");
  li.setAttribute("class", "breadcrumb-item");
  const a = document.createElement("a");
  a.setAttribute("href", "javascript: void(0);");
  a.innerText = path;
  li.appendChild(a);
  paths.appendChild(li);
});

breadcrumbPlaceholder.appendChild(paths);

// Set active breadcrumb
const li = document.createElement("li");
li.setAttribute("class", "breadcrumb-item active");

breadcrumbPlaceholder.appendChild(li);
