import { editNoteCall } from "../../../../drivers/note.driver";
import getProjectDetails from "../../../../lib/getProjectDetails";
import taskNotesList from "../../ui/taskNotesList";
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

  try {
    // Submit note for edit
    const edited = await editNoteCall(noteId, payloadEncoded);

    // Check for any returned server errors
    if (!edited.error) {
      // Re-fetch data
      await getProjectDetails();

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

  console.log("I was clicked! - save", payloadEncoded);
  // Reset input fields
  noteText.setAttribute("contenteditable", false);

  // Get current task
  const taskId = document.getElementById("task-title-display").dataset.anchor;

  // Re-render task details
  const updatedTask = JSON.parse(localStorage.getItem("tasks")).find(
    upatedTask => upatedTask._id === taskId
  );

  // Render notes list to DOM
  const notesList = document.getElementById("task-notes-list-display");
  while (notesList.firstChild) notesList.removeChild(notesList.firstChild);
  notesList.innerHTML = taskNotesList(updatedTask.notes);

  spinner(false);
};

const cancelSaveNote = (noteText, noteTextInitialValue) => {
  // Reset input fields
  noteText.innerText = noteTextInitialValue;
  // Reset input fields to non-editable
  noteText.setAttribute("contenteditable", false);
};

export { editNote };
