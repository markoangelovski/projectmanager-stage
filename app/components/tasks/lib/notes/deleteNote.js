import { deleteNoteCall } from "../../../../drivers/Task/note.driver";
import taskNotesList from "../../ui/taskNotesList";
import {
  getTask,
  setUpdatedTask
} from "../../../../helpers/localStorage.helper";
import { alertSuccess, alertError } from "../../../../lib/alerts";
import spinner from "../../../../lib/spinner";

const deleteNote = async (taskId, noteId) => {
  spinner(true);
  // Delete note api call
  try {
    // Submit note for deletion
    const deleted = await deleteNoteCall(taskId, noteId);

    // Check for any returned server errors
    if (!deleted.error) {
      // Remove note from local storage
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

  // Render notes list to DOM
  const notesList = document.getElementById("task-notes-list-display");
  while (notesList.firstChild) notesList.removeChild(notesList.firstChild);
  notesList.innerHTML = taskNotesList(getTask(taskId).notes);
};
export { deleteNote };
