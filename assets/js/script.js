var agua = document.getElementById("agua");
var alert = document.getElementById("alert");
var aplauso = document.getElementById("aplauso");
var calendario = document.getElementById("calendario");
var click = document.getElementById("click");
var cohete = document.getElementById("cohete");
var chat = document.getElementById("chat");
var flag = document.getElementById("flag");
var lampara = document.getElementById("lampara");
var launch = document.getElementById("launch");
var marcador = document.getElementById("marcador");
var movimiento = document.getElementById("movimiento");
var notificacion = document.getElementById("notificacion");
var papel = document.getElementById("papel");
var popup = document.getElementById("popup");



const controller = new ScrollMagic.Controller();

import intro from './intro/intro-script.js';
intro(controller);

import menu from './menu/menu-script.js';
menu(controller);

import mid from './mid/mid-script.js';
mid(controller);

import end from './end/end-script.js';
end(controller);


// CARDS + CLICK

var clickCard = document.querySelectorAll(".card")

clickCard.forEach(e => {
    e.onclick= () => {
        if(e.style.transform == "rotateY(180deg)") {
            e.style.transform = "rotateY(0deg)";
          }
          else {
            e.style.transform = "rotateY(180deg)";
          }
    }
})


// KEYROLES + CLICK

var clickRoles = document.querySelectorAll(".keyRoles>li")
var infoKeyRoles = document.querySelectorAll(".info>li")

clickRoles.forEach((e,i)=> {
    e.onclick= ()=> {
        infoKeyRoles[i].classList.add("showKeyRole")
        infoKeyRoles[i].classList.remove("hideK")
    }
})

// VIDEO

var end15Video = document.querySelector("#sub-containerEnd15>video")
var end15Play = document.querySelector("#sub-containerEnd15>svg")
var end15Text = document.querySelector("#sub-containerEnd15>h3")


end15Play.onclick = () => {
    end15Play.style.opacity=0
    end15Text.style.opacity=0
    end15Video.style.opacity=1
    end15Video.play()
}






