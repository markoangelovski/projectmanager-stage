// import getProjectDetails from "../../../../lib/getProjectDetails";
import { deleteLinkCall } from "../../../../drivers/Task/link.driver";
import taskLinkList from "../../ui/taskLinkList";
import {
  getTask,
  setUpdatedTask
} from "../../../../helpers/localStorage.helper";
import { alertSuccess, alertError } from "../../../../lib/alerts";
import spinner from "../../../../lib/spinner";

const deleteLink = async (taskId, linkId) => {
  console.log("delete", linkId);
  spinner(true);
  // Delete link api call
  try {
    // Submit link for deletion
    const deleted = await deleteLinkCall(taskId, linkId);
    console.log("deleted.task :", deleted.task);
    // Check for any returned server errors
    if (!deleted.error) {
      // Remove link from local storage
      setUpdatedTask(deleted.task, deleted.task.project);

      // Set notificaton
      alertSuccess(deleted.message);
      spinner(false);
    } else {
      alertError(deleted.message);
      spinner(false);
    }
  } catch (error) {
    console.warn(error);
    alertError(error);
    spinner(false);
  }

  // Re-render linklist to DOM
  const linkList = document.getElementById("task-link-list-display");
  while (linkList.firstChild) linkList.removeChild(linkList.firstChild);
  linkList.appendChild(taskLinkList(getTask(taskId).links));
};
export { deleteLink };
