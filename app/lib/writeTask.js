import users from "../../config/users";

export default function writeTask({
  taskId = "",
  taskTitle = "",
  taskDescription = "",
  projectTitle = "",
  taskDate = "",
  taskDueDate = ""
}) {
  // Root task li element
  const li = document.createElement("li");
  li.setAttribute("id", `${taskId}`);
  li.setAttribute("class", "task-medium ui-sortable-handle");

  // Checkbox
  const checkbox = document.createElement("div");
  checkbox.setAttribute(
    "class",
    "checkbox checkbox-blue mb-2 checkbox-single float-right"
  );
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  const label = document.createElement("label");
  checkbox.appendChild(input);
  checkbox.appendChild(label);

  // Title
  const title = document.createElement("h5");
  title.setAttribute("class", "mt-0");
  const titleLink = document.createElement("a");
  titleLink.setAttribute("href", "javascript: void(0);");
  titleLink.setAttribute("class", "text-dark");
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
  image.setAttribute("src", `${users[0].img}`);
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
  li.appendChild(checkbox);
  li.appendChild(title);
  li.appendChild(description);
  li.appendChild(projectTitlePlaceholder);
  li.appendChild(dueDatePlaceholder);
  li.appendChild(clearfix);
  li.appendChild(row);

  return li;
}
