// // Get columns
// const upcoming = document.getElementById("upcoming");
// const inProgress = document.getElementById("inprogress");
// const completed = document.getElementById("completed");

// let movedUpcoming = [],
//   movedInProgress = [],
//   movedCopleted = [];

// // Create an observer instance linked to the callback function
// const upcomingObserver = new MutationObserver(mutations => {
//   movedUpcoming = [...mutations[0].target.children].filter(child => child.id);
//   console.log(
//     `Uocoming before movement: ${upcoming.children.length}, afetr movement ${movedUpcoming.length}`
//   );
// });
// // Create an observer instance linked to the callback function
// const inProgressObserver = new MutationObserver(mutations => {
//   movedUpcoming = [...mutations[0].target.children].filter(child => child.id);
//   console.log(
//     `InProgress before movement: ${inProgress.children.length}, afetr movement ${movedInProgress.length}`
//   );
// });
// // Create an observer instance linked to the callback function
// const completedObserver = new MutationObserver(mutations => {
//   movedUpcoming = [...mutations[0].target.children].filter(child => child.id);
//   console.log(
//     ` before movement: ${completed.children.length}, afetr movement ${movedCopleted.length}`
//   );
// });

// // Start observing the target node for configured mutations
// upcomingObserver.observe(upcoming, { childList: true });
// inProgressObserver.observe(inProgress, { childList: true });
// completedObserver.observe(completed, { childList: true });

// console.log(
//   `Uocoming before movement: ${upcoming.children.length}, afetr movement ${movedUpcoming.length}`
// );
// console.log(
//   `InProgress before movement: ${inProgress.children.length}, afetr movement ${movedInProgress.length}`
// );
// console.log(
//   ` before movement: ${completed.children.length}, afetr movement ${movedCopleted.length}`
// );
