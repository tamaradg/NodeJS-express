const fs = require("fs/promises");
fs.readFile("./note.txt", "utf-8")
  .then((content) => {
    console.log(content);
  })
  .catch((error) => {
    console.log(error);
  });
