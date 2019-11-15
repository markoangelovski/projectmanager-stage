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

const setProject = project => {
  const projects = JSON.parse(localStorage.projects);
  localStorage.projects = JSON.stringify([...projects, project]);
  return project;
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

const setTask = (task, projectId) => {
  localStorage.taskCount = parseInt(localStorage.taskCount) + 1;
  localStorage.tasks = JSON.stringify([...getTask(), task]);

  const projectToUpdate = getProject(projectId);
  projectToUpdate.tasks = [...projectToUpdate.tasks, task];
  const filteredProjects = getProject().filter(
    project => project._id !== projectId
  );
  localStorage.projects = JSON.stringify([
    ...filteredProjects,
    projectToUpdate
  ]);
  return task;
};

const removeTask = (taskId, projectId) => {
  localStorage.taskCount = parseInt(localStorage.taskCount) - 1;
  const tasks = getTask().filter(task => task._id !== taskId);
  localStorage.tasks = JSON.stringify(tasks);

  const projectToUpdate = getProject(projectId);
  projectToUpdate.tasks = projectToUpdate.tasks.filter(
    task => task._id !== taskId
  );
  const filteredProjects = getProject().filter(
    project => project._id !== projectId
  );
  localStorage.projects = JSON.stringify([
    ...filteredProjects,
    projectToUpdate
  ]);
  return "Task removed.";
};

export { getProject, setProject, getTask, setTask, removeTask };
