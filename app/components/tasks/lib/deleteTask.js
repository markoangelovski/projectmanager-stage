import { deleteTaskCall } from "../../../drivers/Task/task.driver";
import { getProject, removeTask } from "../../../helpers/localStorage.helper";
import kanboardTitle from "../../kanboard-title/kanboardTitle";
import renderTasks from "../renderTasksKanboard";
import { alertSuccess, alertError } from "../../../lib/alerts";
import spinner from "../../../lib/spinner";

const deleteTaskTrigger = () => {
  // Set delete task event listener
  document
    .getElementById("task-delete-display")
    .addEventListener("click", function handler() {
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
        // Set notificaton
        alertSuccess(deletedTask.message);
        spinner(false);
      } else {
        console.warn(deletedTask.message);
        alertError(deletedTask.message);
        spinner(false);
      }
    } catch (error) {
      console.warn(error);
      alertError(error);
      spinner(false);
    }

    // Update local storage
    removeTask(taskId, projectId);

    // Re-render project details
    const updatedProject = getProject(projectId);

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
    const taskCount = localStorage.getItem("taskCount") || 0;
    const title = {
      title: updatedProject.title,
      taskCount
    };
    kanboardTitle(title);

    // Re-render project tasks
    renderTasks(updatedProject.tasks);
  };
};
export default deleteTaskTrigger;
