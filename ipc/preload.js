// 脚本文件，在渲染进程中执行，用于提供ipc通信接口访问主进程中的数据。
const fs = require("fs");
const { ipcRenderer, contextBridge } = require("electron");

// 读取本地数据
const content = fs.readFileSync("package.json", "utf-8");

//定义一个接口,在渲染进程中调用
contextBridge.exposeInMainWorld("api", {
  name: "袁修飞",
  saveFile: () => {
    // 向主进程发送数据
    ipcRenderer.send("saveFile", content);
  },
  counter: (callback) => {
    // 监听主进程的消息并传递信息
    ipcRenderer.on("test-ipc", (event, value) => {
      callback(value);
    });
  },
  uploadFile: async (callback) => {
    // 向主进程发送数据
    const file = await ipcRenderer.invoke("selectFile");
    callback(file);
  },
  changeTitle: (newTitle) => {
    // 向主进程发送数据
    ipcRenderer.send("changeTitle", newTitle);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  for (const app of ["chrome", "electron", "node"]) {
    const el = document.querySelector(`#${app}`);
    el.innerHTML = `${app}:${process.versions[app]}`;
  }
});

// 接受主进程发送的消息
ipcRenderer.on("saveFile-reply", (event, arg) => {
  console.log(arg);
});
