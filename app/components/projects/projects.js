import kanboardTitle from "../kanboard-title/kanboardTitle";
import renderProjectDetails from "../../lib/renderProjectDetails";
import renderTasks from "../tasks/renderTasksKanboard";
import router from "../../router/router";

// Get placeholders
const kanboardTitlePlaceholder = document.querySelector("h4.page-title");
const breadcrumb = document.querySelector(".breadcrumb-item.active");
const kanboardPlaceholder = document.getElementById("kanboard-placeholder");
const projectDetailsPlaceholder = document.getElementById(
  "project-details-placeholder"
);
const taskDetailsPlaceholder = document.getElementById(
  "task-details-placeholder"
);

// Set Kanboard title
const projectCount = localStorage.getItem("projectCount");
const taskCount = localStorage.getItem("taskCount");
kanboardTitlePlaceholder.appendChild(
  kanboardTitle({
    title: "Overview",
    projectCount,
    taskCount
  })
);

// Set Breadcrumb
breadcrumb.innerHTML = "Overview";

// Render all tasks to Overview UI
renderTasks([]);

// Get elements from Left Menu
document.getElementById("overview").addEventListener("click", projectDisplay);

// Render tasks of the selected Project
export default function projectDisplay(e) {
  // If Overview is selected, render Overview Title and Tasks
  if (e.target.innerText === "Overview") {
    // Set route to /projects
    //router({ projects: "projects" });

    // Hide New Task buttons
    document.querySelectorAll(".new-task").forEach(button => {
      if (!button.classList.contains("d-none")) button.classList.add("d-none");
    });

    // Set Overview title class to active
    document.getElementById("overview-link").className = "active";

    // Reset Kanboard visibility
    kanboardPlaceholder.setAttribute("style", "display: flex");
    projectDetailsPlaceholder.setAttribute("style", "display: none");
    taskDetailsPlaceholder.setAttribute("style", "display: none");

    // Set Kanboard title
    kanboardTitlePlaceholder.appendChild(
      kanboardTitle({
        title: "Overview",
        projectCount,
        taskCount
      })
    );
    // Set Breadcrumb
    breadcrumb.innerHTML = "Overview";

    // Render all tasks to Overview UI
    renderTasks([]);
  } else if (e.target.id.match(/^[a-f\d]{24}$/i) || e.target.dataset) {
    // Reset Overview title class
    document.getElementById("overview-link").className = "";

    // Display New Task buttons
    document.querySelectorAll(".new-task").forEach(button => {
      if (button.classList.contains("d-none"))
        button.classList.remove("d-none");
    });

    // Reset Kanboard visibility
    kanboardPlaceholder.setAttribute("style", "display: flex");
    projectDetailsPlaceholder.setAttribute("style", "display: none");

    // If any other project is selected, find it from Local Storage and render its tasks
    const projects = JSON.parse(localStorage.getItem("projects"));
    const targetId = e.target.id.match(/^[a-f\d]{24}$/i)
      ? e.target.id
      : e.target.dataset.anchor;

    const selectedProject = projects.find(project => project._id === targetId);
    if (selectedProject) {
      const { title, tasks } = selectedProject;

      // Set route to /projects/:projectid
      //router({ projects: "project", projectId: targetId });

      // Set Kanboard Title
      kanboardTitlePlaceholder.appendChild(
        kanboardTitle({
          title,
          taskCount: tasks.length
        })
      );

      // Set Breadcrumb
      breadcrumb.innerHTML = title;

      // Render tasks to UI
      if (tasks.length > 0) {
        // Project has tasks
        renderTasks(tasks);
      } else {
        // Project does not have tasks, set one empty task
        renderTasks([{ project: "" }]);
      }

      // Render Project details to UI
      if (e.target.dataset.anchor == targetId) {
        renderProjectDetails(selectedProject);
      }
    }
  }
}
