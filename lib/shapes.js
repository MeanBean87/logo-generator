class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
}

class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }

  render() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,50 250,150 50,150" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

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