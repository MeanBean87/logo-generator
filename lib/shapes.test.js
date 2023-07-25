//Shapes Jest Needed expect svg render to = 300x200; with jest
//fsWriteFile Needed mock
//inquirer.jest mock
//validation jest needed
//expect svg render to = 300x200; with jest verify size of svg. #.Not

const { Circle, Square, Triangle } = require("./shapes.js");

describe("Circle", () => {
  test("Circle should render a circle", () => {
    const color = "red";
    const text = "ABC";
    const textColor = "blue";

    const circle = new Circle(color, text, textColor);

    const expected =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="red" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>
    </svg>`;

    expect(circle.render()).toBe(expected);
  });
});

describe("Square", () => {
  test("Square should render a square", () => {
    const color = "red";
    const text = "ABC";
    const textColor = "blue";

    const square = new Square(color, text, textColor);

    const expected =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="0" width="200" height="200" fill="red" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>
    </svg>`;

    expect(square.render()).toBe(expected);
  });
});

describe("Triangle", () => {
  test("Triangle should render a triangle", () => {
    const color = "red";
    const text = "ABC";
    const textColor = "blue";

    const triangle = new Triangle(color, text, textColor);

    const expected =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="red" />
    <text x="150" y="165" font-size="60" text-anchor="middle" fill="blue">ABC</text>
    </svg>`;

    expect(triangle.render()).toEqual(expected);
  });
});

