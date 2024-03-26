const { app, BrowserWindow } = require("electron");
const path = require("path");
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800
  });
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
};

app.whenReady().then(() => {
  createWindow();
});
