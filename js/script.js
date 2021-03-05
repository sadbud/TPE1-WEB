"use strict";

let btn = document.getElementById("test");
let container = document.querySelector(".section");
let url = "test.html";
let article = document.querySelector(".container");

btn.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        response.text().then((text) => {
          container.innerHTML = text;
          article.remove();
        });
      } else container.innerHTML = "<h1>Error - Failed URL!</h1>";
    })
    .catch((e) => console.log(e));
});
