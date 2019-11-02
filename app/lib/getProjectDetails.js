import { apiCall } from "../lib/apiCall";
import { alertError } from "../lib/alerts";

// Load projects and tasks from API into local storage
export default async function getProjectDetails() {
  try {
    const { projectCount, projects } = await apiCall("projects");
    const { taskCount, tasks } = await apiCall("tasks");

    localStorage.setItem("projectCount", projectCount);
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("taskCount", taskCount);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.warn(error);
    alertError(error);
  }
}
