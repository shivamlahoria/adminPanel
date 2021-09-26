const { getData } = require("../modal/db");

function getUsersData() {
  let users = getData();

  return users;
}

function getUserData(username) {
  let users = getData();
  const foundUser = users.find((user) => {
    return user.username == username;
  });
  return foundUser;
}

module.exports = {
  getUsersData,
  getUserData
};

