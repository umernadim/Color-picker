const colorPicker = document.getElementById("colorPicker");
const colorSection = document.getElementById("colorSection");

colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;
  colorSection.style.backgroundColor = selectedColor;
});