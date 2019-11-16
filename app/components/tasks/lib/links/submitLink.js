import { submitLinkCall } from "../../../../drivers/Task/link.driver";
import {
  getTask,
  setUpdatedTask
} from "../../../../helpers/localStorage.helper";
import taskLinkList from "../../ui/taskLinkList";
import spinner from "../../../../lib/spinner";
import { alertSuccess, alertError } from "../../../../lib/alerts";

const submitLinkTrigger = () => {
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
          // Set notificaton
          alertSuccess(submitted.message);
          // Set link to local storage
          setUpdatedTask(submitted.task, submitted.task.project);
        } else {
          console.warn(submitted.message);
          spinner(false);
          alertError(submitted.message);
        }
      } catch (error) {
        console.warn(error);
        spinner(false);
        alertError(error);
      }
      // Re-render linklist to DOM
      const linkList = document.getElementById("task-link-list-display");
      while (linkList.firstChild) linkList.removeChild(linkList.firstChild);
      linkList.appendChild(taskLinkList(getTask(task).links));

      spinner(false);
    });
};

export { submitLinkTrigger };
