const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

const { width: W, height: H } = canvas;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;

    img.onload = () => resolve(img);
    img.onerror = (error) => reject(error);
  });
}

async function drawImageOnCanvas(ctx, W, H) {
  const bgImg = await loadImage("bg.jpg");
  // const { width: imgW, height: imgH } = bgImg;
  ctx.drawImage(bgImg, 0, 0);
}

drawImageOnCanvas(ctx, W, H)
  .then(() => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 100);
    ctx.stroke();
  })
  .catch((error) => {
    console.error(error)
  });
