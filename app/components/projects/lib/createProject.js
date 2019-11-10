import { apiCallPost } from "../../../helpers/api.helper";
import { getProject } from "../../../helpers/localStorage.helper";
import { alertSuccess, alertError } from "../../../lib/alerts";

// Get Placeholders
const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const owner = document.getElementById("project-owner");
const nas = document.getElementById("nas-path");
const kanboard = document.getElementById("kanboard-url");
const dev = document.getElementById("dev-url");
const stage = document.getElementById("stage-url");
const prod = document.getElementById("prod-url");
const live = document.getElementById("live-url");

const createProjectTrigger = () => {
  document
    .getElementById("full-width-modal")
    .addEventListener("submit", createProject);
};

async function createProject(e) {
  e.preventDefault();

  // Create project data payload
  const payload = {
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
    const projectResponse = await apiCallPost(payload, "projects");
    if (projectResponse.error) alertError(projectResponse.error);
    alertSuccess(projectResponse.message);
    displayProjectDetails(projectResponse);

    // Save new project to local storage
    localStorage.projects = JSON.stringify([
      ...getProject(),
      projectResponse.project
    ]);
    localStorage.projectCount = parseInt(localStorage.projectCount) + 1;
    document.getElementById("project-overview").innerText =
      localStorage.projectCount;
    document.getElementById("project-count").innerText =
      localStorage.projectCount;
  } catch (error) {
    console.warn(error);
    alertError(error);
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

  // Parent element references
  let reftitle = title.parentElement;
  let refdescription = description.parentElement;
  let refowner = owner.parentElement;
  let refnas = nas.parentElement;
  let refkanboard = kanboard.parentElement;
  let refdev = dev.parentElement;
  let refstage = stage.parentElement;
  let refprod = prod.parentElement;
  let reflive = live.parentElement;

  // Project details
  document.getElementById(
    "project-title"
  ).parentElement.innerHTML = `<p class="col-form-label">${projectResponse.project.title}</p>`;
  document.getElementById(
    "project-description"
  ).parentElement.innerHTML = `<p class="col-form-label">${projectResponse.project.description}</p>`;
  document.getElementById(
    "project-owner"
  ).parentElement.innerHTML = `<p class="col-form-label">${projectResponse.project.owner}</p>`;
  document.getElementById(
    "nas-path"
  ).parentElement.innerHTML = `<p class="col-form-label">${projectResponse.project.nas}</p>`;
  document.getElementById(
    "kanboard-url"
  ).parentElement.innerHTML = `<p class="col-form-label">${projectResponse.project.kanboard}</p>`;
  document.getElementById(
    "dev-url"
  ).parentElement.innerHTML = `<p class="col-form-label">${projectResponse.project.dev}</p>`;
  document.getElementById(
    "stage-url"
  ).parentElement.innerHTML = `<p class="col-form-label">${projectResponse.project.stage}</p>`;
  document.getElementById(
    "prod-url"
  ).parentElement.innerHTML = `<p class="col-form-label">${projectResponse.project.prod}</p>`;
  document.getElementById(
    "live-url"
  ).parentElement.innerHTML = `<p class="col-form-label">${projectResponse.project.live}</p>`;

  // Remove close and submit button
  const closeButton = document.querySelector(".modal-footer");
  closeButton.children[0].setAttribute("style", "display:none;");
  closeButton.children[1].setAttribute("style", "display:none;");

  // Set Continue button
  const continueButton = document.getElementById("continue");
  continueButton.setAttribute("style", "display:block");

  continueButton.addEventListener("click", function handler() {
    // Set the "Project creation successfull" title
    const refprojectFormTitle = document.getElementById(
      "full-width-modalLabel"
    );
    refprojectFormTitle.setAttribute("style", "color: #343a40;");
    refprojectFormTitle.innerText = "Create a new project";

    // Set project description title
    document.querySelector(".modal-body > p").innerText =
      "Fill out the details of your new project.:";

    // Reset Create Project form fields
    reftitle.innerHTML = `<div class="col-sm-10"><input type="text" class="form-control" id="project-title" placeholder="Project title" required=""><span class="help-block"><small id="warning-message"></small></span></div>`;
    refdescription.innerHTML = `<div class="col-sm-10"><textarea class="form-control" id="project-description" rows="5" placeholder="Enter a brief description of the project" style="margin-top: 0px; margin-bottom: 0px; height: calc(1.5em + .9rem + 2px);"></textarea></div>`;
    refowner.innerHTML = `<div class="col-sm-10"><input type="text" class="form-control" id="project-owner" placeholder="Project owner"></div>`;
    refnas.innerHTML = `<div class="col-sm-10"><input type="text" class="form-control" id="nas-path" placeholder="Enter path to project folder on NAS"></div>`;
    refkanboard.innerHTML = `<div class="col-md-10"><input class="form-control" type="url" id="kanboard-url" name="kanboard-url" placeholder="Link to Project's board in Kanban"></div>`;
    refdev.innerHTML = `<div class="col-md-10"><input class="form-control" type="url" id="dev-url" name="dev-url" placeholder="Link to Dev environment"></div>`;
    refstage.innerHTML = `<div class="col-md-10"><input class="form-control" type="url" id="stage-url" name="stage-url" placeholder="Link to Stage environment"></div>`;
    refprod.innerHTML = `<div class="col-md-10"><input class="form-control" type="url" id="prod-url" name="prod-url" placeholder="Link to Production environment"></div>`;
    reflive.innerHTML = `<div class="col-md-10"><input class="form-control" type="url" id="live-url" name="live-url" placeholder="Link to Live site"></div>`;

    // Remove close and submit button
    const closeButton = document.querySelector(".modal-footer");
    closeButton.children[0].setAttribute("style", "display:block;");
    closeButton.children[1].setAttribute("style", "display:block;");

    // Set Continue button
    const continueButton = document.getElementById("continue");
    continueButton.setAttribute("style", "display:none");
    import(/* webpackChunkName: "create-project-reset"*/ "./createProject");
  });
}

export default createProjectTrigger;
