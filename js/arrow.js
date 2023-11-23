import { downloadFile } from "./helpers.js";

let isExsist = false;

export function handleDownloadClick(event) {
  if (event.target.dataset.type !== "download") {
    return;
  }

  !isExsist &&
    setTimeout(() => {
      createArrow();
      const arrow = document.querySelector(".shape-container");
      isExsist = !isExsist;
      setTimeout(() => {
        arrow.classList.add("visible"),
          arrow.addEventListener("click", () => toggleVisible(arrow));
      }, 10);
    }, 1500);

  const link = event.currentTarget.href;
  downloadFile(link);
}

function toggleVisible(arrow) {
  arrow.classList.toggle("visible");
  setTimeout(() => {
    arrow.remove();
    isExsist = !isExsist;
  }, 500);
}

function createArrow() {
  const arrowContent = `
    <div class="shape-container">
    <div class="square">
      <p class="main-text">Open</p>
      <p class="seconary-text">your download file</p>
    </div>
  </div>`;

  document.body.insertAdjacentHTML("beforeend", arrowContent);
}
