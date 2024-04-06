import { BrowserWindow, ipcMain } from 'electron'

// 获取当前窗口
const getWin = (event: Electron.IpcMainEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}

ipcMain.on(
  'setWindowSize',
  (event, opt: { aspectRatio: number; width?: number; height?: number }) => {
    const win = getWin(event)
    win.setAspectRatio(opt.aspectRatio)
    win.setBounds({ width: opt.width, height: opt.height })
  }
)
