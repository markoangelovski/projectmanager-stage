import { format } from "date-fns";
import resetTaskForm from "./resetTaskForm";

export default function displayTaskDetails(taskResponse) {
  // Set the "Task creation successfull" title
  const taskFormTitle = document.getElementById("full-width-modalLabel-task");
  taskFormTitle.setAttribute("style", "color: limegreen;");
  taskFormTitle.innerText = taskResponse.message;

  // Set task description title
  document.querySelector(
    "#full-width-modal-task > div > div > div.modal-body > p"
  ).innerText = "Task details are the following:";

  // Task details
  document.getElementById(
    "task-title"
  ).parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.title}</p>`;
  document.getElementById(
    "task-description"
  ).parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.description}</p>`;
  document.getElementById(
    "task-owner"
  ).parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.owner}</p>`;
  document.getElementById(
    "task-column"
  ).parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.column}</p>`;
  document.getElementById(
    "task-kanboard-url"
  ).parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.kanboard}</p>`;
  document.getElementById(
    "task-nas-path"
  ).parentElement.innerHTML = `<p class="col-form-label">${taskResponse.task.nas}</p>`;
  document.querySelector(
    "#task-due-date"
  ).parentElement.innerHTML = `<p class="col-form-label">${format(
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
  continueButton.addEventListener("click", resetTaskForm);
}
