"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("Не удалось получить контекст элемента Canvas");
}
const { width: W, height: H } = canvas;
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (error) => reject(error);
    });
}
function drawImageOnCanvas(ctx, W, H) {
    return __awaiter(this, void 0, void 0, function* () {
        const bgImg = (yield loadImage("bg2.jpg"));
        ctx.drawImage(bgImg, 0, 0, W, H);
    });
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
