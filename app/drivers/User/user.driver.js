const {
  pmBackend: { api, apiversion }
} = require(`../../../config/${process.env.API_CONFIG}`);

const checkAuthCall = () => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiversion}/auth`, {
      method: "POST",
      // Credentials: include for sending the cookie from the browser to the backend
      credentials: "include"
    })
      .then(res => res.json())
      .then(user => resolve(user))
      .catch(error => reject(error));
  });
};

const logInCall = payload => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${apiversion}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // Credentials: include for setting the cookie in browser
      credentials: "include",
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(token => resolve(token))
      .catch(error => reject(error));
  });
};

module.exports = { logInCall, checkAuthCall };
