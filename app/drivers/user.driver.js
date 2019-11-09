const { api } = require(`../../config/${process.env.API_CONFIG}`);

const checkAuthCall = token => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/auth`, {
      method: "POST",
      headers: {
        Authorization: token
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(user => resolve(user))
      .catch(error => reject(error));
  });
};

const logInCall = payload => {
  return new Promise((resolve, reject) => {
    fetch(`${api}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(token => resolve(token))
      .catch(error => reject(error));
  });
};

module.exports = { logInCall, checkAuthCall };
