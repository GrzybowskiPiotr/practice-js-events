const buttons = document.querySelectorAll("button");

let isAnyButtonClicked = false;

function onClickHnadler(e) {
  if (!isAnyButtonClicked) {
    e.target.innerText = "clicked";
    console.log("clicked");
    isAnyButtonClicked = true;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => onClickHnadler(e));
});
