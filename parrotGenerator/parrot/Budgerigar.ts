import { Parrot } from "./Parrot.js";

export class Budgerigar extends Parrot {
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    super();

    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  drawRightSide() {
    // this.drawRightSideHead({ x: 270, y: 35 });
    const ctx = this.ctx;
    ctx.restore();
    this.drawRightSideHead({ x: 465, y: 25 });
  }

  private drawRightSideHead({ x, y }: { x: number, y: number }) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + 50, y - 45, x + 83, y - 10);
    ctx.quadraticCurveTo(x + 100, y, x + 100, y + 50);
    ctx.quadraticCurveTo(x + 110, y + 140, x + 75, y + 135);
    ctx.quadraticCurveTo(x - 30, y + 130, x - 25, y + 80);
    ctx.quadraticCurveTo(x - 20, y + 30, x, y);
    ctx.stroke();
  }

  drawFront() {}
}