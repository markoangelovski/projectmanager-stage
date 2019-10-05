import { formatDistanceStrict, format } from "date-fns";

export default function renderProjectDetails(project) {
  // Select Kanboard and Project Details placeholders and toggle them on
  const kanboardPlaceholder = document.getElementById("kanboard-placeholder");
  const projectDetailsPlaceholder = document.getElementById(
    "project-details-placeholder"
  );

  kanboardPlaceholder.setAttribute("style", "display: none");
  projectDetailsPlaceholder.setAttribute("style", "display: flex");

  console.log("Project selected is: ", project);

  // Set Project Title
  document.getElementById("project-title-display").innerText = project.title;
  // Set Project Owner
  document.getElementById("project-owner-display").innerText = project.owner;
  // Set Project Description
  document.getElementById("project-description-display").innerText =
    project.description;
  // Set Project Date Created
  document.getElementById("project-date-create-display").innerText = format(
    new Date(project.date),
    "MMM do, yyyy"
  );
  // Set Project Status
  const status = document.getElementById("project-status-display");
  if (project.done) {
    status.innerText = "Closed";
    status.classList = "badge badge-danger";
  } else {
    status.innerText = "Active";
    status.classList = "badge badge-success";
  }
  // Set Project NAS Path
  const nasPath = document.getElementById("project-nas-display");
  nasPath.value = project.nas;
  // Copy Project NAS Path
  const nasPathButton = document.getElementById("project-nas-copy-display");
  nasPathButton.addEventListener("click", () => {
    nasPath.select();
    nasPath.setSelectionRange(0, 99999);
    document.execCommand("copy");
    nasPathButton.innerText = "Copied";
    setTimeout(() => {
      nasPathButton.innerText = "Copy";
    }, 3000);
  });
  // Set Project Dev Link
  document.getElementById("project-dev-display").innerText = project.dev;
  document
    .getElementById("project-dev-link-display")
    .setAttribute("href", project.dev);
  // Set Project Stage Link
  document.getElementById("project-stage-display").innerText = project.stage;
  document
    .getElementById("project-stage-link-display")
    .setAttribute("href", project.stage);
  // Set Project Prod Link
  document.getElementById("project-prod-display").innerText = project.prod;
  document
    .getElementById("project-prod-link-display")
    .setAttribute("href", project.prod);
  // Set Project Live Link
  document.getElementById("project-live-display").innerText = project.live;
  document
    .getElementById("project-live-link-display")
    .setAttribute("href", project.live);

  // Set Task list
  const taskPlaceholder = document.createDocumentFragment();

  project.tasks.forEach(task => {
    // Create Table row for each Task
    const placeholder = document.createElement("tr");

    // Task title
    const taskTitlePlace = document.createElement("td");
    const taskTitle = document.createElement("h5");
    taskTitle.classList = "m-0 font-weight-normal";
    taskTitle.innerText = task.title;
    taskTitlePlace.appendChild(taskTitle);

    // Task Date Created
    const taskDateCreated = document.createElement("td");
    taskDateCreated.innerText = format(new Date(task.date), "MMM do, yyyy");

    // Task Due Date
    const taskDueDate = document.createElement("td");
    taskDueDate.innerText = format(new Date(task.dueDate), "MMM do, yyyy");

    // Task Due Date remaining time
    const taskDateRemaining = document.createElement("td");
    taskDateRemaining.innerText = formatDistanceStrict(
      new Date(task.dueDate),
      new Date(),
      {
        addSuffix: true
      }
    );

    // Task column
    const taskColumnPlace = document.createElement("td");
    const taskColumn = document.createElement("span");
    if (task.column == "Upcoming") {
      taskColumn.classList = "badge badge-light-danger";
    } else if (task.column == "In Progress") {
      taskColumn.classList = "badge badge-light-warning";
    } else if (task.column == "Completed") {
      taskColumn.classList = "badge badge-light-success";
    }
    taskColumn.innerText = task.column;
    taskColumnPlace.appendChild(taskColumn);

    // Task open icon
    const taskIconPlace = document.createElement("td");
    const taskIconLink = document.createElement("a");
    taskIconLink.setAttribute("href", "javascript: void(0);");
    taskIconLink.classList = "btn btn-xs btn-secondary";
    const taskIcon = document.createElement("i");
    taskIcon.classList = "mdi mdi-arrow-top-right-bold-outline";
    taskIconLink.appendChild(taskIcon);
    taskIconPlace.appendChild(taskIconLink);

    // Append created elements
    placeholder.appendChild(taskTitlePlace);
    placeholder.appendChild(taskDateCreated);
    placeholder.appendChild(taskDueDate);
    placeholder.appendChild(taskDateRemaining);
    placeholder.appendChild(taskColumnPlace);
    placeholder.appendChild(taskIconPlace);
    taskPlaceholder.appendChild(placeholder);
  });

  // Render tasklist to DOM
  const taskList = document.getElementById("project-task-list-display");
  while (taskList.firstChild) taskList.removeChild(taskList.firstChild);
  taskList.appendChild(taskPlaceholder);
}
