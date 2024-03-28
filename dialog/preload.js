const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  selectFile: () => {
    return ipcRenderer.invoke("selectFileMain");
  },
  saveFile: (value) => {
    ipcRenderer.send("saveFileMain", value);
  }
});
