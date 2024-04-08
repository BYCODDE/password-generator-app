const svg_button = document.getElementById("svg_button");
const main_span = document.getElementById("main_span");
const passwordInput = document.querySelector(".top_section input");
const zero = document.getElementById("zero");
const range = document.getElementById("myrange");
const checkbox = document.querySelectorAll('input[type="checkbox"]');
const strength_svg = document.getElementById("first");
const strength_svg2 = document.getElementById("second");
const strength_svg3 = document.getElementById("third");
const strength_svg4 = document.getElementById("fourth");
const Too_Weak = document.getElementById("TOO_WEAK");
const Weak = document.getElementById("WEAK");
const Medium = document.getElementById("MEDIUM");
const Strong = document.getElementById("STRONG");
console.log(Too_Weak, Weak, Medium, Strong);

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

let checkedCount = 0;
checkbox.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    checkedCount++;
    if (checkbox.checked && checkedCount === 4) {
      strength_svg.style.fill = " var(--Neon-Green, #A4FFAF)";
      strength_svg2.style.fill = " var(--Neon-Green, #A4FFAF)";
      strength_svg3.style.fill = " var(--Neon-Green, #A4FFAF)";
      strength_svg4.style.fill = " var(--Neon-Green, #A4FFAF)";
      Strong.style.display = "block";
      Medium.style.display = "none";
      Weak.style.display = "none";
      Too_Weak.style.display = "none";
    } else if (checkbox.checked && checkedCount === 3) {
      strength_svg.style.fill = " var(--3---Yellow, #F8CD65)";
      strength_svg2.style.fill = "var(--3---Yellow, #F8CD65)";
      strength_svg3.style.fill = "var(--3---Yellow, #F8CD65)";
      Medium.style.display = "block";
      Weak.style.display = "none";
      Too_Weak.style.display = "none";
      Strong.style.display = "none";
    } else if (checkbox.checked && checkedCount === 2) {
      strength_svg.style.fill = "var(--2---Orange, #FB7C58)";
      strength_svg2.style.fill = "var(--2---Orange, #FB7C58)";
      Weak.style.display = "block";
      Too_Weak.style.display = "none";
      Medium.style.display = "none";
      Strong.style.display = "none";
    } else if (checkbox.checked && checkedCount === 1) {
      strength_svg.style.fill = "var(--1---Red, #F64A4A)";
      Too_Weak.style.display = "block";
      Weak.style.display = "none";
      Medium.style.display = "none";
      Strong.style.display = "none";
    } else {
      strength_svg.style.fill = "none";
      strength_svg.style.fill = " none";
      strength_svg2.style.fill = " none";
      strength_svg3.style.fill = " none";
      strength_svg4.style.fill = " none";
      Too_Weak.style.display = "none";
      Weak.style.display = "none";
      Medium.style.display = "none";
      Strong.style.display = "none";
    }
    console.log(checkedCount);
  });
});

// else if(!checkbox.checked && checkedCount === 5){
//   strength_svg4.style.fill = " none";
//   checkedCount--
// console.log(checkedCount);

// }
// else if(!checkbox.checked && checkedCount === 4 && strength_svg4.style.fill === " none"){
//   strength_svg4.style.fill = " none";
//   strength_svg3.style.fill = " none";
//   checkedCount =checkedCount-2
// console.log(checkedCount);

// }
// console.log(checkedCount);
