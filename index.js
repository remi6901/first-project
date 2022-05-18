console.log("connecté");
const list = document.querySelector(".burger");
const icon = document.querySelector(".icon")

icon.addEventListener("click", function(){
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
})







