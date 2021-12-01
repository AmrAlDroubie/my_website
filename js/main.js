const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-nav");

navbarToggler.onclick = function () {
    navbarMenu.classList.toggle("active");
};

// data footer
let footerYear = document.querySelector(".footer-year");
let date = new Date();
let text = `Hello I'm <span>Amr ADroubie</span>,<br>
Front End developer`;
let thisYear = date.getFullYear();
footerYear.textContent = thisYear;

// typing
let normalText = "Hello I'm Amr AlDroubie Front End developer";
let eleTyping = document.querySelector(".header-content > p");
let n = 0;
let typingInterval = setInterval(function(){
    if(n<9){
        document.querySelector(".span1").innerHTML += normalText[n]
    }
    else if(n>9 && n<23){
        document.querySelector(".span2").innerHTML += normalText[n] ;
    }
    else{
        document.querySelector(".span3").innerHTML += normalText[n]
    }
    n++;
    if(n == normalText.length) clearInterval(typingInterval);
},100)

window.onload = function(){
    console.log(eleTyping.querySelector("span"))
    alert("hi")
}

