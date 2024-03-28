const { app, BrowserWindow, shell } = require("electron");
const { createWindow } = require("./window");
const { createMenu } = require("./menu");
const { createIpcMain } = require("./ipcMain");
app.whenReady().then(() => {
  const win = createWindow();
  createMenu();
  createIpcMain();
  // 外部链接打开设置
  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    // 控制是electron打开窗口
    return { action: "allow" };
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
