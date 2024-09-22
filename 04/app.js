const divs = document.querySelectorAll("div");
const body = document.querySelector("body");

function onDivClick(e, time) {
  const cList = e.currentTarget.classList;
  setTimeout(() => {
    cList.add("clicked");
  }, time);
}

divs.forEach((div) => {
  const timeout = div.dataset.time;
  div.addEventListener("click", (e) => onDivClick(e, timeout));
});

body.addEventListener("click", (e) => {
  if (e.target.dataset.time === undefined) {
    divs.forEach((div) => div.classList.remove("clicked"));
  }
});
