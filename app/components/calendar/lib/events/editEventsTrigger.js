import { getEventsCall } from "../../../../drivers/Event/event.driver";
import { editEvents } from "./editEvents";

const editEventsTrigger = () => {
  document
    .getElementById("edit-events")
    .addEventListener("click", function handler() {
      editEventsInit();
      this.removeEventListener("click", handler);
    });
};

const editEventsInit = async () => {
  // Get Monday
  const getStartDate = () => {
    let date = new Date();
    date.setHours(-24 * 6);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  };

  // Get Friday
  const getEndDate = () => {
    let date = new Date();
    date.setHours(24);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  };
  //Create payload
  const payload = `start=${getStartDate()}&end=${getEndDate()}`;
  // Get events from Monday to Friday
  const events = await getEventsCall(payload);
  // Render events to UI
  editEvents(events);
};

export { editEventsTrigger, editEventsInit };
