export default function clearTasksUI() {
  // Get Kanboard columns
  const upcoming = document.getElementById("upcoming");
  const inprogress = document.getElementById("inprogress");
  const completed = document.getElementById("completed");

  // Clear Kanboard columns before rendering tasks
  while (upcoming.firstChild) upcoming.removeChild(upcoming.firstChild);

  while (inprogress.firstChild) inprogress.removeChild(inprogress.firstChild);

  while (completed.firstChild) completed.removeChild(completed.firstChild);
}
