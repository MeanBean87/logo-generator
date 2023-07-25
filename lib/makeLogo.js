const { Circle, Square, Triangle } = require("./shapes.js");

const makeLogo = (response) => {
    if (response.logoShape === "circle") {
      return new Circle(
        response.logoBackgroundColor,
        response.logoText,
        response.logoTextColor
      ).render();
    }
  
    if (response.logoShape === "square") {
      return new Square(
        response.logoBackgroundColor,
        response.logoText,
        response.logoTextColor
      ).render();
    }
  
    if (response.logoShape === "triangle") {
      return new Triangle(
        response.logoBackgroundColor,
        response.logoText,
        response.logoTextColor
      ).render();
    }
};

module.exports = { makeLogo };
  
