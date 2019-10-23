import kanboardTitle from "../components/kanboard-title/kanboardTitle";
import leftSidebar from "../components/left-sidebar/leftSidebar";
import { formatDistanceStrict, format } from "date-fns";

// Get placeholders
const kanboardTitlePlaceholder = document.querySelector("h4.page-title");

export default function renderTaskDetails() {
  // Get Task Titles and init click event listener
  document
    .querySelectorAll(".task-title-link")
    .forEach(link =>
      link.addEventListener("click", e =>
        displayTaskDetails(e.target.dataset.anchor)
      )
    );
}

function displayTaskDetails(id) {
  // Get clicked task from local storage
  const task = JSON.parse(localStorage.getItem("tasks")).find(
    task => task._id == id
  );

  // Get clicked task's project from local storage
  const project = JSON.parse(localStorage.getItem("projects")).find(
    project => project._id == task.project._id
  );
  console.log("I've been summoned for: ", task);

  // Set Kanboard Title
  kanboardTitlePlaceholder.appendChild(
    kanboardTitle({
      title: task.project.title,
      taskCount: project.tasks.length
    })
  );

  // Set left siedbar
  leftSidebar(project._id);

  // Select Kanboard and Project Details placeholders and toggle them on
  const kanboardPlaceholder = document.getElementById("kanboard-placeholder");
  const taskDetailsPlaceholder = document.getElementById(
    "task-details-placeholder"
  );

  kanboardPlaceholder.setAttribute("style", "display: none");
  taskDetailsPlaceholder.setAttribute("style", "display: flex");

  // Set Task Title
  document.getElementById("task-title-display").innerText = task.title;
  // Set Task Owner
  document.getElementById("task-owner-display").innerText = task.owner
    ? task.owner
    : "";
  // Set Project Description
  document.getElementById("task-description-display").innerText =
    task.description;
  // Set Project Date Created
  document.getElementById("task-date-create-display").innerText = format(
    new Date(task.date),
    "MMM do, yyyy"
  );
  // Set Task Column
  const column = document.getElementById("task-column-display");
  if (task.column == "Upcoming") {
    column.innerText = "Upcoming";
    column.classList = "badge badge-danger";
  } else if (task.column == "In Progress") {
    column.innerText = "In Progress";
    column.classList = "badge badge-warning";
  } else {
    column.innerText = "Completed";
    column.classList = "badge badge-success";
  }
  // Set Project NAS Path
  const nasPath = document.getElementById("task-nas-display");
  nasPath.value = task.nas;
  // Copy Project NAS Path
  const nasPathButton = document.getElementById("task-nas-copy-display");
  nasPathButton.addEventListener("click", () => {
    nasPath.select();
    nasPath.setSelectionRange(0, 99999);
    document.execCommand("copy");
    nasPathButton.innerText = "Copied";
    setTimeout(() => {
      nasPathButton.innerText = "Copy";
    }, 3000);
  });
  // Set Task Links

  // Set Sub-task list
  const subTaskPlaceholder = document.createDocumentFragment();

  task.subtasks.forEach(subtask => {
    // Create Table row for each Task
    const placeholder = document.createElement("tr");

    // Sub-task title
    const taskTitlePlace = document.createElement("td");
    const taskTitle = document.createElement("h5");
    taskTitle.classList = "m-0 font-weight-normal";
    taskTitle.innerText = subtask.title;
    taskTitlePlace.appendChild(taskTitle);

    // Sub-task Date Created
    const taskDateCreated = document.createElement("td");
    taskDateCreated.innerText = format(new Date(subtask.date), "MMM do, yyyy");

    // Sub-task Due Date
    const taskDueDate = document.createElement("td");
    taskDueDate.innerText = format(new Date(subtask.dueDate), "MMM do, yyyy");

    // Sub-task Due Date remaining time
    const taskDateRemaining = document.createElement("td");
    taskDateRemaining.innerText = formatDistanceStrict(
      new Date(subtask.dueDate),
      new Date(),
      {
        addSuffix: true
      }
    );

    // Sub-task status
    const taskColumnPlace = document.createElement("td");
    const taskColumn = document.createElement("span");
    if (subtask.done) {
      taskColumn.classList = "badge badge-light-success";
      taskColumn.innerText = "Done";
    } else {
      taskColumn.classList = "badge badge-light-danger";
      taskColumn.innerText = "WIP";
    }
    taskColumnPlace.appendChild(taskColumn);

    // Subask open icon
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
    subTaskPlaceholder.appendChild(placeholder);
  });

  // Render tasklist to DOM
  const subTaskList = document.getElementById("task-sub-task-list-display");
  while (subTaskList.firstChild)
    subTaskList.removeChild(subTaskList.firstChild);
  subTaskList.appendChild(subTaskPlaceholder);
}
