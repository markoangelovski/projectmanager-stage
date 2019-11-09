import { checkAuthCall } from "../drivers/user.driver";

const checkAuth = async () => {
  // Authenticate user
  const access = await checkAuthCall();
  if (!access.error) {
    return true;
  } else {
    return false;
  }
};

export default checkAuth;
