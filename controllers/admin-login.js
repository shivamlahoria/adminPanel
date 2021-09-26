const { getData, writeData } = require("../modal/admin-db");

function onAdminLogin(params) {
  let users = getData();
  const userIndex = users.findIndex((user) => {
    return user.username == params.username && user.password == params.password;
  });
  console.log(params);
  console.log(users);
  console.log(userIndex);
  if (userIndex == -1) {
    return false;
  } else 
  return true;
}

module.exports = {
  onAdminLogin
};
