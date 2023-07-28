const inquirer = require("inquirer");
const questions = require("./lib/questions");
const makeLogo = require("./lib/makeLogo.js");
const writeLogo = require("./lib/writeLogo.js");

const init = async () => {
  const response = await inquirer.prompt(questions);
  const logo = makeLogo(response);
  writeLogo(logo);
};

init();