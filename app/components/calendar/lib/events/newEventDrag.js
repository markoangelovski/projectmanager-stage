import { format } from "date-fns";
import { createEventCall } from "../../../../drivers/Event/event.driver";
import spinner from "../../../../lib/spinner";
import { alertSuccess, alertError } from "../../../../lib/alerts";

const newEventDrag = info => {
  console.log("info :", info);
  // Set current date as base value for New Event form
  const date = format(new Date(info.startStr), "yyyy-MM-dd");
  const dateInput = document.getElementById("event-date-drag");
  dateInput.value = date;

  // Set current time as base value for start time
  const timeValueStart = format(new Date(info.startStr), "HH:mm");
  const timeInputStart = document.getElementById("event-time-start-drag");
  timeInputStart.value = timeValueStart;

  // Set current time plus 15min as base value for end time
  const timeValueEnd = format(new Date(info.endStr), "HH:mm");
  const timeInputEnd = document.getElementById("event-time-end-drag");
  timeInputEnd.value = timeValueEnd;

  // Get event title
  const titleInput = document.getElementById("event-title-drag");

  // Simulate "Add Event Button" due to how modals work
  const a = document.createElement("a");
  a.setAttribute("data-toggle", "modal");
  a.setAttribute("data-target", "#add-event-drag");
  document.getElementsByTagName("body")[0].appendChild(a);
  document.querySelector('a[data-target="#add-event-drag"]').click();
  document.querySelector('a[data-target="#add-event-drag"]').remove();

  // Get Save button and add event
  document
    .getElementById("event-save-drag")
    .addEventListener("click", async function handler(e) {
      // Get modified value of start and end time
      const timeStart = new Date(
        `${dateInput.value}T${timeInputStart.value}:00`
      );
      const timeEnd = new Date(`${dateInput.value}T${timeInputEnd.value}:00`);
      // Create payload
      const payload = {
        date: dateInput.value,
        events: [
          {
            title: titleInput.value,
            start: timeStart.getTime(),
            end: timeEnd.getTime()
          }
        ]
      };

      // Send the data payload to API
      try {
        spinner(true);
        const eventResponse = await createEventCall(payload);
        console.log("eventResponse :", eventResponse);
        if (!eventResponse.error) {
          alertSuccess(eventResponse.message);
          spinner(false);
          // Click again on calendarlink in side menu to reload the calendar
          document.getElementById("calendar-link").click();
        } else {
          // In case of errors display error message
          console.warn(eventResponse.message);
          alertError(eventResponse.message);
          spinner(false);
        }
      } catch (error) {
        console.warn(error);
        alertError(error);
        spinner(false);
      }

      console.log("Payload sent!", payload);
      this.removeEventListener("click", handler);
    });
};
export { newEventDrag };
