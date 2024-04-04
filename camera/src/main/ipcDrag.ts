import { BrowserWindow, ipcMain } from 'electron'

ipcMain.handle('drag', (_event, opt: { x: number; y: number }) => {
  const win = BrowserWindow.fromWebContents(_event.sender)!
  const [x, y] = win.getPosition()
  return win.setPosition(x + opt.x, y + opt.y)
})
