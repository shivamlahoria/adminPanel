/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
let utilData = require('../utils/db.json');

const jsonPath = path.join(__dirname, '..', 'utils', 'db.json');

function getData() {
  return utilData;
}

function writeData(data) {
  debugger;
  utilData.push(data); 
  fs.writeFile(jsonPath, JSON.stringify(utilData), (error) => {
    if (error) {
      console.log(error);
    }
  });
}

module.exports = {
  getData,
  writeData
};