const { api } = require(`../../config/${process.env.API_CONFIG}`);

const deleteTaskCall = taskId => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/tasks/${taskId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

export { deleteTaskCall };
