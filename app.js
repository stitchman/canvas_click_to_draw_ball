import { Ball } from "./ball.js";
import { Palette } from "./palette.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.balls = [];
    this.palette = new Palette();
    this.palette.draw();

    document.addEventListener("click", (e) => {
      this.balls.push(
        new Ball(
          e.offsetX,
          e.offsetY,
          Math.random() * 100 + 20,
          this.palette.curColorArray[
            Math.floor(Math.random() * this.palette.curColorArray.length)
          ]
        )
      );
    });

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.balls.forEach((ball) => {
      ball.draw(this.ctx);
    });
  }
}

window.onload = () => {
  new App();
};
