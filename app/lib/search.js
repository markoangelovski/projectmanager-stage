import { getProject } from "../helpers/localStorage.helper";
import leftSidebar from "../components/left-sidebar/leftSidebar";
import displayProject from "../components/projects/lib/displayProject";
import { searchLeftSideBar } from "./searchLeftSideBar";

const search = document.getElementById("search");
search.addEventListener("keyup", displaySearch);
document.querySelector(".app-search").addEventListener("submit", displaySearch);

// Flter through projects and match Title and Description with a term
function searchProjects(term) {
  return getProject().filter(project => {
    const regex = new RegExp(term, "gi");
    return project.title.match(regex) || project.description.match(regex);
  });
}

// Display searched Project
function displaySearch(e) {
  e.preventDefault();
  const results = searchProjects(search.value);
  console.log("this ", results);
  const searchResultsPlaceholder = document.createDocumentFragment();

  // Create outout
  results.forEach(result => {
    const anchor = document.createElement("a");
    anchor.setAttribute("data-anchor", result._id);
    anchor.setAttribute("href", "javascript:void(0);");
    anchor.classList = "dropdown-item";
    const icon = document.createElement("i");
    icon.classList = "fe-settings mr-1";
    icon.setAttribute("data-anchor", result._id);
    const title = document.createTextNode(result.title);

    anchor.appendChild(icon);
    anchor.appendChild(title);
    searchResultsPlaceholder.appendChild(anchor);
  });
  // Render output to UI
  const searchResults = document.getElementById("search-results");
  while (searchResults.firstChild)
    searchResults.removeChild(searchResults.firstChild);
  searchResults.appendChild(searchResultsPlaceholder);
  searchResults.classList.add("show");

  // Remove search output from UI by clicking outside
  window.addEventListener("click", () =>
    searchResults.classList.remove("show")
  );

  // Load selected Project
  searchResults.addEventListener("click", function handler(e) {
    searchResults.classList.remove("show");
    leftSidebar(e.target.dataset.anchor);
    displayProject(e);

    // Remove event listeners
    this.removeEventListener("click", handler);
  });
}

// Init left sidebar search
searchLeftSideBar();
