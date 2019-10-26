export default function spinner(spin) {
  // Create elements
  const frameHolder = document.createElement("div");
  const frame = document.createElement("div");
  frame.setAttribute(
    "style",
    "background-color: #3bafda;opacity: 0.2;width: 100vw;height: 100vh;position: absolute;z-index: 1;"
  );
  const spinner = document.createElement("div");
  spinner.setAttribute("class", "spinner-border text-primary m-2");
  spinner.setAttribute("role", "status");
  spinner.setAttribute(
    "style",
    "position: absolute; z-index: 1; left: 50vw; top: 50vh;"
  );
  frameHolder.appendChild(frame);
  frameHolder.appendChild(spinner);

  const anchor = document.getElementById("kanboard-placeholder");

  // Render or remove spinner to/from DOM
  if (spin) {
    anchor.insertAdjacentElement("afterbegin", frameHolder);
  } else {
    anchor.removeChild(anchor.firstChild);
  }
}
