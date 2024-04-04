import { ipcMain, Menu, app, MenuItemConstructorOptions } from 'electron'

// 创建ipcMain 实现推出功能
export const createIpcMain = () => {
  ipcMain.on('quit', () => {
    console.log('11111')
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
