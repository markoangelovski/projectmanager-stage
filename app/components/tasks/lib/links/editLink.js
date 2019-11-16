import { editLinkCall } from "../../../../drivers/Task/link.driver";
import taskLinkList from "../../ui/taskLinkList";
import {
  getTask,
  setUpdatedTask
} from "../../../../helpers/localStorage.helper";
import { alertSuccess, alertError } from "../../../../lib/alerts";
import spinner from "../../../../lib/spinner";

const editLink = (linkId, element) => {
  // Get link title
  const linkTitle = element.querySelector(".link-title");
  linkTitle.setAttribute("contenteditable", true);
  linkTitle.focus();
  const linkTitleInitialValue = linkTitle.innerText;

  // Get link url
  const linkUrl = element.querySelector(".link-url");
  linkUrl.setAttribute("contenteditable", true);
  const linkUrlInitialValue = linkUrl.innerText;

  // Check whether Enter or Esc key was pressed
  element.addEventListener("keyup", e => {
    // If enter is pressed fire saveLink
    e.keyCode === 13
      ? saveLink(e, linkTitle, linkUrl, linkId)
      : // If esc is pressed fire cancelSaveLink
      e.keyCode === 27
      ? cancelSaveLink(
          linkTitle,
          linkTitleInitialValue,
          linkUrl,
          linkUrlInitialValue
        )
      : null;
  });
};

const saveLink = async (e, linkTitle, linkUrl, linkId) => {
  e.preventDefault();
  spinner(true);
  // Create payload with initial values
  const payload = JSON.stringify([
    {
      propName: "title",
      value: linkTitle.innerText.replace(/(\r\n|\r|\n)/, "").trim()
    },
    {
      propName: "link",
      value: linkUrl.innerText.replace(/(\r\n|\r|\n)/, "").trim()
    }
  ]);
  const payloadEncoded = encodeURIComponent(payload);

  let taskId;

  try {
    // Submit link for edit
    const edited = await editLinkCall(linkId, payloadEncoded);

    // Check for any returned server errors
    if (!edited.error) {
      // Update local storage
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
  linkTitle.setAttribute("contenteditable", false);
  linkUrl.setAttribute("contenteditable", false);

  // Re-render linklist to DOM
  const linkList = document.getElementById("task-link-list-display");
  while (linkList.firstChild) linkList.removeChild(linkList.firstChild);
  linkList.appendChild(taskLinkList(getTask(taskId).links));

  spinner(false);
};

const cancelSaveLink = (
  linkTitle,
  linkTitleInitialValue,
  linkUrl,
  linkUrlInitialValue
) => {
  // Reset input fields
  linkTitle.innerText = linkTitleInitialValue;
  linkUrl.innerText = linkUrlInitialValue;
  // Reset input fields to non-editable
  linkTitle.setAttribute("contenteditable", false);
  linkUrl.setAttribute("contenteditable", false);
};

export { editLink };
