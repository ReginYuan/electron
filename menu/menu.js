const { app, Menu, shell, BrowserWindow } = require("electron");
const isWin = process.platform === "win32";

// 创建菜单
const createMenu = (win) => {
  const config = [
    ...(isWin
      ? [
          {
            label: app.name,
            submenu: [
              {
                label: "访问网站",
                click: () => {
                  shell.openExternal("https://www.baidu.com");
                },
                accelerator: "ctrl+E"
              },
              {
                label: "渲染进程事件",
                click: () => {
                  // 向渲染进程发送事件
                  win.webContents.send("toPreload", "我最帅");
                }
              }
            ]
          }
        ]
      : []),
    {
      label: "操作",
      submenu: [
        {
          label: "打开窗口",
          click: () => {
            new BrowserWindow({
              width: 300,
              height: 300
            });
          },
          accelerator: "ctrl+N"
        },
        {
          label: "退出",
          click: () => {
            isWin ? app.quit() : app.exit();
          },
          role: isWin ? "close" : "quit"
        },
        {
          type: "separator"
        }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(config));
};

module.exports = {
  createMenu
};
