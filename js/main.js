document.querySelector(".clear").addEventListener("click",showmenu)
document.querySelector(".menu-button").addEventListener("click",showmenu)

function showmenu(){
     let menu = document.querySelector("div.menu_mobil");
     menu.classList.toggle("show");

     let close = document.querySelector(".clear");
     close.classList.toggle("visible");

     let showing = document.querySelector(".clear");
     showing.classList.toggle("clear_show");
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides_imgs");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}