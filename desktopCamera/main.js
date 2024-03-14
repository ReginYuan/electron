const { BrowserWindow, app } = require("electron"); //获取窗口模块
const path = require("path");
// 创建窗口
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true, //窗口置顶
    frame: false, //设置无边框
    transparent: true //窗口透明度
    // x: 1500,
    // y: 100
  });
  // 缩放比例
  mainWindow.setAspectRatio(1);
  // 加载index.html文件
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
  // 调起后台
  // mainWindow.webContents.toggleDevTools();
};

app.whenReady().then(() => {
  createWindow();
});

// 窗口退出
app.on("window-all-closed", () => {
  // 如果不是苹果用就直接退出
  if (process.platform != "darwin") app.quit();
});

// 点击图标再次打开
app.on("activate", () => {
  createWindow();
});
