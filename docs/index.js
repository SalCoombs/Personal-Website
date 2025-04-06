let hello = 1;

for (i = 0; i < 10; i++) {
  hello += i;
}

document.addEventListener(onclick, () => {
  alert("Button clicked. Your number is: " + hello);
});

const game_input = document.getElementById("game-input");
const game_text = document.getElementById("game-text");

game_input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    game_text.textContent = game_input.value;
    console.log("Hi");
  }
});
