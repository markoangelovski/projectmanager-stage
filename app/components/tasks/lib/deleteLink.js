import getProjectDetails from "../../../lib/getProjectDetails";
import { deleteLinkCall } from "../../../drivers/link.driver";
import taskLinkList from "../ui/taskLinkList";
import { alertSuccess, alertError } from "../../../lib/alerts";
import spinner from "../../../lib/spinner";

const deleteLink = async (taskId, linkId) => {
  console.log("delete", linkId);
  spinner(true);
  // Delete link api call
  try {
    // Submit link for deletion
    const deleted = await deleteLinkCall(taskId, linkId);

    // Check for any returned server errors
    if (!deleted.error) {
      // Re-fetch data
      await getProjectDetails();

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

  // Re-render task details
  const updatedTask = JSON.parse(localStorage.getItem("tasks")).find(
    upatedTask => upatedTask._id === taskId
  );

  // Re-render linklist to DOM
  const linkList = document.getElementById("task-link-list-display");
  while (linkList.firstChild) linkList.removeChild(linkList.firstChild);
  linkList.appendChild(taskLinkList(updatedTask.links));
};
export { deleteLink };
