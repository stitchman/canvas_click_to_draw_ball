export class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.color = color;
    this.maxRadius = radius;
  }

  draw(ctx) {
    if (this.radius < this.maxRadius) {
      this.radius += this.maxRadius / 20;
    }

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = 0.5;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}
