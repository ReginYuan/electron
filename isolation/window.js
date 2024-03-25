const { app, BrowserWindow, screen } = require("electron");
const path = require("path");
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    // center: true, //窗口剧中
    // fullscreen: true, //软件全屏
    webPreferences: {
      // nodeIntegration: true, //开启nodejs集成,默认关闭沙盒模式
      // contextIsolation: false, //关闭进程隔离
      // sandbox: true, //开启沙盒模式,预加载脚本中使用node模块
      preload: path.resolve(__dirname, "preload.js")
    }
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
};

module.exports = {
  createWindow
};
