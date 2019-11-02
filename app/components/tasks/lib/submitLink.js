import getProjectDetails from "../../../lib/getProjectDetails";
import { submitLinkCall } from "../../../drivers/link.driver";
import taskLinkList from "../ui/taskLinkList";
import spinner from "../../../lib/spinner";
import { alertSuccess, alertError } from "../../../lib/alerts";

// Get submit Link button
document
  .getElementById("task-link-submit")
  .addEventListener("click", async () => {
    // Get task ID
    const task = document.getElementById("task-title-display").dataset.anchor;

    // Set Link payload and upload the new link
    const payload = {
      task,
      title: document.getElementById("task-link-title-submit").value,
      link: document.getElementById("task-link-url-submit").value
    };

    spinner(true);

    try {
      // Submit link
      const submitted = await submitLinkCall(task, payload);

      // Check for any returned server errors
      if (!submitted.error) {
        // Re-fetch data
        await getProjectDetails();

        // Set notificaton
        alertSuccess(submitted.message);
      } else {
        alertError(submitted.message);
        spinner(false);
      }
    } catch (error) {
      console.warn(error);
      spinner(false);
      alertError(error);
    }

    // Re-render task details
    const updatedTask = JSON.parse(localStorage.getItem("tasks")).find(
      upatedTask => upatedTask._id === task
    );

    // Re-render linklist to DOM
    const linkList = document.getElementById("task-link-list-display");
    while (linkList.firstChild) linkList.removeChild(linkList.firstChild);
    linkList.appendChild(taskLinkList(updatedTask.links));

    spinner(false);
  });
