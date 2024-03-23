const { Menu } = require("electron");
// 创建菜单方法 窗口对象
const createMenu = (win) => {
  const menu = [
    {
      label: "菜单",
      submenu: [
        {
          label: "增加",
          click: () => {
            // 主进程向脚本发送消息
            win.webContents.send("test-ipc", 1);
          }
        }
      ]
    }
  ];
  // 先转译成模板再设置为应该用菜单
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
};

module.exports = {
  createMenu
};
