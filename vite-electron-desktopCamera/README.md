# Vue 3 + TypeScript + Vite + electron

## 搭建 electron-vite-vue 项目

```javascript
// pnpm 创建项目
PS D:\Code\Electron\v2024> pnpm create vite
.../pnpm/.pnpm-store/v3/tmp/dlx-22180 | +1 +
.../pnpm/.pnpm-store/v3/tmp/dlx-22180 | Progress: resolved 1, reused 1, downloaded 0, added 1, done
√ Project name: ... vite-electron-desktopCamera
√ Package name: ... vite-electron-desktopcamera
√ Select a framework: » Vue
√ Select a variant: » TypeScript

Scaffolding project in D:\Code\Electron\v2024\vite-electron-desktopCamera...

Done. Now run:

cd vite-electron-desktopCamera
pnpm install
pnpm run dev
```

```javascript
// 安装electron
PS D:\Code\Electron\v2024>  cd vite-electron-desktopCamera
PS D:\Code\Electron\v2024\vite-electron-desktopCamera> pnpm  add electron -D
Packages: +74
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 158, reused 122, downloaded 1, added 74, done
node_modules/.pnpm/electron@29.1.0/node_modules/electron: Running postinstall script, done in 1.5s

devDependencies:
+ electron 29.1.0

Done in 4.5s
```

```javascript
// 安装 concurrently 同时管理多个应用
PS D:\Code\Electron\v2024\vite-electron-desktopCamera> pnpm add electron -D
Packages: +74
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 158, reused 122, downloaded 1, added 74, done
node_modules/.pnpm/electron@29.1.0/node_modules/electron: Running postinstall script, done in 1.5s

devDependencies:

- electron 29.1.0

Done in 4.5s
```

```javascript
// 新建 vite-electron-desktopCamera\electron\main.cjs
const { BrowserWindow, app } = require("electron");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    alwaysOnTop: true,
    x: 1000
  });
  win.loadURL("http://localhost:5173/");
  // win.loadFile("");
};
app.whenReady().then(() => {
  createWindow();
});
```

```json
// 在 package.json 配置启动和 electron 程序入口
{
  "name": "vite-electron-desktopcamera",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "main": "electron/main.cjs",
  "scripts": {
    "dev": "concurrently \"vite\" \"electron .\" ",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "concurrently": "^8.2.2",
    "vue": "^3.4.19"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.4",
    "electron": "^29.1.0",
    "typescript": "^5.2.2",
    "vite": "^5.1.4",
    "vue-tsc": "^1.8.27"
  }
}
```

```javascript
// 启动项目
PS D:\Code\Electron\v2024\vite-electron-desktopCamera> pnpm run dev

> vite-electron-desktopcamera@0.0.0 dev D:\Code\Electron\v2024\vite-electron-desktopCamera
> concurrently "vite" "electron ."

[1]
[0]
[0] VITE v5.1.5 ready in 467 ms
[0]
[0] ➜ Local: http://localhost:5173/
[0] ➜ Network: use --host to expose
```
