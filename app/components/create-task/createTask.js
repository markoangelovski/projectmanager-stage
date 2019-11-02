const { api } = require(`../../../config/${process.env.API_CONFIG}`);
import displayTaskDetails from "./displayTaskDetails";
import { alertError } from "../../lib/alerts";

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

export default async function createTask(e) {
  e.preventDefault();

  // Create task data payload
  const taskData = {
    project: document.getElementById("project-details-link").dataset.anchor,
    title: document.getElementById("task-title").value,
    description: document.getElementById("task-description").value,
    owner: document.getElementById("task-owner").value,
    column: document.getElementById("task-column").value,
    kanboard: document.getElementById("task-kanboard-url").value,
    nas: document.getElementById("task-nas-path").value,
    dueDate: new Date(document.querySelector("#task-due-date").value).getTime()
  };

  console.log(taskData);

  // Send the data payload to API
  try {
    const taskResponse = await fetch(`${api}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(taskData)
    }).then(res => res.json());

    displayTaskDetails(taskResponse);
  } catch (error) {
    console.warn(error);
    alertError(error);
  }
}
