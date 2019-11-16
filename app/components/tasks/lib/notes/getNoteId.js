import { editNote } from "./editNote";
import { deleteNote } from "./deleteNote";

const getNoteId = () => {
  // Get Note list placeholder
  const notes = document.getElementById("task-notes-list-display");

  // Listen to events on Note list placeholder
  notes.addEventListener("click", e => {
    e.preventDefault();
    // Get button role and noteId
    const role = e.target.dataset.toggle;
    const taskId = e.target.dataset.task;
    const noteId = e.target.dataset.note;
    const noteRow = e.target.parentElement.parentElement.parentElement;
    // Call edit or delete note functions depending on the role
    if (role === "edit") {
      editNote(noteId, noteRow);
    } else if (role === "delete") {
      deleteNote(taskId, noteId);
    }
  });
};

export { getNoteId };
