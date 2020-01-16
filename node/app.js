const fs = require("fs");
const path = require("path");

const array = [
  { name: "chirp1" },
  { name: "chirp2" },
  { name: "chirp3" },
  { name: "chirp4" },
  { name: "chirp5" }
];
let data = JSON.stringify(array);

fs.writeFileSync("chirps.json", data);

fs.readFile("chirps.json", (err, data) => {
  if (err) console.log(err);

  console.log(JSON.parse(data));
});
