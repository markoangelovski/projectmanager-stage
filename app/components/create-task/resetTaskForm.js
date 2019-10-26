import getProjectDetails from "../../lib/getProjectDetails";
import renderProjectDetails from "../../lib/renderProjectDetails";
import kanboardTitle from "../kanboard-title/kanboardTitle";

export default async function resetTaskForm() {
  const taskFormTitle = document.getElementById("full-width-modalLabel-task");

  // Select Kanboard and Project Details placeholders and toggle them on/off
  const kanboardPlaceholder = document.getElementById("kanboard-placeholder");
  const taskDetailsPlaceholder = document.getElementById(
    "task-details-placeholder"
  );

  kanboardPlaceholder.setAttribute("style", "display: flex");
  taskDetailsPlaceholder.setAttribute("style", "display: none");

  // Re-fetch updated project details
  await getProjectDetails();

  // Get project details from local storage
  const selectedProjectfromLocal = JSON.parse(localStorage.getItem("projects"));
  const selectedProject = selectedProjectfromLocal.find(
    selectProject =>
      selectProject._id ===
      document.getElementById("project-details-link").dataset.anchor
  );

  // Re-render project title
  const kanboardTitlePlaceholder = document.querySelector("h4.page-title");
  const projectCount = localStorage.getItem("projectCount") || 0;
  const taskCount = localStorage.getItem("taskCount") || 0;
  const title = {
    title: selectedProject.title,
    projectCount,
    taskCount
  };
  kanboardTitlePlaceholder.appendChild(kanboardTitle(title));

  // Re-render project detalis
  renderProjectDetails(selectedProject);

  // Reset Create Task form
  // Modal title
  taskFormTitle.setAttribute("style", "color: #343a40;");
  taskFormTitle.innerText = "Create a new task";
  // Modal description
  document.querySelector(
    "#full-width-modal-task > div > div > div.modal-body > p"
  ).innerText = "Fill out the details of your new task.";
  // Form fields
  document.querySelector(
    'label[for="task-title"]'
  ).nextElementSibling.innerHTML = `<input type="text" class="form-control" id="task-title" placeholder="Task title" required><span class="help-block"><small id="warning-message"></small></span>`;

  document.querySelector(
    'label[for="task-description"]'
  ).nextElementSibling.innerHTML = `<textarea class="form-control" id="task-description" rows="5" placeholder="Enter a brief description of the task" style="margin-top: 0px; margin-bottom: 0px; height: calc(1.5em + .9rem + 2px);"></textarea>`;

  document.querySelector(
    'label[for="task-owner"]'
  ).nextElementSibling.innerHTML = `<input type="text" class="form-control" id="task-owner" placeholder="Task owner">`;

  document.querySelector(
    'label[for="task-column"]'
  ).nextElementSibling.innerHTML = `<input type="text" class="form-control" id="task-column" placeholder="Task column" value="Upcoming">`;

  document.querySelector(
    'label[for="task-kanboard-url"]'
  ).nextElementSibling.innerHTML = `<input class="form-control" type="url" id="task-kanboard-url" name="task-kanboard-url" placeholder="Link to Task's board in Kanban">`;

  document.querySelector(
    'label[for="task-nas-path"]'
  ).nextElementSibling.innerHTML = `<input type="text" class="form-control" id="task-nas-path" placeholder="Enter path to task folder on NAS">`;

  document.querySelector(
    'label[for="task-due-date"]'
  ).nextElementSibling.innerHTML = `<input class="form-control" type="date" id="task-due-date" name="task-due-date">`;

  // Add close and submit button
  document.querySelector(
    "#full-width-modal-task > div > div > div.modal-footer"
  ).innerHTML = `
    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
    <label for="create-task-form" class="col-form-label btn btn-primary waves-effect waves-light">Submit</label>
    <button type="button" id="task-continue" class="col-form-label btn btn-primary waves-effect waves-light" style="display: none" data-dismiss="modal">Continue</button>`;

  // Click on close button
  document
    .querySelector(
      "#full-width-modal-task > div > div > div.modal-footer > button.btn.btn-secondary.waves-effect"
    )
    .click();
}
