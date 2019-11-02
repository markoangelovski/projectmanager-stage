import render from "../render/render";

const alertSuccess = alert => {
  let message = `
  <div id="warning-message" class="warning-message alert alert-success alert-dismissible fade show" role="alert" style="position:fixed;top:9rem;right:1rem;z-index:111;margin-left:1rem;">
  <i class="mdi mdi-check-all mr-2"></i>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
  </button>
  ${alert}
  </div>`;

  render(message, document.body);

  // If multiple warning messages are on screen offset the position of each one by 4 rem
  let rem = 5;
  const messages = [...document.querySelectorAll(".warning-message")];

  messages.map(element => {
    if (!element[0]) element.style.top = `${(rem += 4)}rem`;
  });
};

const alertError = err => {
  let message = `
  <div id="warning-message" class="warning-message alert alert-danger alert-dismissible fade show" role="alert" style="position:fixed;top:9rem;right:1rem;z-index:111;margin-left:1rem;">
  <i class="mdi mdi-block-helper mr-2"></i>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
  </button>
  ${err}
  </div>`;

  render(message, document.body);

  // If multiple warning messages are on screen offset the position of each one by 4 rem
  let rem = 5;
  const messages = [...document.querySelectorAll(".warning-message")];

  messages.map(element => {
    if (!element[0]) element.style.top = `${(rem += 4)}rem`;
  });
};

export { alertError, alertSuccess };
