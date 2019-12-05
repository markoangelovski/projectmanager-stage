import { logOutCall } from "../../drivers/User/user.driver";

const logOutTrigger = () => {
  document.getElementById("logout").addEventListener("click", async () => {
    await logOutCall();
    window.location.reload();
  });
};

export { logOutTrigger };
