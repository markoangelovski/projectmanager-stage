import kanboardTitle from "../../kanboard-title/kanboardTitle";
import renderTasks from "../../tasks/renderTasksKanboard";
import createTaskTrigger from "../../tasks/lib/createTask";
import renderProjectDetails from "../ui/renderProjectDetails";
import { getProject } from "../../../helpers/localStorage.helper";

// Render tasks of the selected Project
export default function displayProject(e) {
  // Get placeholders
  const kanboardPlaceholder = document.getElementById("kanboard-placeholder");
  const projectDetailsPlaceholder = document.getElementById(
    "project-details-placeholder"
  );
  const taskDetailsPlaceholder = document.getElementById(
    "task-details-placeholder"
  );

  // If Overview is selected, render Overview Title and Tasks
  if (!e || e.target.innerText === "Overview") {
    // Set route to /projects
    //router({ projects: "projects" });

    // Hide New Task buttons
    document.querySelectorAll(".new-task").forEach(button => {
      if (!button.classList.contains("d-none")) button.classList.add("d-none");
    });

    // Set Overview title class to non-active
    document.getElementById("overview-link").className = "";

    // Reset Kanboard visibility
    kanboardPlaceholder.setAttribute("style", "display: flex");
    projectDetailsPlaceholder.setAttribute("style", "display: none");
    taskDetailsPlaceholder.setAttribute("style", "display: none");

    // Set Kanboard title
    kanboardTitle({
      title: "Overview",
      projectCount: localStorage.projectCount,
      taskCount: localStorage.taskCount
    });

    // Set breadcrumbs
    document.querySelector(".breadcrumb-item.active").innerHTML = "Overview";

    // Render all tasks to Overview UI
    renderTasks([]);
  } else if (
    // If Kanboard in left menu or dropdown-item in search results is clicked
    e.target.innerText === "Kanboard" ||
    e.target.className === "dropdown-item"
  ) {
    // Reset Overview title class
    document.getElementById("overview-link").className = "";

    // Display New Task buttons
    document.querySelectorAll(".new-task").forEach(button => {
      if (button.classList.contains("d-none"))
        button.classList.remove("d-none");
    });

    // Intiate New Task function
    createTaskTrigger();

    // Reset Kanboard visibility
    kanboardPlaceholder.setAttribute("style", "display: flex");
    projectDetailsPlaceholder.setAttribute("style", "display: none");
    taskDetailsPlaceholder.setAttribute("style", "display: none");

    // Select project from local storage
    const { title, tasks } = getProject(e.target.dataset.anchor);

    // Set route to /projects/:projectid
    //router({ projects: "project", projectId: targetId });

    // Set Kanboard Title
    kanboardTitle({
      title,
      taskCount: tasks.length
    });

    // Set breadcrumbs
    document.querySelector(".breadcrumb-item.active").innerHTML = title;

    // Render tasks to UI
    if (tasks.length > 0) {
      // Project has tasks
      renderTasks(tasks);
    } else {
      // Project does not have tasks, set one empty task
      renderTasks([{ project: "", owner: { avatar_url: "" } }]);
    }
  } else if (e.target.innerText === "Details") {
    renderProjectDetails(getProject(e.target.dataset.anchor));
  }
}
