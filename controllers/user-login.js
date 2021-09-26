const { getData, writeData } = require("../modal/db");

function onLogin(params) {
let users = getData(); 
const existingUser = users.find((user) => {
  return (user.username == params.username && user.password == params.password);
});

if (existingUser == -1) {
return false;
} 
else 
  return true;
}

module.exports = {
  onLogin
};