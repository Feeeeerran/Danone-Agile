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







