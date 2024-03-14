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

```javascript
//新建render.js;
console.log("渲染进程");
alert("渲染进程");
```

```html
<!-- 新建index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./render.js"></script>
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

## 不同操作系统的不同操作

```javascript
const { BrowserWindow, app } = require("electron"); //获取窗口模块
const path = require("path");
// 创建窗口
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1500,
    height: 500,
    alwaysOnTop: true //窗口置顶
    // x: 1500,
    // y: 100
  });
  // 加载index.html文件
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
  // 调起后台
  // mainWindow.webContents.toggleDevTools();
};

app.whenReady().then(() => {
  createWindow();
});

// 窗口退出
app.on("window-all-closed", () => {
  // 如果不是苹果用就直接退出
  if (process.platform != "darwin") app.quit();
});

// 点击图标再次打开
app.on("activate", () => {
  createWindow();
});
```

## 用 css 修改渲染进程

```css
/* 新建style.css */
* {
  padding: 0;
  margin: 0;
}

body {
  width: 100vw;
  height: 100vh;
}

/* 可以拖拽 */
html {
  -webkit-app-region: drag;
}

textarea {
  -webkit-app-region: no-drag;
}

h1 {
  height: 100vh;
  background-color: greenyellow;
  border-radius: 50%;
  overflow: hidden;
}
```

```html
<!-- 在index.html中引入 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./render.js"></script>
    <link rel="stylesheet" href="./style.css" />
    <title>摄像头录屏软件</title>
  </head>
  <body>
    <h1>袁修飞</h1>
  </body>
</html>
```

```json
// desktopCamera\nodemon.json 添加检测 css 修改也刷新应用
{
  "ignore": ["node_modules", "dist"],
  "colours": true,
  "verbose": true,
  "restartable": "rs",
  "watch": ["*.*"],
  "ext": "html,js,css"
}
```

```javascript
// desktopCamera\main.js 修改主进程中的窗口设置
const { BrowserWindow, app } = require("electron"); //获取窗口模块
const path = require("path");
// 创建窗口
const createWindow = () => {
const mainWindow = new BrowserWindow({
width: 300,
height: 300,
alwaysOnTop: true, //窗口置顶
frame: false, //设置无边框
transparent: true //窗口透明度
// x: 1500,
// y: 100
});
// 缩放比例
mainWindow.setAspectRatio(1);
// 加载 index.html 文件
mainWindow.loadFile(path.resolve(\_\_dirname, "index.html"));
// 调起后台
// mainWindow.webContents.toggleDevTools();
};

app.whenReady().then(() => {
createWindow();
});

// 窗口退出
app.on("window-all-closed", () => {
// 如果不是苹果用就直接退出
if (process.platform != "darwin") app.quit();
});

// 点击图标再次打开
app.on("activate", () => {
createWindow();
});
```

## 调试配置 .vscode\launch.json

```json
//调试配置文件地址: https://github.com/microsoft/vscode-recipes/tree/main/Electron
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Electron: Main",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "runtimeArgs": ["--remote-debugging-port=9223", "."],
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      }
    },
    {
      "name": "Electron: Renderer",
      "type": "chrome",
      "request": "attach",
      "port": 9223,
      "webRoot": "${workspaceFolder}",
      "timeout": 30000
    }
  ],
  "compounds": [
    {
      "name": "Electron: All",
      "configurations": ["Electron: Main", "Electron: Renderer"]
    }
  ]
}
```
