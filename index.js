const inquirer = require("inquirer");
const fs =  require("fs");
const convert = require("color-convert");
// jest.mock("fs");

// This function validates if the logoText input is between 1 and 3 characters
const logoTextValidation = (input) => {
  if (input.length < 1 || input.length > 3) {
    return "Must be between 1 and 3 characters";
  }
  return true;
};

// This function validates if the input is a valid color string or hex code
const colorValidation = (input) => {
  const colorStrings = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "black",
    "white",
  ];

  if (colorStrings.includes(input.toLowerCase())) {
    return true;
  }

  if (/^#[A-Fa-f0-9]{6}|[A-fa-f0-9]{3}$/.test(input)) {
    return true;
  }

  return "Must be a valid color string or hex code";
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
    validate: colorValidation,
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
    validate: colorValidation,
  },
];

const init = async () => {
  fs.writeFile("logo.svg", await inquirer.prompt(questions), (err) ? console.log(err) : console.log("Success!"));
};

init();
