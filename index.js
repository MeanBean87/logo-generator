const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions");
const { makeLogo } = require("./lib/shapes.js");


const writeLogo = (logo) => {
  fs.writeFile("logo.svg", logo, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Success!");
  });
};

const init = async () => {
  const response = await inquirer.prompt(questions);
  const logo = makeLogo(response);
  console.log(logo);
  writeLogo(logo);
};

init();
