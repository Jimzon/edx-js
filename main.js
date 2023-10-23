const hello = () => {
  if (document.querySelector(".heading1").innerText === "Hello") {
    document.querySelector(".heading1").innerHTML = "Jimzon Pogi";
  } else {
    document.querySelector(".heading1").innerHTML = "Hello";
  }
};

let counter = 0;

let count = () => {
  counter++;
  alert(counter);
};
