import { editNoteCall } from "../../../../drivers/Task/note.driver";
import taskNotesList from "../../ui/taskNotesList";
import {
  getTask,
  setUpdatedTask
} from "../../../../helpers/localStorage.helper";
import { alertSuccess, alertError } from "../../../../lib/alerts";
import spinner from "../../../../lib/spinner";

const editNote = (noteId, element) => {
  // Get note text
  const noteText = element.querySelector(".note-text");
  noteText.setAttribute("contenteditable", true);
  noteText.focus();
  const noteTextInitialValue = noteText.innerText;
  // Check whether Enter or Esc key was pressed
  element.addEventListener("keyup", e => {
    // If enter is pressed fire saveNote
    e.keyCode === 13
      ? saveNote(e, noteText, noteId)
      : // If esc is pressed fire cancelSaveNote
      e.keyCode === 27
      ? cancelSaveNote(noteText, noteTextInitialValue)
      : null;
  });
};

const saveNote = async (e, noteText, noteId) => {
  e.preventDefault();
  spinner(true);
  // Create payload with initial values
  const payload = JSON.stringify(
    noteText.innerText.replace(/(\r\n|\r|\n|\n\n)/, "").trim()
  );
  const payloadEncoded = encodeURIComponent(payload);

  let taskId;

  try {
    // Submit note for edit
    const edited = await editNoteCall(noteId, payloadEncoded);

    // Check for any returned server errors
    if (!edited.error) {
      // Update task in local storage
      setUpdatedTask(edited.task, edited.task.project);
      taskId = edited.task._id;

      // Set notificaton
      alertSuccess(edited.message);
    } else {
      alertError(edited.message);
      spinner(false);
    }
  } catch (error) {
    console.warn(error);
    alertError(error);
    spinner(false);
  }

  // Reset input fields
  noteText.setAttribute("contenteditable", false);

  // Render notes list to DOM
  const notesList = document.getElementById("task-notes-list-display");
  while (notesList.firstChild) notesList.removeChild(notesList.firstChild);
  notesList.innerHTML = taskNotesList(getTask(taskId).notes);

  spinner(false);
};

const cancelSaveNote = (noteText, noteTextInitialValue) => {
  // Reset input fields
  noteText.innerText = noteTextInitialValue;
  // Reset input fields to non-editable
  noteText.setAttribute("contenteditable", false);
};

export { editNote };
