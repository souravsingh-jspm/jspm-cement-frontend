export const saveUserSession = (user: { id: number; email: string }) => {
  const userDetails = {
    id: user.id,
    email: user.email,
    loginTime: Date.now(),
  };
  localStorage.setItem("user_details", JSON.stringify(userDetails));
};

export const isSessionValid = (): boolean => {
  const stored = localStorage.getItem("user_details");
  if (!stored) return false;

  const user = JSON.parse(stored);
  const expiry = 5 * 60 * 1000; // 5 min

  if (Date.now() - user.loginTime > expiry) {
    localStorage.removeItem("user_details");
    return false;
  }

  return true;
};

export const clearSession = () => {
  localStorage.removeItem("user_details");
};
