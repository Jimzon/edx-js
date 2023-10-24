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
  // setInterval(count, 3000);
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

//Tasks
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function (e) {
    e.preventDefault();

    if (document.querySelector("#addlist").value.length > 0) {
      document.querySelector("#list-btn").disabled = false;
    } else {
      document.querySelector("#list-btn").disabled = true;
    }
    document.querySelector("#addlist").onkeyup = function () {
      document.querySelector("#list-btn").disabled = false;
    };
    let task = document.querySelector("#addlist").value;
    let li = document.createElement("li");
    li.innerHTML = task;
    document.querySelector("#ullist").append(li);
  };
});

//currency

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then((response) => response.json())
    .then((data) => {
      const test = data.error.code;
      document.querySelector("body").innerHTML = test;
      document.querySelector("body").innerHTML = `Error testing: ${test}`;
    });
});
