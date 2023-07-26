const fs = require("fs");
const writeLogo = require("./writeLogo");

// Mock fs.writeFile to prevent writing to the file system
jest.mock("fs", () => ({
  writeFile: jest.fn((path, data, callback) => {
    callback("********* Generated logo.svg *********");
  }),
}));

//Test for the write logo function to make sure it calls fs.writeFile and logs a success message
describe("writeLogo", () => {
  test("should call fs.writeFile and log a success message", () => {
    const mockConsoleLog = jest.spyOn(console, "log");

    const logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="0" width="200" height="200" fill="red" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>
    </svg>`;

    writeLogo(logo);

    expect(fs.writeFile).toHaveBeenCalledWith(
      "logo.svg",
      logo,
      expect.any(Function)
    );

    expect(mockConsoleLog).toHaveBeenCalledWith(
      "********* Generated logo.svg *********"
    );

    mockConsoleLog.mockRestore();
  });
});
