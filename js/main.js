function showmenu(){
     let menu = document.querySelector("div.menu_mobil");
     menu.classList.toggle("show");

     let close = document.querySelector(".clear");
     close.classList.toggle("visible");

     let showing = document.querySelector(".clear");
     showing.classList.toggle("clear_show");
}