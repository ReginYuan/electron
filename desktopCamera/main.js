const { BrowserWindow, app } = require("electron"); //获取窗口模块
const path = require("path");
// 创建窗口
app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 1500,
    height: 500,
    alwaysOnTop: true //窗口置顶
    // x: 1500,
    // y: 100
  });
  // 加载index.html文件
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
  // 调起后台
  // mainWindow.webContents.toggleDevTools();
});
