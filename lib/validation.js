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
  
const logoTextValidation = (input) => {
    if (input.length < 1 || input.length > 3) {
      return "Must be between 1 and 3 characters";
    }
    return true;
};
  
module.exports = { colorValidation, logoTextValidation };