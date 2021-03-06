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
      body: JSON.stringify(payload),
      // Credentials: include for sending the cookie from the browser to the backend
      credentials: "include"
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
      body: JSON.stringify(payload),
      // Credentials: include for sending the cookie from the browser to the backend
      credentials: "include"
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

const deleteTaskCall = taskId => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiversion}/tasks/${taskId}`, {
      method: "DELETE",
      // Credentials: include for sending the cookie from the browser to the backend
      credentials: "include"
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

export { createTaskCall, updateTaskCall, deleteTaskCall };
