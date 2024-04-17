let changeShape = document.querySelector(".change-shape");
let changeColor = document.querySelector(".change-color");
let circle = document.querySelector(".circle");
let shape = document.querySelector(".shape");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

changeColor.addEventListener("click", () => {
  circle.style.backgroundColor = `${getRandomColor()}`;
});

changeShape.addEventListener("click", () => {
  if (shape.getAttribute("id") == "triangle") {
    shape.setAttribute("id", "square");
  } else {
    shape.setAttribute("id", "triangle");
  }
});
