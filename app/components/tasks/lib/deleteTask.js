import { deleteTaskCall } from "./../../../drivers/task.driver";
import getProjectDetails from "../../../lib/getProjectDetails";
import kanboardTitle from "../../kanboard-title/kanboardTitle";
import renderTasksKanboard from "../renderTasksKanboard";
import { alertSuccess, alertError } from "../../../lib/alerts";
import spinner from "../../../lib/spinner";

// Set delete task event listener
document.getElementById("task-delete-display").addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this task?")) deleteTask();
});

const deleteTask = async () => {
  // Get Project and Task IDs
  const projectId = document.getElementById("project-details-link").dataset
    .anchor;
  const taskId = document.getElementById("task-title-display").dataset.anchor;

  spinner(true);
  // Delete task api call
  try {
    const deletedTask = await deleteTaskCall(taskId);
    if (!deletedTask.error) {
      // Re-fetch data
      await getProjectDetails();

      // Set notificaton
      alertSuccess(deletedTask.message);
      spinner(false);
    } else {
      alertError(deletedTask.message);
      spinner(false);
    }
  } catch (error) {
    console.warn(error);
    alertError(error);
    spinner(false);
  }

  // Re-render project details
  const updatedProject = JSON.parse(localStorage.getItem("projects")).find(
    updatedProject => updatedProject._id === projectId
  );

  // Re-render Project details to DOM
  // Select Kanboard, Project and Task Details placeholders and toggle them on
  const kanboardPlaceholder = document.getElementById("kanboard-placeholder");
  const projectDetailsPlaceholder = document.getElementById(
    "project-details-placeholder"
  );
  const taskDetailsPlaceholder = document.getElementById(
    "task-details-placeholder"
  );

  kanboardPlaceholder.setAttribute("style", "display: flex");
  projectDetailsPlaceholder.setAttribute("style", "display: none");
  taskDetailsPlaceholder.setAttribute("style", "display: none");

  // Re-render project title
  const kanboardTitlePlaceholder = document.querySelector("h4.page-title");
  const projectCount = localStorage.getItem("projectCount") || 0;
  const taskCount = localStorage.getItem("taskCount") || 0;
  const title = {
    title: updatedProject.title,
    projectCount,
    taskCount
  };
  kanboardTitlePlaceholder.appendChild(kanboardTitle(title));

  // Re-render project tasks
  renderTasksKanboard(updatedProject.tasks);
};
