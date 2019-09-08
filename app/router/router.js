export default function router({ projects = "", projectId = "" }) {
  // Clear pathname and render route
  history.pushState({}, "", "/");
  history.pushState({}, "", `${projects}`);
  if (projectId) {
    history.pushState({}, "", `${projects}/${projectId}`);
  }
}
