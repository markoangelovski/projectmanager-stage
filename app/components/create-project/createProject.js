const { api } = require(`../../../config/${process.env.API_CONFIG}`);
import getProjectDetails from "../../lib/getProjectDetails";

const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const owner = document.getElementById("project-owner");
const kanboard = document.getElementById("kanboard-url");
const dev = document.getElementById("dev-url");
const stage = document.getElementById("stage-url");
const prod = document.getElementById("prod-url");
const live = document.getElementById("live-url");
const nas = document.getElementById("nas-path");

document
  .getElementById("full-width-modal")
  .addEventListener("submit", createProject);

async function createProject(e) {
  e.preventDefault();

  // Create project data payload
  const projectData = {
    title: title.value,
    description: description.value,
    owner: owner.value,
    kanboard: kanboard.value,
    dev: dev.value,
    stage: stage.value,
    prod: prod.value,
    live: live.value,
    nas: nas.value
  };

  // Send the data payload to API
  try {
    const projectResponse = await fetch(`${api}/projects`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(projectData)
    }).then(res => res.json());

    getProjectDetails();
    displayProjectDetails(projectResponse);
  } catch (error) {
    console.warn(error);
  }
}

function displayProjectDetails(projectResponse) {
  // Set the "Project creation successfull" title
  const projectFormTitle = document.getElementById("full-width-modalLabel");
  projectFormTitle.setAttribute("style", "color: limegreen;");
  projectFormTitle.innerText = projectResponse.message;

  // Set project description title
  document.querySelector(".modal-body > p").innerText =
    "Project details are the following:";

  // Project details
  title.parentElement.innerHTML = `<p class="col-form-label">${
    projectResponse.project.title
  }</p>`;
  description.parentElement.innerHTML = `<p class="col-form-label">${
    projectResponse.project.description
  }</p>`;
  owner.parentElement.innerHTML = `<p class="col-form-label">${
    projectResponse.project.owner
  }</p>`;
  kanboard.parentElement.innerHTML = `<p class="col-form-label">${
    projectResponse.project.kanboard
  }</p>`;
  dev.parentElement.innerHTML = `<p class="col-form-label">${
    projectResponse.project.dev
  }</p>`;
  stage.parentElement.innerHTML = `<p class="col-form-label">${
    projectResponse.project.stage
  }</p>`;
  prod.parentElement.innerHTML = `<p class="col-form-label">${
    projectResponse.project.prod
  }</p>`;
  live.parentElement.innerHTML = `<p class="col-form-label">${
    projectResponse.project.live
  }</p>`;
  nas.parentElement.innerHTML = `<p class="col-form-label">${
    projectResponse.project.nas
  }</p>`;

  // Remove close and submit button
  const closeButton = document.querySelector(".modal-footer");
  closeButton.removeChild(closeButton.children[0]);
  closeButton.removeChild(closeButton.children[0]);

  // Set Continue button
  const continueButton = document.getElementById("continue");
  continueButton.setAttribute("style", "display: block");
  continueButton.addEventListener("click", () => {
    setTimeout(window.location.reload(true), 100);
  });
}
