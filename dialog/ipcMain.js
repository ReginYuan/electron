const { ipcMain, dialog } = require("electron");
const fs = require("fs");
const createIpcMain = () => {
  // 选择文件
  ipcMain.handle("selectFileMain", async (event, arg) => {
    const { filePaths } = await dialog.showOpenDialog({
      title: "选择文件",
      properties: ["openFile", "multiSelections"],
      filters: [
        {
          name: "image",
          extensions: ["jpg", "png", "gif"]
        }
      ]
    });
    return filePaths;
  });
  // 保存文件
  ipcMain.on("saveFileMain", async (event, value) => {
    const { filePath } = await dialog.showSaveDialog({
      title: "保存文件"
    });
    fs.writeFileSync(filePath, value);
  });
};

module.exports = {
  createIpcMain
};
