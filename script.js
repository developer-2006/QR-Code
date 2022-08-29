const generateBtn = document.querySelector("form button");
const qrCodeBox = document.querySelector(".qr-code");
const screenshotBox = document.querySelector(".screenshot");
const qrInput = document.querySelector("form input");
const qrImage = document.querySelector(".qr-code img");

const mouseclick = new Audio("/mouseclick.mp3");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) {
    return alert("متن یا آدرس وارد نکردی!");
  }
  mouseclick.play();
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImage.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    screenshotBox.classList.remove("hidden");
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    qrCodeBox.classList.add("hidden");
    screenshotBox.classList.add("hidden");
  }
});
