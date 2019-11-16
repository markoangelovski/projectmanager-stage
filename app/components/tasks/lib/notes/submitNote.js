import { submitNoteCall } from "../../../../drivers/Task/note.driver";
import {
  getTask,
  setUpdatedTask
} from "../../../../helpers/localStorage.helper";
import taskNotesList from "../../ui/taskNotesList";
import spinner from "../../../../lib/spinner";
import { alertSuccess, alertError } from "../../../../lib/alerts";

const submitNoteTrigger = () => {
  // Get submit Note button
  document
    .getElementById("task-note-submit")
    .addEventListener("click", async () => {
      // Get task ID
      const task = document.getElementById("task-title-display").dataset.anchor;

      // Set Note payload and upload the new note
      const payload = {
        note: document.getElementById("task-note-content-submit").value
      };

      spinner(true);

      try {
        // Submit note
        const submitted = await submitNoteCall(task, payload);

        // Check for any returned server errors
        if (!submitted.error) {
          // Set notificaton
          alertSuccess(submitted.message);
          // Set link to local storage
          setUpdatedTask(submitted.task, submitted.task.project);
        } else {
          alertError(submitted.message);
          spinner(false);
        }
      } catch (error) {
        console.warn(error);
        spinner(false);
        alertError(error);
      }

      // Re-render notes list to DOM
      const notesList = document.getElementById("task-notes-list-display");
      while (notesList.firstChild) notesList.removeChild(notesList.firstChild);
      notesList.innerHTML = taskNotesList(getTask(task).notes);

      spinner(false);
    });
};

export { submitNoteTrigger };
