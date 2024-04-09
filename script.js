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
const main_button = document.getElementById("main_button");
const first_input = document.getElementById("first_input");
const second_input = document.getElementById("second_input");
const third_input = document.getElementById("third_input");
const fourth_input = document.getElementById("fourth_input");
console.log(first_input, second_input, third_input, fourth_input);

svg_button.addEventListener("click", function () {
  if (passwordInput && passwordInput.value.length > 0) {
    main_span.style.display = "block";
    passwordInput.select();
    document.execCommand("copy");
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

main_button.addEventListener("click", function () {
  let length = zero.textContent;
  if (
    first_input.checked &&
    second_input.checked &&
    third_input.checked &&
    fourth_input.checked &&
    length !== "0"
  ) {
    strength_svg.style.fill = " var(--Neon-Green, #A4FFAF)";
    strength_svg2.style.fill = " var(--Neon-Green, #A4FFAF)";
    strength_svg3.style.fill = " var(--Neon-Green, #A4FFAF)";
    strength_svg4.style.fill = " var(--Neon-Green, #A4FFAF)";
    Strong.style.display = "block";
    Medium.style.display = "none";
    Weak.style.display = "none";
    Too_Weak.style.display = "none";
    console.log("Checkbox is checked!");
  } else if (
    ((first_input.checked && second_input.checked && third_input.checked) ||
      (first_input.checked && second_input.checked && fourth_input.checked) ||
      (first_input.checked && third_input.checked && fourth_input.checked) ||
      (second_input.checked && third_input.checked && fourth_input.checked)) &&
    length !== "0"
  ) {
    strength_svg.style.fill = " var(--3---Yellow, #F8CD65)";
    strength_svg2.style.fill = "var(--3---Yellow, #F8CD65)";
    strength_svg3.style.fill = "var(--3---Yellow, #F8CD65)";
    strength_svg4.style.fill = "none";

    Medium.style.display = "block";
    Weak.style.display = "none";
    Too_Weak.style.display = "none";
    Strong.style.display = "none";
  } else if (
    ((first_input.checked && second_input.checked) ||
      (first_input.checked && third_input.checked) ||
      (first_input.checked && fourth_input.checked) ||
      (second_input.checked && third_input.checked) ||
      (second_input.checked && fourth_input.checked) ||
      (third_input.checked && fourth_input.checked)) &&
    length !== "0"
  ) {
    strength_svg.style.fill = "var(--2---Orange, #FB7C58)";
    strength_svg2.style.fill = "var(--2---Orange, #FB7C58)";
    strength_svg3.style.fill = "none";
    strength_svg4.style.fill = "none";
    Weak.style.display = "block";
    Too_Weak.style.display = "none";
    Medium.style.display = "none";
    Strong.style.display = "none";
  } else if (
    (first_input.checked ||
      second_input.checked ||
      third_input.checked ||
      fourth_input.checked) &&
    length !== "0"
  ) {
    strength_svg.style.fill = "var(--1---Red, #F64A4A)";
    strength_svg2.style.fill = "none";
    strength_svg3.style.fill = "none";
    strength_svg4.style.fill = "none";
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

  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?`-=[]\\;',./'";
  let finalPassword = "";
  for (let i = 0; i < length; i++) {
    finalPassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return (passwordInput.value = finalPassword);
});
