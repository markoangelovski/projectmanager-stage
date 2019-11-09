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

export default apiCall;
