const { api } = require(`../../config/${process.env.API_CONFIG}`);

const submitNoteCall = (task, payload) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/notes/${task}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

const editNoteCall = (noteId, payload) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/notes/${noteId}/?note=${payload}`, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

const deleteNoteCall = (taskId, noteId) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/notes/${taskId}?noteId=${noteId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

export { submitNoteCall, editNoteCall, deleteNoteCall };
