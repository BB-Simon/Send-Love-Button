const loveButtons = document.querySelectorAll(".love");

loveButtons.forEach(loveButton => {
  loveButton.addEventListener("mousedown", e => {
    loveButton.style.background = "#fff";
    loveButton.style.color = "#e7273f";
    loveButton.querySelector(".text").innerHTML =
      '<span class="gray-text">Sent to</span>Simon';
    createHearts(loveButton.querySelector(".icon-container"));
  });
  loveButton.addEventListener("mouseup", e => {
    loveButton.style.background = "#e7273f";
    loveButton.style.color = "#fff";
    loveButton.querySelector(".text").innerHTML =
      'THANK YOU! <i class="fas fa-redo"></i>';
  });
});

function createHearts(container) {
  // create 5 hearts
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.classList.add("heart");
      heart.innerHTML = '<i class="fas fa-heart"></i>';
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.fontSize = Math.random() * 20 + 5 + "px";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      container.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 3000);
    }, i * 100);
  }
}
console.log(Math.random() * 20 + 5 + "%");
