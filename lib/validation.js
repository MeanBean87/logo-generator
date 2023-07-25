const { colorStrings } = require("./colors.js");

const colorValidation = (input) => {
  const colors = colorStrings.map((color) => color.toLowerCase());
    if (colors.includes(input.toLowerCase())) {
      return true;
    }
  
    if (/^#[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}$/.test(input)) {
      return true;
    }
  
    return "Must be a valid color string or hex code";
};
  
const logoTextValidation = (input) => {
    if (input.length < 1 || input.length > 3) {
      return "Must be between 1 and 3 characters";
    }
    return true;
};
  
module.exports = { colorValidation, logoTextValidation };