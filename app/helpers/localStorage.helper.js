const getProject = id => {
  const projects = JSON.parse(localStorage.projects);
  if (!id) {
    return projects;
  } else {
    return projects.find(project => {
      return project._id == id;
    });
  }
};

const getTask = id => {
  const tasks = JSON.parse(localStorage.tasks);
  if (!id) {
    return tasks;
  } else {
    return tasks.find(task => {
      return task._id == id;
    });
  }
};

export { getProject, getTask };
