import { Menu, Tray, shell } from 'electron'
import * as path from 'path'

// 创建托盘图标并实现退出功能
export const createIpcTry = () => {
  // 创建托盘图标
  const trayIcon = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin' ? '../../resources/mirror.png' : '../../resources/mirror.png'
    )
  )
  // 生成右键菜单
  const contextMenu = Menu.buildFromTemplate([
    { label: '退出', role: 'quit' },
    {
      label: 'mirror摄像头官网',
      click: () => {
        shell.openExternal('https://github.com/ReginYuan/electron-practice/tree/main/camera')
      }
    }
  ])
  // 设置托盘图标ico
  trayIcon.setToolTip('mirror摄像头')
  // 绑定右键菜单
  trayIcon.setContextMenu(contextMenu)
}
