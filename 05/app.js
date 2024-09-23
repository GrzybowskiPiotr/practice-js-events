const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};
console.log("Reload");
/* tutaj umieść swój kod */

const paragraphs = document.querySelectorAll("p");

function updateLinkCount() {
  let dolorCount = stats.links["/dolor.html"];
  stats.links["/dolor.html"] = ++dolorCount;
}
function uldateParagCount() {
  let paraCount = stats.paragraphs.p1;
  stats.paragraphs.p1 = ++paraCount;
}

paragraphs.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    const link = e.target.classList.contains("link");
    const hrefDolor = e.target.getAttribute("href");
    const text = e.target.classList.contains("text");
    const dataset = e.target.dataset.id === "p1";

    if (link && hrefDolor) {
      updateLinkCount();
    } else if (text && dataset) {
      uldateParagCount();
    }
  });
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector(".stats");
const fireCustomEvent = function (element, name) {
  console.log(element, "=>", name);

  const event = new CustomEvent(name, {
    bubbles: true,
  });

  element.dispatchEvent(event);
};

const renderStats = function (data, element) {
  let html = "";
  for (let elementType in data) {
    html += "<ul>";

    for (let key in data[elementType]) {
      html += "<li>";
      html += key + " -> " + data[elementType][key];
      html += "</li>";
    }

    html += "</ul>";
  }

  element.innerHTML = html;
};

document.addEventListener("click", function (e) {
  const tagName = e.target.tagName;
  if (tagName.includes("P") || tagName.includes("A")) {
    fireCustomEvent(statsElement, "render");
  }
});
statsElement.addEventListener(
  "render",
  renderStats.bind(this, stats, statsElement)
);
document.addEventListener(
  "DOMContentLoaded",
  fireCustomEvent.bind(null, statsElement, "render")
);
