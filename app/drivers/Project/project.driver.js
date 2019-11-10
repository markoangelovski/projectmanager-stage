import { apiCall } from "../../helpers/api.helper";
import { alertError } from "../../lib/alerts";

// Load projects and tasks from API into local storage
export async function getProjectDetails() {
  try {
    const [projectDetails, taskDetails] = await Promise.all([
      apiCall("projects"),
      apiCall("tasks")
    ]);

    const { projectCount, projects } = projectDetails;
    const { taskCount, tasks } = taskDetails;

    localStorage.setItem("projectCount", projectCount);
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("taskCount", taskCount);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.warn(error);
    alertError(error);
  }
}
