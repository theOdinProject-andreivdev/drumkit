const keys = document.querySelectorAll(`.key`);

window.addEventListener("keydown", playSoundKeypress);

keys.forEach((key) => {
  key.addEventListener("click", playSoundClick);
  key.addEventListener("touchstart", playSoundClick);
  key.addEventListener("transitionend", removeTransition);
});

function playSoundKeypress(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

function playSoundClick(e) {
  e.preventDefault();
  const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
  const key = document.querySelector(`.key[data-key="${this.dataset.key}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName != "transform") return;

  this.classList.remove("playing");
}
