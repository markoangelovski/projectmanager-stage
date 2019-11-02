import { formatDistanceStrict, format } from "date-fns";

const taskSubTaskList = subtasks => {
  // Set Sub-task list placeholder
  const subTaskPlaceholder = document.createDocumentFragment();

  subtasks.forEach(subtask => {
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

  return subTaskPlaceholder;
};

export default taskSubTaskList;
