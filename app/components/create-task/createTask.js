const { api } = require(`../../../config/${process.env.API_CONFIG}`);
import { formatDistanceStrict, format } from "date-fns";
import getProjectDetails from "../../lib/getProjectDetails";

const project = document.getElementById("project-details-link");
const title = document.getElementById("task-title");
const description = document.getElementById("task-description");
const owner = document.getElementById("task-owner");
const column = document.getElementById("task-column");
const kanboard = document.getElementById("task-kanboard-url");
const nas = document.getElementById("task-nas-path");
const dueDate = document.querySelector("#task-due-date");

// Set Column value
document.querySelectorAll(".new-task").forEach(button => {
  button.addEventListener("click", e => {
    column.value = e.target.dataset.label;
  });
});

document
  .getElementById("full-width-modal-task")
  .addEventListener("submit", createTask);

async function createTask(e) {
  e.preventDefault();

  // Create project data payload
  const taskData = {
    project: project.dataset.anchor,
    title: title.value,
    description: description.value,
    owner: owner.value,
    column: column.value,
    kanboard: kanboard.value,
    nas: nas.value,
    dueDate: new Date(dueDate.value).getTime()
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

    getProjectDetails();
    displayTaskDetails(taskResponse);
  } catch (error) {
    console.warn(error);
  }
}

function displayTaskDetails(taskResponse) {
  // Set the "Task creation successfull" title
  const taskFormTitle = document.getElementById("full-width-modalLabel-task");
  taskFormTitle.setAttribute("style", "color: limegreen;");
  taskFormTitle.innerText = taskResponse.message;

  // Set task description title
  document.querySelector(
    "#full-width-modal-task > div > div > div.modal-body > p"
  ).innerText = "Task details are the following:";

  // Task details
  title.parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.title}</p>`;
  description.parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.description}</p>`;
  owner.parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.owner}</p>`;
  column.parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.column}</p>`;
  kanboard.parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.kanboard}</p>`;
  nas.parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.nas}</p>`;
  dueDate.parentElement.innerHTML = `<p class="col-form-label">${format(
    new Date(taskResponse.task.dueDate),
    "MMM do, yyyy"
  )}</p>`;

  // Remove close and submit button
  const closeButton = document.querySelector(
    "#full-width-modal-task > div > div > div.modal-footer"
  );
  closeButton.removeChild(closeButton.children[0]);
  closeButton.removeChild(closeButton.children[0]);

  // Set Continue button
  const continueButton = document.getElementById("task-continue");
  continueButton.setAttribute("style", "display: block");
  continueButton.addEventListener("click", () => {
    setTimeout(window.location.reload(true), 100);
  });
}
