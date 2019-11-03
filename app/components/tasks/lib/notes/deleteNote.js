import getProjectDetails from "../../../../lib/getProjectDetails";
import { deleteNoteCall } from "../../../../drivers/note.driver";
import taskNotesList from "../../ui/taskNotesList";
import { alertSuccess, alertError } from "../../../../lib/alerts";
import spinner from "../../../../lib/spinner";

const deleteNote = async (taskId, noteId) => {
  console.log("delete", noteId);
  spinner(true);
  // Delete note api call
  try {
    // Submit note for deletion
    const deleted = await deleteNoteCall(taskId, noteId);

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

  // Render notes list to DOM
  const notesList = document.getElementById("task-notes-list-display");
  while (notesList.firstChild) notesList.removeChild(notesList.firstChild);
  notesList.innerHTML = taskNotesList(updatedTask.notes);
};
export { deleteNote };
