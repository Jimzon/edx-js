//hello js
const hello = () => {
  const heading = document.querySelector(".heading1");
  if (heading.innerText === "Hello") {
    heading.innerHTML = "Jimzon Pogi";
  } else {
    heading.innerHTML = "Hello";
  }
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#index-btn").onclick = hello;
});

//counter js
let counter = 0;
let count = () => {
  counter++;
  document.querySelector(".counth1").innerHTML = counter;

  if (counter % 10 == 0) {
    alert(`perfect ${counter}`);
  }
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#count-btn").onclick = count;
});

//form
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function () {
    const name = document.querySelector("#name").value;
    alert(`Hello, ${name}`);
  };
});

//color
document.addEventListener("DOMContentLoaded", function () {
  //   document.querySelectorAll("button").forEach(function (button) {
  //     button.onclick = function () {
  //       document.querySelector("#hello").style.color = button.dataset.color;
  //     };
  document.querySelector("select").onchange = function () {
    document.querySelector("#hello").style.color = this.value;
  };
});
