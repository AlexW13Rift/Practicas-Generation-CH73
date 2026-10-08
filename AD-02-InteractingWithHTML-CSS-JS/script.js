const headers = document.querySelectorAll("h1");

headers[0].textContent = "GoodBye";

headers[1].style.color = "orange";

const clickHeader = document.getElementById("clickHeader");

clickHeader.addEventListener("click", function() {
  clickHeader.style.color = "brown";
});