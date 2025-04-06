const game_input = document.getElementById("game-input");
const game_text = document.getElementById("game-text");

game_input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    game_text.textContent = game_input.value;
    console.log("Hi");
  }
});
