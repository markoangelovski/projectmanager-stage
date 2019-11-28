export default function writeTask({
  taskId = "",
  taskOwner = "",
  taskTitle = "",
  taskDescription = "",
  projectTitle = "",
  taskDate = "",
  taskDueDate = "",
  taskColumn = ""
}) {
  // Root task li element
  const li = document.createElement("li");
  li.setAttribute("id", `${taskId}`);
  li.setAttribute("class", "task-medium ui-sortable-handle");
  li.setAttribute("draggable", "true");

  // Render proper "Move to column"
  let columnsToRender1, columnsToRender2;
  if (taskColumn === "Upcoming") columnsToRender1 = "In Progress";
  if (taskColumn === "Upcoming") columnsToRender2 = "Completed";

  if (taskColumn === "In Progress") columnsToRender1 = "Upcoming";
  if (taskColumn === "In Progress") columnsToRender2 = "Completed";

  if (taskColumn === "Completed") columnsToRender1 = "Upcoming";
  if (taskColumn === "Completed") columnsToRender2 = "In Progress";

  // Change column
  const column = document.createElement("div");
  column.setAttribute("class", "dropdown float-right");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", "#");
  anchor.setAttribute("class", "dropdown-toggle arrow-non");
  anchor.setAttribute("data-toggle", "dropdown");
  const i = document.createElement("i");
  i.setAttribute("class", "mdi mdi-dots-vertical m-0 text-muted h3");
  anchor.appendChild(i);
  const menu = document.createElement("div");
  menu.setAttribute("class", "column-select dropdown-menu dropdown-menu-right");
  menu.setAttribute("x-placement", "bottom-end");
  const moveTo = document.createElement("p");
  moveTo.setAttribute("class", "dropdown-item");
  moveTo.innerText = "Move to:";
  const column1 = document.createElement("a");
  column1.setAttribute("class", "dropdown-item");
  column1.setAttribute("href", "#");
  column1.innerText = columnsToRender1;
  const column2 = document.createElement("a");
  column2.setAttribute("class", "dropdown-item");
  column2.setAttribute("href", "#");
  column2.innerText = columnsToRender2;
  menu.appendChild(moveTo);
  menu.appendChild(column1);
  menu.appendChild(column2);
  column.appendChild(anchor);
  column.appendChild(menu);

  // Title
  const title = document.createElement("h5");
  title.setAttribute("class", "mt-0");
  const titleLink = document.createElement("a");
  titleLink.setAttribute("href", "javascript: void(0);");
  titleLink.setAttribute("class", "text-dark task-title-link");
  titleLink.setAttribute("data-anchor", `${taskId}`);
  titleLink.innerText = `${taskTitle}`;
  title.appendChild(titleLink);

  // Description
  const description = document.createElement("p");
  description.innerText = `${taskDescription}`;

  // Project title
  const projectTitlePlaceholder = document.createElement("p");
  projectTitlePlaceholder.setAttribute("class", "font-13");
  // If Project title is passed, display Project title
  projectTitlePlaceholder.innerText = projectTitle
    ? `Project: ${projectTitle}`
    : ``;

  // Task due date
  const dueDatePlaceholder = document.createElement("p");
  dueDatePlaceholder.setAttribute("class", "font-13");
  const dueDateTitle = document.createTextNode(`Due date: `);
  const icon = document.createElement("i");
  icon.setAttribute("class", "mdi mdi-calendar");
  const dueDate = document.createTextNode(` ${taskDueDate}`);
  dueDatePlaceholder.appendChild(dueDateTitle);
  dueDatePlaceholder.appendChild(icon);
  dueDatePlaceholder.appendChild(dueDate);

  // Clearfix
  const clearfix = document.createElement("div");
  clearfix.setAttribute("class", "clearfix");

  // Row container
  const row = document.createElement("div");
  row.setAttribute("class", "row");

  // Col-auto container
  const colAuto = document.createElement("div");
  colAuto.setAttribute("class", "col-auto");
  const imageLink = document.createElement("a");
  imageLink.setAttribute("href", "javascript: void(0);");
  imageLink.setAttribute("class", "text-muted");
  const image = document.createElement("img");
  image.setAttribute("src", taskOwner);
  image.setAttribute("alt", "task-user");
  image.setAttribute("class", "avatar-sm img-thumbnail rounded-circle");
  imageLink.appendChild(image);
  colAuto.appendChild(imageLink);

  // Col container
  const col = document.createElement("div");
  col.setAttribute("class", "col");
  const text = document.createElement("div");
  text.setAttribute("class", "text-right");
  const date = document.createElement("p");
  date.setAttribute("class", "font-13 mt-2 mb-0");
  date.appendChild(icon.cloneNode(true));
  const dateText = document.createTextNode(` ${taskDate}`);
  date.appendChild(dateText);
  text.appendChild(date);
  col.appendChild(text);

  // Add columns to row
  row.appendChild(colAuto);
  row.appendChild(col);

  // Final construct
  li.appendChild(column);
  li.appendChild(title);
  li.appendChild(description);
  li.appendChild(projectTitlePlaceholder);
  li.appendChild(dueDatePlaceholder);
  li.appendChild(clearfix);
  li.appendChild(row);

  return li;
}

/*
  /* <div class="dropdown float-right">
  <a href="#" class="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
    <i class="mdi mdi-dots-vertical m-0 text-muted h3"></i>
  </a>
  <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-136px, 26px, 0px);">
    <p class="dropdown-item">Move to:</p>
    <a class="dropdown-item" href="#">Column1</a>
    <a class="dropdown-item" href="#">Column2</a>
  </div>
</div>

*/
