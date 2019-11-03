import { editLinkCall } from "../../../../drivers/link.driver";
import getProjectDetails from "../../../../lib/getProjectDetails";
import taskLinkList from "../../ui/taskLinkList";
import { alertSuccess, alertError } from "../../../../lib/alerts";
import spinner from "../../../../lib/spinner";

const editLink = (linkId, element) => {
  // Get link title
  const linkTitle = element.querySelector("#link-title");
  linkTitle.setAttribute("contenteditable", true);
  linkTitle.focus();
  const linkTitleInitialValue = linkTitle.innerText;

  // Get link url
  const linkUrl = element.querySelector("#link-url");
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

  try {
    // Submit link for edit
    const edited = await editLinkCall(linkId, payloadEncoded);

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
  linkTitle.setAttribute("contenteditable", false);
  linkUrl.setAttribute("contenteditable", false);

  // Get current task
  const taskId = document.getElementById("task-title-display").dataset.anchor;

  // Re-render task details
  const updatedTask = JSON.parse(localStorage.getItem("tasks")).find(
    upatedTask => upatedTask._id === taskId
  );

  // Re-render linklist to DOM
  const linkList = document.getElementById("task-link-list-display");
  while (linkList.firstChild) linkList.removeChild(linkList.firstChild);
  linkList.appendChild(taskLinkList(updatedTask.links));

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

// 1 Makni sve ovo gore
// 2 Napravi da su tamo link naziv i url editabilni na klik na edit u dropdownu
// 3 Dinamički popuni payload i enkodiraj ga
// 4 Zovi editLink u trycatch sa errowarning msg
// 5 Re-render linkove nazad

// const payload = [
//   {
//     propName: "name1",
//     value: "value1"
//   },
//   {
//     propName: "name2",
//     value: "value2"
//   }
// ];

// // const payload = payload
// const stringified = JSON.stringify(payload);
// const encodedStringified = encodeURIComponent(stringified);

// editLink("5db47ce20cb5ca35d893a211", encodedStringified)
//   .then(res => console.log("res", res))
//   .catch(err => {
//     console.warn(err);
//   });
