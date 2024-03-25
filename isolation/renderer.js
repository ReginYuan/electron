window.addEventListener("DOMContentLoaded", () => {
  const ipcButton = document.querySelector("#ipcButton");
  ipcButton.addEventListener("click", () => {
    window.api.toMain();
  });

  const changWindowButton = document.querySelector("#changWindowButton");
  changWindowButton.addEventListener("click", () => {
    const width = Number(document.querySelector('[name = "width"]').value);
    const height = Number(document.querySelector('[name = "height"]').value);
    console.log(width, height);
    const args = {
      width: width,
      height: height
    };
    window.api.changWindow(args);
  });
});
// const fs = require("fs");
// fs.writeFileSync("./data1.txt", "./renderer.js");
