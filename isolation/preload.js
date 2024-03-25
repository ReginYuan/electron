const { contextBridge, ipcRenderer, ipcMain } = require("electron");
// const fs = require("fs");

//定义一个接口,在渲染进程中调用
contextBridge.exposeInMainWorld("api", {
  name: "袁修飞",
  toMain: () => {
    // 向主进程发送数据
    ipcRenderer.send("mainEvent");
  },
  changWindow: (value) => {
    ipcRenderer.send("changWindowEvent", value);
  }
});

// fs.writeFileSync("./data.txt", "hello World");
