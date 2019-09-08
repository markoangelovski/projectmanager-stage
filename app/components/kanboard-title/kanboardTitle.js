export default function kanboardTitle({
  title = "",
  projectCount = "",
  taskCount = ""
}) {
  // Clear title placeholder
  const titlePlaceholder = document.querySelector("h4.page-title");
  while (titlePlaceholder.firstChild)
    titlePlaceholder.removeChild(titlePlaceholder.firstChild);

  const h4 = document.createDocumentFragment();

  const titleText = document.createTextNode(
    title === "Overview" ? "Overview" : title
  ); //Overview or the title of the Project

  const projects = document.createTextNode(
    title === "Overview" ? " - Projects: " : ""
  ); //If Overview display Tasks:

  // Total projects count
  const projectCounter = document.createElement("span");
  projectCounter.setAttribute("id", "project-overview");
  projectCounter.innerText = projectCount;

  const tasks = document.createTextNode(" - Tasks: ");

  const taskCounter = document.createElement("span");
  taskCounter.setAttribute("id", "task-overview");
  taskCounter.innerText = taskCount;

  h4.appendChild(titleText);
  h4.appendChild(projects);
  h4.appendChild(projectCounter);
  h4.appendChild(tasks);
  h4.appendChild(taskCounter);

  return h4;
}

/* <h4 class="page-title">Overview - Projects: <span id="project-overview">2</span> - Tasks: <span id="task-overview">5</span></h4> */
