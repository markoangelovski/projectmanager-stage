import { format } from "date-fns";
import { deleteEvent } from "./deleteEvent";

const editEvents = events => {
  let body = "";
  // Create event list output
  events.forEach(event => {
    body += `<tr>
                <th scope="row">${format(new Date(event.start), "EEEE")}</th>
                <td>${format(new Date(event.start), "KK:mmaaaa")} -
                  ${format(new Date(event.end), "KK:mmaaaa")}</td>
                <td class="event-title">${event.title}</td>
                <td>${format(new Date(event.start), "MMMM dd, y")}</td>
                <td style="width: 20%">
                <button id="${
                  event.start
                }" type="button" class="close" >×</button>
                </td>
            </tr>`;
  });
  // Render output to DOM
  const eventList = document.getElementById("event-list-placeholder");
  eventList.innerHTML = body;

  // Initiate edit/delete functions
  eventList.addEventListener("click", function handler(e) {
    if (e.target.innerHTML === "Edit") {
      // Placeholder for Edit Event functionality. Not needed atm.
    } else if (e.target.className === "close") {
      deleteEvent(e);
    }
    // this.removeEventListener("click", handler);
  });

  // Get Close button
  document
    .getElementById("event-close-button-edit-event")
    .addEventListener("click", function handler() {
      // Click again on calendarlink in side menu to reload the calendar
      document.getElementById("calendar-link").click();
      this.removeEventListener("click", handler);
    });
  // Get X button
  document
    .getElementById("event-x-button-edit-event")
    .addEventListener("click", function handler() {
      // Click again on calendarlink in side menu to reload the calendar
      document.getElementById("calendar-link").click();
      this.removeEventListener("click", handler);
    });
};

export { editEvents };
