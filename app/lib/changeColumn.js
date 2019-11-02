const { api } = require(`./../../config/${process.env.API_CONFIG}`);
import getProjectDetails from "./getProjectDetails";
import renderTasks from "../components/tasks/renderTasksKanboard";
import spinner from "./spinner";

export default function changeColumn() {
  // Get all Column change menus, add click event listeners and call the API call for update
  document.querySelectorAll(".column-select").forEach(column => {
    column.children[1].addEventListener("click", () =>
      changeColumnApiCall(
        column.parentElement.parentElement.id,
        column.children[1].innerText
      )
    );
    column.children[2].addEventListener("click", () =>
      changeColumnApiCall(
        column.parentElement.parentElement.id,
        column.children[2].innerText
      )
    );
  });
}

// Send API call
const changeColumnApiCall = async (id, column) => {
  const payload = [
    {
      propName: "column",
      value: column
    }
  ];

  // Insert spinner
  spinner(true);

  const columnResponse = await fetch(`${api}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(res => res.json());

  await getProjectDetails();

  // Remove spinner
  spinner(false);

  // Check if a project is selected and render tasks accordingly
  const projectLink = document.getElementById("project-details-link");
  if (!projectLink.dataset.anchor) {
    renderTasks([]);
  } else {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const project = projects.find(
      project => project._id === projectLink.dataset.anchor
    );
    renderTasks(project.tasks);
  }
};

changeColumn();
