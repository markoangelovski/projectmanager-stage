export default function leftSidebar(id) {
  // Display the number of projects in UI
  const projectCount = localStorage.getItem("projectCount");
  const countContainer = document.getElementById("project-count");

  if (projectCount > 0) {
    countContainer.innerHTML = projectCount;
  } else {
    countContainer.innerHTML = 0;
  }

  // Get sidebar project elementss
  const selectedProjectRoot = document.getElementById("project-menu")
    .firstElementChild;
  const projectNav = selectedProjectRoot.nextElementSibling;
  const projectKanboard = projectNav.firstElementChild.firstElementChild;
  const projectDetails = projectNav.lastElementChild.firstElementChild;
  const selectedProjectPlaceholder = document.getElementById(
    "project-title-placeholder"
  );

  if (id) {
    // Display the projects in Left Sidebar
    const projects = JSON.parse(localStorage.getItem("projects"));
    selectedProjectRoot.parentElement.setAttribute("style", "display:block;");

    const selectedProject = projects.find(project => project._id === id);
    selectedProjectPlaceholder.innerText = selectedProject.title;
    projectKanboard.id = id;
    projectDetails.dataset.anchor = id;
  } else {
    selectedProjectRoot.parentElement.setAttribute("style", "display:none;");
  }
}
