const dialogElem = document.getElementById("dialog-content");
const buttonShowElem = document.getElementById("btn-show");

document.getElementById("btn-cta").addEventListener("click", () => {
  dialogElem.classList.toggle("dissapear");
  buttonShowElem.classList.toggle("dissapear");
});

buttonShowElem.addEventListener("click", () => {
  dialogElem.classList.toggle("dissapear");
  buttonShowElem.classList.toggle("dissapear");
});
