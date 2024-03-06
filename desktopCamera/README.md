# desktopCamera

桌面摄像头项目

## 安装 electron

```javascript
 pnpm  add -D electron
```

## 修改主进程入口 文件路径: desktopCamera\package.json

```javascript
{
  "name": "desktopCamera",
  "version": "1.0.0",
  "description": "",
  "main": "main.js", //主程序的入口
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^29.1.0"
  }
}
```

## 创建 main.js 文件

```javascript
const { BrowserWindow } = require("electron"); //获取窗口模块
```

## 配置启动命令： pnpm run dev

```javascript
{
  "name": "desktopCamera",
  "version": "1.0.0",
  "description": "",
  "main": "main.js", //主程序的入口
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"electron ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^29.1.0"
  }
}
```

## 主进程与渲染进程的区别

主进程是没有 dom 的
渲染进程是有 dom 的

```html
新建index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>摄像头录屏软件</title>
  </head>
  <body></body>
</html>
```

```javascript
在主进程入口中加载index.html 文件
const { BrowserWindow, app } = require("electron"); //获取窗口模块
const path = require("path");
// 创建窗口
app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    alwaysOnTop: true //窗口置顶
    // x: 1500,
    // y: 100
  });
  // 加载index.html文件
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
  // 调起后台
  // mainWindow.webContents.toggleDevTools();
});
```

## 安装 nodemon 自动刷新应用

```javascript
pnpm add nodemon -g
```

## 配置 nodemon 文件: nodemon.json

```javascript
{
  "ignore": ["node_modules", "dist"],
  "colours": true,
  "verbose": true,
  "restartable": "rs",
  "watch": ["*.*"],
  "ext": "html,js"
}
```
