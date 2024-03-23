const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const { createMenu } = require("./menu");
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
      nodeIntegration: true, //允许使用node.js的api
      contextIsolation: true // 启用沙盒隔离
    }
  });
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
  mainWindow.webContents.openDevTools();
  // 将主进程创建的视图窗口传递给菜单方法
  createMenu(mainWindow);
};

app.whenReady().then(() => {
  createWindow();
});

// 监听获取预加载脚本信息
ipcMain.on("saveFile", (event, content) => {
  console.log(content);
  // 向网页对象回复消息
  BrowserWindow.fromWebContents(event.sender).send(
    "saveFile-reply",
    "已经收到通知"
  );
});

// 监听文件选择并返回数据
ipcMain.handle("selectFile", async (event) => {
  const { filePaths } = await dialog.showOpenDialog({});
  return filePaths[0];
});

// 监听窗口标题改变方法
ipcMain.on("changeTitle", (event, value) => {
  BrowserWindow.fromWebContents(event.sender).title = value;
});
