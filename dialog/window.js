const { app, BrowserWindow, shell } = require("electron");
const path = require("path");
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
      nodeIntegration: true
    }
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
  return mainWindow;
};

module.exports = {
  createWindow
};
