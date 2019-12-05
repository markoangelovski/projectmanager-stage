import { Calendar } from "@fullcalendar/core";

import calendarBody from "../ui/calendarBody";
import { newEventButton } from "./events/newEventButton";
import { calendarOptions } from "./calendarOptions";
import { editEventsTrigger } from "./events/editEventsTrigger";

const calendarTrigger = () => {
  document
    .getElementById("calendar-link")
    .addEventListener("click", calendarInit);
};

const calendarInit = () => {
  // Render Calendar body to UI
  const placeholder = document.getElementById("main-placeholder");
  placeholder.innerHTML = calendarBody;

  // Import styling
  import("../../../../node_modules/@fullcalendar/core/main.css");
  import("../../../../node_modules/@fullcalendar/timegrid/main.css");
  import("../../../../node_modules/@fullcalendar/list/main.css");
  import("../../../../assets/css/calendar/fullcalendar.min.css");

  const renderCalendar = () => {
    const calendarEl = document.getElementById("calendar");

    // Instantiate new Calendar class
    const calendar = new Calendar(calendarEl, calendarOptions);
    calendar.render();
  };

  setTimeout(() => {
    // Render the calendar to DOM after 150ms to give time to css files to load
    renderCalendar();
    // Initiate the new Event trigger
    newEventButton();
    // Initialize the edit Events trigger
    editEventsTrigger();
  }, 150);
};

export { calendarTrigger, calendarInit };
