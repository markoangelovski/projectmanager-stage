import { updateTaskCall } from "../../../drivers/Task/task.driver";
import renderTasks from "../renderTasksKanboard";
import {
  getProject,
  setUpdatedTask
} from "../../../helpers/localStorage.helper";
import spinner from "../../../lib/spinner";
import { alertSuccess, alertError } from "../../../lib/alerts";

export default function changeColumn() {
  // Get all Column change menus, add click event listeners and call the API call for update
  document.querySelectorAll(".column-select").forEach(column => {
    column.children[1].addEventListener("click", () =>
      changeColumnApiCall(
        column.parentElement.parentElement.id,
        "column",
        column.children[1].innerText
      )
    );
    column.children[2].addEventListener("click", () =>
      changeColumnApiCall(
        column.parentElement.parentElement.id,
        "column",
        column.children[2].innerText
      )
    );
  });
}

// Send API call
const changeColumnApiCall = async (taskId, attributeKey, attributeValue) => {
  // Insert spinner
  spinner(true);

  try {
    const updatedTask = await updateTaskCall(
      taskId,
      attributeKey,
      attributeValue
    );

    if (!updatedTask.error) {
      // Update task in local storage
      setUpdatedTask(updatedTask.task, updatedTask.task.project);

      // Set notification
      alertSuccess(updatedTask.message);
    } else {
      console.warn(updatedTask.message);
      alertError(updatedTask.message);
    }
    // Remove spinner
    spinner(false);
  } catch (error) {
    console.warn(updatedTask.message);
    alertError(updatedTask.message);
    // Remove spinner
    spinner(false);
  }
  // Check if a project is selected and render tasks accordingly
  const projectLink = document.getElementById("project-details-link");
  if (!projectLink.dataset.anchor) {
    renderTasks([]);
  } else {
    const project = getProject(projectLink.dataset.anchor);
    renderTasks(project.tasks);
  }
};
