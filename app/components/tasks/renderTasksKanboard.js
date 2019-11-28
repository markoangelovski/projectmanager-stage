import { formatDistanceStrict, format } from "date-fns";
import writeTask from "./ui/writeTask";
import clearTasksUI from "./lib/clearTasksUI";
import renderTaskDetails from "./renderTaskDetails";
import changeColumn from "./lib/changeColumn";
import { getTask } from "../../helpers/localStorage.helper";

export default function renderTasks(tasks) {
  // Clear UI
  clearTasksUI();

  // Get Project and Task data from local storage
  const projectCount = localStorage.getItem("projectCount");

  // Render tasks to UI
  if (projectCount > 0) {
    // Set task for rendering
    const tasksToRender =
      tasks.length > 0 ? tasks : JSON.parse(localStorage.getItem("tasks"));

    // Get Kanboard columns
    const upcoming = document.getElementById("upcoming");
    const inprogress = document.getElementById("inprogress");
    const completed = document.getElementById("completed");

    // Create column placeholders
    const filteredUpcoming = document.createDocumentFragment();
    const filteredInProgress = document.createDocumentFragment();
    const filteredCompleted = document.createDocumentFragment();

    // Filter Tasks for each Column
    tasksToRender.forEach(task => {
      const taskData = {
        taskId: task._id,
        taskOwner: task.owner.avatar_url || getTask(task._id).owner.avatar_url,
        taskTitle: task.title,
        taskDescription: task.description,
        projectTitle: task.project.title,
        taskDate: task.date
          ? formatDistanceStrict(new Date(task.date), new Date(), {
              addSuffix: true
            })
          : "",
        taskDueDate: task.dueDate
          ? format(new Date(task.dueDate), "MMM do, yyyy")
          : "",
        taskColumn: task.column
      };
      if (task.column === "Upcoming") {
        filteredUpcoming.appendChild(writeTask(taskData));
      } else if (task.column === "In Progress") {
        filteredInProgress.appendChild(writeTask(taskData));
      } else if (task.column === "Completed") {
        filteredCompleted.appendChild(writeTask(taskData));
      }
    });

    // Render Tasks to UI
    upcoming.appendChild(filteredUpcoming);
    inprogress.appendChild(filteredInProgress);
    completed.appendChild(filteredCompleted);

    // Add change column listeners
    changeColumn();

    // Set Render Task Details link function
    renderTaskDetails();
  } else {
    // If local storage is empty, set values to 0
    document.getElementById("project-overview").innerHTML = 0;
    document.getElementById("task-overview").innerHTML = 0;
  }
}
