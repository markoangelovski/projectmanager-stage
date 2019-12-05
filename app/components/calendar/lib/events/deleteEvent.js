import { editEventsInit } from "./editEventsTrigger";
import { deleteEventCall } from "../../../../drivers/Event/event.driver";
import { alertError, alertSuccess } from "../../../../lib/alerts";
import spinner from "../../../../lib/spinner";

const deleteEvent = async e => {
  try {
    spinner(true);
    const deletedEvent = await deleteEventCall(e.target.id);

    if (!deletedEvent.error) {
      spinner(false);
      alertSuccess(deletedEvent.message);

      // Remove deleted event from DOM
      document.getElementById(e.target.id).parentElement.parentElement.remove();
    } else {
      spinner(false);
      alertError(deletedEvent.message);
    }
  } catch (error) {
    console.warn(error);
    spinner(false);
    alertError(error.message);
  }
};

export { deleteEvent };
