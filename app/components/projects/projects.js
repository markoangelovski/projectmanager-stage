import kanboardTitle from "../kanboard-title/kanboardTitle";
import leftSidebar from "../left-sidebar/leftSidebar";
import renderTasks from "../tasks/renderTasksKanboard";
import displayProject from "./lib/displayProject";
import createProjectTrigger from "./lib/createProject";
import deleteProjectTrigger from "./lib/deleteProject";
import router from "../../router/router";

// Set breadcrumbs
document.querySelector(".breadcrumb-item.active").innerHTML = "Overview";

// Set Kanboard title
kanboardTitle({
  title: "Overview",
  projectCount: localStorage.projectCount,
  taskCount: localStorage.taskCount
});

// Set Left Sidebar
leftSidebar();

// Render all tasks to Overview UI
renderTasks([]);

// Initiate Create Project trigger
createProjectTrigger();

// Initiate Delete Project trigger
deleteProjectTrigger();

// Get elements from Left Sidebar
document
  .getElementById("overview-link")
  .addEventListener("click", displayProject);
document
  .getElementById("project-menu-dropdown")
  .addEventListener("click", displayProject);
