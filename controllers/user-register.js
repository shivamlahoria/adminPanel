const { getData, writeData } = require("../modal/db");

function onRegister(params) {
let users = getData(); 

//validation to check
if (!users.find(user => {
  return user.username == params.username;
})); 

  writeData(params);
  return {
    msg: "This is a message"
  }
}

module.exports = {
  onRegister 
};