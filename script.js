const svg_button = document.getElementById("svg_button");
const main_span = document.getElementById("main_span");
const passwordInput = document.querySelector(".top_section input");
const zero = document.getElementById("zero");
const range = document.getElementById("myrange");
const checkbox = document.querySelectorAll('input[type="checkbox"]');
const strength_svg = document.getElementById("first");
const strength_svg2 = document.getElementById("second");
const strength_svg3 = document.getElementById("third");
const strength_svg4= document.getElementById("fourth");
console.log(checkbox,strength_svg2,strength_svg3,strength_svg4);
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

range.addEventListener("input", function () {
  let x = this.value;
  let colorStop = (x / (this.max - this.min)) * 100 + "%";
  let gradient = `linear-gradient(to right, var(--Neon-Green, #A4FFAF) 0%, var(--Neon-Green, #A4FFAF) ${colorStop}, var(--Very-Dark-Grey, #18171F)
 ${colorStop}, var(--Very-Dark-Grey, #18171F)
 100%)`;
  range.style.background = gradient;
});

checkbox.forEach((checkbox) => {
  console.log(checkbox);
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      strength_svg.style.fill = "red";
    } else {
      strength_svg.style.fill = "none";
    }
  });
});
