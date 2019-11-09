import getProjectDetails from "../../../../lib/getProjectDetails";
import { submitNoteCall } from "../../../../drivers/note.driver";
import taskNotesList from "../../ui/taskNotesList";
import spinner from "../../../../lib/spinner";
import { alertSuccess, alertError } from "../../../../lib/alerts";

const submitNote = () => {
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

      // Re-render notes list to DOM
      const notesList = document.getElementById("task-notes-list-display");
      while (notesList.firstChild) notesList.removeChild(notesList.firstChild);
      notesList.innerHTML = taskNotesList(updatedTask.notes);

      spinner(false);
    });
};
