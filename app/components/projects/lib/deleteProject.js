import displayProject from "./displayProject";
import kanboardTitle from "../../kanboard-title/kanboardTitle";
import { apiCallDelete } from "../../../helpers/api.helper";
import { getProject } from "../../../helpers/localStorage.helper";
import leftSidebar from "../../left-sidebar/leftSidebar";
import spinner from "../../../lib/spinner";
import { alertError, alertSuccess } from "../../../lib/alerts";

const deleteProjectTrigger = () => {
  // Get observeables and initiate Project ID variable
  const projectLink = document.getElementById("project-details-link");
  let id;

  const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      id = mutation.target.dataset.anchor;
    });
  });
  mutationObserver.observe(projectLink, {
    attributes: true
  });

  // Delete project
  document
    .getElementById("project-delete-display")
    .addEventListener("click", function handler() {
      if (confirm("Are you sure you want to delete this project?"))
        deleteProject(id);
      // this.removeEventListener("click", handler);
    });
};

async function deleteProject(id) {
  // Set spinner loading screen
  spinner(true);
  try {
    const deletedProject = await apiCallDelete(id, "projects");
    if (deletedProject.error) alertError(deletedProject.message);
    alertSuccess(deletedProject.message);

    // Remove deleted project from local storage
    localStorage.projects = JSON.stringify(
      getProject().filter(project => project._id !== id)
    );
    localStorage.projectCount = parseInt(localStorage.projectCount) - 1;
    document.getElementById("project-count").innerText =
      localStorage.projectCount;

    // Set Kanboard title
    kanboardTitle({
      title: "Overview",
      projectCount: localStorage.projectCount,
      taskCount: localStorage.taskCount
    });

    // Reset Left Sidebar
    leftSidebar();

    spinner(false);
  } catch (error) {
    console.warn(error);
    spinner(false);
    alertError(error);
  }

  // Reset display
  displayProject();
}
export default deleteProjectTrigger;
