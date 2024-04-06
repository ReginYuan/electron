import { ipcMain, Menu, app, MenuItemConstructorOptions } from 'electron'

// 创建ipcMain 实现退出功能
export const createIpcQuit = () => {
  ipcMain.on('quit', () => {
    const template = [
      {
        label: '退出',
        click: () => {
          app.quit()
        }
      }
    ] as MenuItemConstructorOptions[]
    // 创建菜单
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    // 弹出菜单
    menu.popup()
  })
}
