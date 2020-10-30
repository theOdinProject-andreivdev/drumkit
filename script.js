const keys = document.querySelectorAll("button.key");

const boom = new Audio("sounds/boom.wav");
const clap = new Audio("sounds/clap.wav");
const hihat = new Audio("sounds/hihat.wav");
const kick = new Audio("sounds/kick.wav");
const snare = new Audio("sounds/snare.wav");
const tom = new Audio("sounds/tom.wav");

keys.forEach(function (key) {
  key.addEventListener("click", function (e) {
    switch (key.textContent) {
      case "boom":
        boom.play();
        break;
      case "clap":
        clap.play();
        break;
      case "hihat":
        hihat.play();
        break;
      case "kick":
        kick.play();
        break;
      case "snare":
        snare.play();
        break;
      case "tom":
        tom.play();
        break;
    }
  });
});
