const inquirer = require("inquirer");
const fs = require("fs");

const logoTextValidation = (input) => {
  if (input.length < 1 || input.length > 3) {
    return "Must be between 1 and 3 characters";
  }
  return true;
};

const questions = [
  {
    type: "input",
    name: "logoText",
    message: "What text do you want to use for the logo?",
    validate: logoTextValidation,
    },
    {
        type: "input",
        name: "logoTextColor",
        message: "What color do you want the logo text to be?",
        //TODO: validate color needs to be hex or a color string.
    },
    {
        type: "list",
        name: "logoShape",
        message: "What shape do you want the logo to be?",
        choices: ["circle", "square", "triangle"],
    },
    {
        type: "input",
        name: "logoBackgroundColor",
        message: "What color do you want the logo background to be?",
        //TODO: validate color needs to be hex or a color string.
    },
];

const init = () => { };

init();
