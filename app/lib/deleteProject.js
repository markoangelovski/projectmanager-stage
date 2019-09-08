const { api } = require(`../../config/${process.env.API_CONFIG}`);
import getProjectDetails from "../lib/getProjectDetails";

export default async function deleteProject(id) {
  try {
    const deletedProject = await fetch(`${api}/projects/${id}`, {
      method: "DELETE"
    }).then(res => res.json());

    await getProjectDetails();

    if (deletedProject) {
      alert(deletedProject.message);
      window.location.reload();
    }
  } catch (error) {
    console.warn(error);
  }
}
