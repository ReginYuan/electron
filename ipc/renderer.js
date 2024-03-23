// 渲染进程
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    // 调用渲染进程中的api方法，此方法是在preload.js脚本中被定义
    window.api.saveFile();
  });

  // 上传文件操作
  const upload = document.querySelector("#upload");
  upload.addEventListener("click", () => {
    // 调用渲染进程中的api方法，此方法是在preload.js脚本中被定义
    window.api.uploadFile((file) => {
      document.querySelector("input").value = file;
    });
  });

  // 改变标题操作
  const inputTitle = document.querySelector("#inputTitle");
  const btnTitle = document.querySelector("#changeTitle");
  btnTitle.addEventListener("click", () => {
    window.api.changeTitle(inputTitle.value);
  });
  console.log("api", window.api);
});

// 监听渲染进程中的api方法,并进行dom操作
window.api.counter((value) => {
  const counter = document.querySelector("#counter");
  counter.innerHTML = Number(counter.textContent) + value;
});
