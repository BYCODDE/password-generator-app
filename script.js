const svg_button = document.getElementById("svg_button");
const main_span = document.getElementById("main_span");
const passwordInput = document.querySelector(".top_section input");
const zero = document.getElementById("zero");
const range = document.getElementById("myrange");
console.log(range.value);

svg_button.addEventListener("click", function () {
  if (passwordInput.value.length > 0) {
    main_span.style.display = "block";
  } else {
    main_span.style.display = "none";
  }
});

range.addEventListener("input", function () {
  zero.textContent = range.value;
});



