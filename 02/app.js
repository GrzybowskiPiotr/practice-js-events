const script = document.querySelector("script");
script.defer = true;

const div = document.querySelector("div");

div.addEventListener("mousemove", () => {
  console.log("ruszam myszą nad div");
});
div.addEventListener("mouseleave", function () {
  console.log("opuszczam div");
});
