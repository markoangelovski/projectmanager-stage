const {
  pmBackend: { api, apiversion }
} = require(`../../config/${process.env.API_CONFIG}`);

const apiCall = async url => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiversion}/${url}`)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(error => reject(error));
  });
};

const apiCallPost = async (payload, url) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiversion}/${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(error => reject(error));
  });
};

const apiCallDelete = async (id, url) => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiversion}/${url}/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(error => reject(error));
  });
};

export { apiCall, apiCallPost, apiCallDelete };
