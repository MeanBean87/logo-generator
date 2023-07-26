const {colorValidation, logoTextValidation} = require("./validation.js");
// List of questions to be asked to the user by the inquirer package
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
  
module.exports = questions;