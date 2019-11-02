const { api } = require(`../../config/${process.env.API_CONFIG}`);
import getProjectDetails from "../lib/getProjectDetails";
import { alertError } from "./alerts";

// Get observeables and initiate Project ID variable
const projectLink = document.getElementById("project-details-link");
let id;

const mutationObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    id = mutation.target.dataset.anchor;
  });
});
mutationObserver.observe(projectLink, {
  attributes: true
});

// Delete project
document
  .getElementById("project-delete-display")
  .addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this project?"))
      deleteProject(id);
  });

async function deleteProject(id) {
  try {
    const deletedProject = await fetch(`${api}/projects/${id}`, {
      method: "DELETE"
    }).then(res => res.json());

    await getProjectDetails();

    if (deletedProject) {
      alertError(deletedProject.message);
      window.location.reload();
    }
  } catch (error) {
    console.warn(error);
    alertError(error);
  }
}
