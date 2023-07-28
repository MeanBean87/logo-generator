const fs = require("fs");
const writeLogo = require("./writeLogo");

jest.mock("fs", () => ({ writeFile: jest.fn() }));
describe("makes an svg logo", () => {
  test("should write data to a file", () => {
    const data = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="0" width="200" height="200" fill="red" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>
            </svg>`;

    writeLogo(data);

    expect(fs.writeFile).toHaveBeenCalledWith(
      "logo.svg",
      data,
      expect.any(Function)
    );
  });
});
