import { format } from "date-fns";
import kanboardTitle from "../kanboard-title/kanboardTitle";
import leftSidebar from "../left-sidebar/leftSidebar";
import taskSubTaskList from "./ui/taskSubTaskList";
import taskLinkList from "./ui/taskLinkList";
import taskNotesList from "./ui/taskNotesList";
import { submitLinkTrigger } from "./lib/links/submitLink";
import { getLinkId } from "./lib/links/getLinkId";
import { submitNoteTrigger } from "./lib/notes/submitNote";
import { getNoteId } from "./lib/notes/getNoteId";
import deleteTaskTrigger from "./lib/deleteTask";
import { getTask, getProject } from "../../helpers/localStorage.helper";

export default function renderTaskDetails() {
  // Get titles of all tasks and init click event listener
  document
    .querySelectorAll(".task-title-link")
    .forEach(link =>
      link.addEventListener("click", e =>
        displayTaskDetails(e.target.dataset.anchor)
      )
    );
}

function displayTaskDetails(taskId) {
  const task = getTask(taskId);
  const project = getProject(
    task.project._id ? task.project._id : task.project
  );

  // Set Kanboard Title
  kanboardTitle({
    title: project.title,
    taskCount: project.tasks.length
  });

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
  const taskTitle = document.getElementById("task-title-display");
  taskTitle.innerText = task.title;
  taskTitle.dataset.anchor = taskId;

  // Set Task Owner
  document.getElementById("task-owner-display").innerText = task.owner
    ? task.owner
    : "";
  // Set Task Description
  document.getElementById("task-description-display").innerText =
    task.description;
  // Set Task Date Created
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

  // Render linklist to DOM
  const linkList = document.getElementById("task-link-list-display");
  while (linkList.firstChild) linkList.removeChild(linkList.firstChild);
  linkList.appendChild(taskLinkList(task.links));

  // Render notes list to DOM
  const notesList = document.getElementById("task-notes-list-display");
  while (notesList.firstChild) notesList.removeChild(notesList.firstChild);
  notesList.innerHTML = taskNotesList(task.notes);

  // Render sub tasklist to DOM
  const subTaskList = document.getElementById("task-sub-task-list-display");
  while (subTaskList.firstChild)
    subTaskList.removeChild(subTaskList.firstChild);
  subTaskList.appendChild(taskSubTaskList(task.subtasks));
}

// Initialize submit link trigger
submitLinkTrigger();

// Initialize edit link trigger
getLinkId();

// Initialize submit note trigger
submitNoteTrigger();

// Initialize edit link trigger
getNoteId();

// Initiaize delete task trigger
deleteTaskTrigger();
