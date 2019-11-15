import { setTask } from "../../../helpers/localStorage.helper";
import { createTaskCall } from "../../../drivers/Task/task.driver";
import displayTaskDetails from "./displayTaskDetails";
import { alertSuccess, alertError } from "../../../lib/alerts";

const createTaskTrigger = () => {
  // Set Column value
  document.querySelectorAll(".new-task").forEach(button => {
    button.addEventListener("click", e => {
      document.getElementById("task-column").value = e.target.dataset.label;
    });
  });

  // Set listener for submitting the task data
  document
    .getElementById("full-width-modal-task")
    .addEventListener("submit", createTask);
};
async function createTask(e) {
  e.preventDefault();

  // Create task data payload
  const payload = {
    project: document.getElementById("project-details-link").dataset.anchor,
    title: document.getElementById("task-title").value,
    description: document.getElementById("task-description").value,
    owner: document.getElementById("task-owner").value,
    column: document.getElementById("task-column").value,
    kanboard: document.getElementById("task-kanboard-url").value,
    nas: document.getElementById("task-nas-path").value,
    dueDate: new Date(document.querySelector("#task-due-date").value).getTime()
  };

  console.log(payload);

  // Send the data payload to API
  try {
    const taskResponse = await createTaskCall(payload);

    if (!taskResponse.error) {
      alertSuccess(taskResponse.message);
      displayTaskDetails(taskResponse);

      // Save new task to local storage
      setTask(taskResponse.task, payload.project);
    } else {
      // In case of errors display error message
      console.warn(taskResponse.message);
      alertError(taskResponse.message);
    }
  } catch (error) {
    console.warn(error);
    alertError(error);
  }
}

export default createTaskTrigger;
