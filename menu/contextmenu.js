const { ipcMain, app, Menu, BrowserWindow, shell } = require("electron");

ipcMain.on("mainPopMenu", (event) => {
  const template = [
    {
      label: "退出",
      click: () => {
        app.quit();
      }
    },
    {
      label: "访问官网",
      click: () => {
        shell.openExternal("https:www.baidu.com");
      }
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  // 弹出菜单
  menu.popup(BrowserWindow.fromWebContents(event.sender));
});
