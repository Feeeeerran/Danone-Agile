export default function mid5 (controller) {


    // SOUNDS

    var movimiento = new Audio();
    movimiento.src = "../../../sounds/movimiento.mp3";
    var audio1 = new ScrollMagic.Scene({
        triggerElement:".mid5Sound-movimiento"
    })
    .on("enter",function(e){
        movimiento.play()
    })
    .addTo(controller)



    // ANIMACIONES
    var mid5T = new TimelineMax()
        .fromTo("#sub-containerMid5>h3",1,{transform:"translateY(-50vh)"},{transform:"translateY(0)"})

    var mid5 = new ScrollMagic.Scene({
        triggerElement:".mid5Trigger-title",
        duration:500
    })
    .setTween(mid5T)
    .addTo(controller)

    var mid5Icons = new TimelineMax()
        .fromTo(".mid5Icon1",1,{transform:"translateY(100vh)"},{transform:"translateY(0)"})
        .to(".midIcon5",1,{opacity:1})
        .fromTo(".mid5Icon2",1,{opacity:0,transform:"translateY(-5vh)"},{opacity:1,transform:"translateY(0)"})
    var mid5= new ScrollMagic.Scene({
        triggerElement:".mid5Trigger-icons",
        duration:2000
    })
    .setTween(mid5Icons)
    .addTo(controller)

}