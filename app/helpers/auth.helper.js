import { checkAuthCall } from "../drivers/user.driver";

const checkAuth = async () => {
  // Check if user has token
  const token = localStorage.token;

  if (token) {
    // Authenticate user
    const access = await checkAuthCall(token);
    console.log("access", access);
    if (!access.error) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default checkAuth;
