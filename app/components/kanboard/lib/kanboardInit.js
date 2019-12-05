import kanboardBody from "../ui/kanboardBody";
import { taskDetailsTrigger } from "../../tasks/renderTaskDetails";

const kanboardInit = () => {
  const placeholder = document.getElementById("main-placeholder");
  placeholder.innerHTML = kanboardBody;

  // Set task details trigger
  taskDetailsTrigger();

  // Remove existing instances of scripts
  document.querySelectorAll('script[src*="jquery-ui.min"]').forEach(script => {
    if (script) script.remove();
  });

  document.querySelectorAll('script[src*="kanban.init"]').forEach(script => {
    if (script) script.remove();
  });

  // Create jquery and kanboard init scripts
  const jquery = document.createElement("script");
  jquery.setAttribute("type", "text/javascript");
  jquery.setAttribute("src", "assets/js/jquery-ui.min.js");

  const kanbanInit = document.createElement("script");
  kanbanInit.setAttribute("type", "text/javascript");
  kanbanInit.setAttribute("src", "assets/js/kanboard/kanban.init.js");

  // Render scripts
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(jquery);
  setTimeout(() => {
    body.appendChild(kanbanInit);
  }, 0);
};

export default kanboardInit;
