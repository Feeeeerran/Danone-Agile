// var agua = document.getElementById("agua");
// var alerta = document.getElementById("alerta");
// var aplauso = document.getElementById("aplauso");
// var calendario = document.getElementById("calendario");
// var click = document.getElementById("click");
// var cohete = document.getElementById("cohete");
// var chat = document.getElementById("chat");
// var flag = document.getElementById("flag");
// var lampara = document.getElementById("lampara");
// var launch = document.getElementById("launch");
// var marcador = document.getElementById("marcador");
// var movimiento = document.getElementById("movimiento");
// var notificacion = document.getElementById("notificacion");
// var papel = document.getElementById("papel");
// var popup = document.getElementById("popup");




const controller = new ScrollMagic.Controller();




import intro from './intro/intro-script.js';
intro(controller);

import menu from './menu/menu-script.js';
menu(controller);

import mid from './mid/mid-script.js';
// mid(controller);

import end from './end/end-script.js';
// end(controller);

var flagIntro=1;
var flagMid=1;

window.addEventListener("scroll",()=> {
    var Ypos = ((window.scrollY)/(window.innerHeight))*100
    if(Ypos>3150 && flagIntro==1) {
        mid(controller)
        flagIntro=0;
    } if (Ypos>6600 && flagMid==1) {
        end(controller)
        flagMid=0;
    }
})



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

var clickRoles = document.querySelectorAll(".keyRoles>li>button")
var infoKeyRoles = document.querySelectorAll(".info>li")

clickRoles.forEach((e,i)=> {
    e.addEventListener("click",()=> {
        console.log("click")
        infoKeyRoles[i].classList.add("showKeyRole")
        infoKeyRoles[i].classList.remove("hideK")
    })
})

// VIDEO

var end15Video = document.querySelector("#sub-containerEnd15>video")
var end15Play = document.querySelector("#sub-containerEnd15>svg.play")
var end15Close = document.querySelector("#sub-containerEnd15>svg.close")
var end15Text = document.querySelector("#sub-containerEnd15>h3")
var end15Scroll = document.getElementsByTagName("html")


end15Play.addEventListener("click",() => {
    end15Play.style.opacity=0;
    end15Text.style.opacity=0;
    end15Close.style.opacity=0;
    end15Video.style.opacity=1;
    end15Video.play();
    end15Scroll[0].style.overflow="hidden";
})


end15Video.addEventListener("click",()=>{
    end15Video.pause()
    end15Play.style.opacity=1
    end15Scroll[0].style.overflow="visible"
    end15Close.style.opacity=1;
})

end15Close.addEventListener("click",()=> {
    end15Video.style.opacity=0;
    end15Close.style.opacity=0;
    end15Text.style.opacity=1;

})





