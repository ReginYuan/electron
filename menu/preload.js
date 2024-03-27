const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  menuEvent: (callback) => {
    ipcRenderer.on("toPreload", (event, value) => {
      callback(value);
    });
  }
});

// 监听右键菜单事件
window.addEventListener("contextmenu", () => {
  ipcRenderer.send("mainPopMenu");
});
