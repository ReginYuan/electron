const { Menu, dialog, app, shell } = require("electron");
const createMenu = () => {
  const template = [
    {
      label: app.name,
      submenu: [
        {
          label: "访问官网",
          click: async () => {
            const res = await dialog.showMessageBox({
              title: "是否访问官网？",
              message: "确定要访问官网吗?",
              buttons: ["取消", "确定"],
              cancelId: 1,
              checkboxLabel: "记住我的选择",
              checkboxChecked: true
            });
            if (!res.checkboxChecked) {
              return dialog.showErrorBox("提示", "你没确认复选框?");
            }
            if (res.response === 1) {
              shell.openExternal("https://www.electronjs.org/");
            }
          }
        },
        {
          label: "退出",
          click: async () => {
            const res = await dialog.showMessageBox({
              title: "退出程序",
              message: "确定要退出吗?",
              buttons: ["取消", "确定"]
            });
            if (res.response === 1) {
              app.quit();
            }
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

module.exports = {
  createMenu
};
