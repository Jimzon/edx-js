const hello = () => {
  const heading = document.querySelector(".heading1");
  if (heading.innerText === "Hello") {
    heading.innerHTML = "Jimzon Pogi";
  } else {
    heading.innerHTML = "Hello";
  }
};

let counter = 0;

let count = () => {
  counter++;
  document.querySelector(".counth1").innerHTML = counter;

  if (counter % 10 == 0) {
    alert(`perfect ${counter}`);
  }
};
