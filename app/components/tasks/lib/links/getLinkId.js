import { editLink } from "./editLink";
import { deleteLink } from "./deleteLink";

const getLinkId = () => {
  // Get Link list table
  const links = document.getElementById("task-link-list-display");
  // Listen to events on Link list table
  links.addEventListener("click", e => {
    e.preventDefault();
    // Get label and linkId
    const label = e.target.innerText;
    const taskId = e.target.dataset.task;
    const linkId = e.target.dataset.link;
    const linkRow =
      e.target.parentElement.parentElement.parentElement.parentElement;
    // Call edit or delete link functions depending on the label
    if (label === "Edit") {
      editLink(linkId, linkRow);
    } else if (label === "Delete") {
      deleteLink(taskId, linkId);
    }
  });
};

//getLinkId();

export { getLinkId };
