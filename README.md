# Logoenerator

## Description

This application generates "logo" svgs based on the users inputs. Currently the application allows for 3 shapes "Circle", "Square, and "Triangle" with 1-3 letters. It accepts all basic CSS color string values as well as hex values. It offers data validation to insure the user is entering valid hex and color string values. The application includes a test suite custom build using "Jest.js".

This application requires "Node.js", "Jest.js" installation as well as "inquirer.js" installation.

Node can be installed directly from [https://nodejs.org/en](https://nodejs.org/en).

Inquirer.js can be installed once in the root directory via NPM with the CLI command "npm i inquirer" or just simply by using "npm install" [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)

Jest.js can be installed once in the root directory via NPM with the CLI command "npm install --save-dev jest" or just simply by using "npm install" [https://jestjs.io/](https://jestjs.io/)

This was a project during the Full Stack Web Development Bootcamp at UC Berkeley Ext.

#### Example photos:

[![Example One](./examples/example-one.svg)](./examples/example-one.svg)
[![Example Two](./examples/example-two.svg)](./examples/example-two.svg)
[![Example Three](./examples/example-three.svg)](./examples/example-three.svg)

## Installation

1. Clone the repository using "git clone git@github.com:MeanBean87/logo-generator.git"
2. Navigate to the root directory of the project using CLI.
3. Install node modules using "npm install"
4. Video walkthrough of installation can be found [here](https://drive.google.com/file/d/110NqHskqjoa6WaO4SMr7QOFR8tiJ-se3/view). or at URL: [https://drive.google.com/file/d/1uc42Uf1VRRS1AzRkezTrEXJmjrmckzsu/view](https://drive.google.com/file/d/110NqHskqjoa6WaO4SMr7QOFR8tiJ-se3/view).

## Usage

1. After following the installation guide, type "node index.js".
2. Answer the prompts.
3. Once the final prompt is answered you will get a message indicating if it was successful or not.
4. There will be a new file in the root directory named "logo.svg"
5. Copy the file to your desired location.

Photo of CLI Prompts:

![1690298286675](image/README/1690298286675.png)

## Code Highlights

Snippet of one of the test routines.

```
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
```

## Learning Points

During the development of this project I learned how to use and create classes, as well as using jest for unit testing. 

## Testing

This application uses jest to perform a slew of custom made tests to validate the correct output is being generated.

These tests include a test for data validation from the CLI, logical conditions for the makeLogo function as well as output from render().

Steps:

1. Clone the repository using "git clone git@github.com:MeanBean87/logo-generator.git"
2. Once inside of the command line use "npm install" to install the dependencies.
3. After the dependencies have installed without errors, from the command line enter "npm test".
4. This will begin the Jest suite, and the results will be provided in the command line.

#### Photo of successful test:
![1690298464631](image/README/1690298464631.png)

## Badges

[![JavaScript](https://camo.githubusercontent.com/ea2f99f5d7192e51a97ada05caf07edfaaba32e10597ce09641ecda7f646ad71/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4553362d79656c6c6f77)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Node.js](https://camo.githubusercontent.com/ddeeafd8e4daa455daeddc37c784f4b08ceb4fd823ef8d32ca1e2f4a24ddfeff/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d7631382e31362e302d677265656e)](https://nodejs.org/) [![Inquirer.js](https://camo.githubusercontent.com/215700b19c8419cbe0090ad41f57d7612a220f446be41b2d3b8445261af6e52e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f496e7175697265722e6a732d76392e322e382d626c7565)](https://www.npmjs.com/package/inquirer) [![Git](https://camo.githubusercontent.com/69449dd4f4b5044060f8b5a93161f4fb767bf9b92eb72f7a6ba3735f181c414c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d76322e34312e302d6f72616e6765)](https://git-scm.com/) [![GitHub](https://camo.githubusercontent.com/b0a1cf10d2df60c99a33a2939b445b73224f777453a148438a8be8d5f5944a6a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d4d65616e4265616e38372d6c6967687467726579)](https://github.com/MeanBean87) [![Jest](https://img.shields.io/badge/tested%20with-jest-%23C21325?logo=jest)](https://jestjs.io/)


## Author / Collaberators

Michael Mattingly

* [GitHub](https://github.com/MeanBean87)
* [LinkedIn](https://www.linkedin.com/in/michael-mattingly-5580b1280/)

This project was created with source code provided from UC Berkeley Extension.

## License

This project is licensed under the [MIT License](https://github.com/MeanBean87/readme-generator/blob/main/LICENSE). Please refer to the LICENSE file for more details.
