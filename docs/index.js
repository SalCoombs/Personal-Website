let hello = 1;

for (i = 0; i < 10; i++) {
  hello += i;
}

document.addEventListener(onclick, () => {
  alert("Button clicked. Your number is: " + hello);
});
