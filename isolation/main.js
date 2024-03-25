const { app, ipcMain, screen, BrowserWindow } = require("electron");
const { createWindow } = require("./window");
app.whenReady().then(() => {
  createWindow();
});

ipcMain.on("mainEvent", (event, value) => {
  console.log(33333);
});

ipcMain.on("changWindowEvent", (event, value) => {
  console.log(value);
  // 获取当前窗口
  const win = BrowserWindow.fromWebContents(event.sender);
  // 获取当前窗口的大小
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  // 计算窗口位置
  const x = width / 2 - value.width / 2;
  const y = height / 2 - value.height / 2;
  // 设置窗口大小
  win.setBounds({ ...value, x, y }, true); //是指窗口大小并动画效果过渡
});
