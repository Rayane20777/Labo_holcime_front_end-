export const hasRole = (info, role) => {
  const user = JSON.parse(info.user);
  console.log(user.role);
  return user.role === role;};