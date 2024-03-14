const { BrowserWindow, app } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    alwaysOnTop: true,
    x: 1000
  });
  win.loadURL("http://localhost:5173/");
  // win.loadFile("");
};

app.whenReady().then(() => {
  createWindow();
});
