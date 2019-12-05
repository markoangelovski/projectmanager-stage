import { format, set } from "date-fns";
import { createEventCall } from "../../../../drivers/Event/event.driver";
import spinner from "../../../../lib/spinner";
import { alertSuccess, alertError } from "../../../../lib/alerts";

// New event form:
const newEventButton = () => {
  // Set current date as base value for New Event form
  const date = format(new Date(), "yyyy-MM-dd");
  const dateInput = document.getElementById("event-date-button");
  dateInput.value = date;

  // Set current time as base value for start time
  const timeValueStart = format(new Date(), "HH:mm");
  const timeInputStart = document.getElementById("event-time-start-button");
  timeInputStart.value = timeValueStart;

  // Set current time plus 15min as base value for end time
  const timeEndDate = set(new Date(), {
    minutes: new Date().getMinutes() + 15
  });
  const timeValueEnd = format(new Date(timeEndDate), "HH:mm");
  const timeInputEnd = document.getElementById("event-time-end-button");
  timeInputEnd.value = timeValueEnd;

  // Get event title
  const titleInput = document.getElementById("event-title-button");

  // Get Save button and add event
  document
    .getElementById("event-save-button")
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

export { newEventButton };
