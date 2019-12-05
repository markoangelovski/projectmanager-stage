import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { newEventDrag } from "./events/newEventDrag";

const {
  pmBackend: { api, apiversion }
} = require(`../../../../config/${process.env.API_CONFIG}`);

const calendarOptions = {
  // timeZone: "UTC",
  plugins: [interactionPlugin, timeGridPlugin, listPlugin],
  defaultView: "timeGridDay",
  selectable: true,
  selectMirror: true,
  navLinks: true, // can click day/week names to navigate views
  editable: true,
  eventLimit: true, // allow "more" link when too many events
  nowIndicator: true,
  header: {
    left: "prev,next today",
    center: "title",
    right: "timeGridWeek,timeGridDay,listWeek"
  },
  select: function(info) {
    // Trigger function when clicking or dragging on the calendar
    newEventDrag(info);
  },
  events: `${api}/${apiversion}/events`
  // In order to get the native FulCalendar's GET events functionality to include credentials while fetching events
  // Add xhr.withCredentials = true; to node_modules/@fullcalendar/core/main.esm.js on line 4267 before xhr.send(body);
};

export { calendarOptions };
