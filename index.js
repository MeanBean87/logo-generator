const inquirer = require("inquirer");
const fs =  require("fs");
const questions = require("./lib/questions");
// jest.mock("fs");

const init = async () => {
  
  fs.writeFile("logo.svg", await inquirer.prompt(questions), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Success!");
  });
};

init();
