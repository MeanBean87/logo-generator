const fs = require("fs");

// This function is used to write the logo to a file
const writeLogo = (logo) => {
    fs.writeFile("logo.svg", logo, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("********* Generated logo.svg *********");
    });
};
  
module.exports = writeLogo;