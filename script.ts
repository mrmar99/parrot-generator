const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

if (!ctx) {
  throw new Error("Не удалось получить контекст элемента Canvas");
}

const { width: W, height: H } = canvas;

function loadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;

    img.onload = () => resolve(img);
    img.onerror = (error) => reject(error);
  });
}

async function drawImageOnCanvas(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number
) {
  const bgImg = (await loadImage("bg2.jpg")) as CanvasImageSource;
  ctx.drawImage(bgImg, 0, 0, W, H);
}

drawImageOnCanvas(ctx, W, H)
  .then(() => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 100);
    ctx.stroke();
  })
  .catch((error) => {
    console.error(error);
  });
