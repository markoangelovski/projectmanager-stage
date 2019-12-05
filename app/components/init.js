import kanboardTitle from "./kanboard-title/kanboardTitle";
import leftSidebar from "./left-sidebar/leftSidebar";
import displayProject from "./projects/lib/displayProject";
import createProjectTrigger from "./projects/lib/createProject";
import { calendarTrigger } from "./calendar/lib/calendarInit";
import { logOutTrigger } from "./login/logout";

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

// Initiate Create Project trigger
createProjectTrigger();

// Get elements from Left Sidebar
document
  .getElementById("overview-link")
  .addEventListener("click", displayProject);
document
  .getElementById("project-menu-dropdown")
  .addEventListener("click", displayProject);

// Calendar trigger
calendarTrigger();

// Logout trigger
logOutTrigger();
