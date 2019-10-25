import kanboardTitle from "../components/kanboard-title/kanboardTitle";
import leftSidebar from "../components/left-sidebar/leftSidebar";
import renderTasks from "./renderTasks";

// This module renders the DOM elemens if there is no data in localstorage

// Select Refresh Icon
const selector = document.querySelector(
  "#wrapper > div.navbar-custom > ul.list-unstyled.topnav-menu.float-right.mb-0 > li:nth-child(2)"
);

// Check if there is data in localstorage
if (localStorage.getItem("projects")) {
  selector.setAttribute("style", "display: none");
} else {
  // If there is no data, wait for 2.5sec and get the data again
  selector.setAttribute("style", "display: list-item");
  setTimeout(() => {
    const kanboardTitlePlaceholder = document.querySelector("h4.page-title");
    const projectCount = localStorage.getItem("projectCount") || 0;
    const taskCount = localStorage.getItem("taskCount") || 0;

    const title = {
      title: "Overview",
      projectCount,
      taskCount
    };
    kanboardTitlePlaceholder.appendChild(kanboardTitle(title));
    leftSidebar();
    renderTasks([]);
  }, 2500);
}
