window.addEventListener("DOMContentLoaded", () => {
  //  选择图片
  const selectBtn = document.querySelector("#selectBtn");
  const container = document.querySelector("#container");
  selectBtn.addEventListener("click", async () => {
    const res = await window.api.selectFile();

    for (const item of res) {
      const input = document.createElement("input");
      input.value = item;
      input.type = "text";
      input.style = "margin-top:10px;border:2px solid green; padding:10px;";
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
    }
  });

  // 保存文件
  const saveBtn = document.querySelector("#saveBtn");
  saveBtn.addEventListener("click", () => {
    const textarea = document.querySelector("#textarea").value;
    window.api.saveFile(textarea);
  });
});
