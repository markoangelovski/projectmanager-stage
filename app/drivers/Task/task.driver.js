const {
  pmBackend: { api, apiversion }
} = require(`../../../config/${process.env.API_CONFIG}`);

const createTaskCall = payload => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiversion}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

const updateTaskCall = (taskId, attributeKey, attributeValue) => {
  const payload = [
    {
      propName: attributeKey,
      value: attributeValue
    }
  ];
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiversion}/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

const deleteTaskCall = taskId => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiversion}/tasks/${taskId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

export { createTaskCall, updateTaskCall, deleteTaskCall };
