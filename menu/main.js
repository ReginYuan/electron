const { app, BrowserWindow } = require("electron");
const { createWindow } = require("./window");
const { createMenu } = require("./menu");
require("./contextmenu");
app.whenReady().then(() => {
  const win = createWindow();
  // 传递已经创建的窗口
  createMenu(win);
});

//窗口关闭事件,如果不是mac系统，则退出应用
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// macOs下，如果没有窗口，则创建窗口
app.on("activate", () => {
  if (
    BrowserWindow.getAllWindows().length == 0 &&
    process.platform == "darwin"
  ) {
    createWindow();
  }
});
