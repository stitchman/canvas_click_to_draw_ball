export class Palette {
  constructor() {
    const red = ["#c92a2a", "#e03131", "#f03e3e", "#fa5252", "#ff6b6b"];
    const yellow = ["#fcc419", "#ffd43b", "#ffe066", "#ffec99", "#fff3bf"];
    const blue = ["#1864ab", "#1971c2", "#1c7ed6", "#228be6", "#339af0"];
    const black = ["#212529", "#343a40", "#495057", "#868e96", "#adb5bd"];
    const white = ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#dee2e6"];

    this.colors = [black, white, red, yellow, blue];

    this.buttonSize = "30px";

    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.curColorArray = this.colors[randomIndex];
  }

  draw() {
    this.colors.forEach((colorArray, index) => {
      const button = document.createElement("button");
      button.style.backgroundColor = colorArray[0];
      button.style.width = this.buttonSize;
      button.style.height = this.buttonSize;
      button.style.borderRadius = this.buttonSize;
      button.style.margin = "5px";

      button.addEventListener("click", (e) => {
        e.stopPropagation();
        this.curColorArray = this.colors[index];
      });

      const palette = document.body.querySelector("#palette");
      palette.appendChild(button);
    });
  }
}
