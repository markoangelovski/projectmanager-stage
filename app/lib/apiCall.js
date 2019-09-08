const { api } = require(`./../../config/${process.env.API_CONFIG}`);

export async function apiCall(url) {
  try {
    const data = await fetch(`${api}/${url}`).then(res => res.json());
    return data;
  } catch (error) {
    console.warn(error);
  }
}
