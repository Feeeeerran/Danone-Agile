export default function mid4 (controller) {

    // SOUNDS

    var aplauso = new Audio();
    aplauso.src = "../../../sounds/aplauso.mp3";
    var audio1 = new ScrollMagic.Scene({
        triggerElement:".mid4Trigger-icon"
    })
    .on("enter",function(e){
        aplauso.play()
    })
    .addTo(controller)







    // ANIMACIONES

    var mid4T = new TimelineMax()
        .fromTo("#sub-containerMid4>h3",1,{transform:"translateY(-50vh)"},{transform:"translateY(0)"})
        

    var mid4 = new ScrollMagic.Scene({
        triggerElement:".mid4Trigger-title",
        duration:500
    })
    .setTween(mid4T)
    .addTo(controller)
    

    var mid4Ic1 = new TimelineMax()
        .fromTo(".mid4Line3",1,{opacity:0,transform:"translate(-2vw,-4vh)"},{opacity:1,transform:"translate(0,0)"})

    var mid4 = new ScrollMagic.Scene({
        triggerElement:".mid4Trigger-icon",
        duration:200
    })
    .setTween(mid4Ic1)
    .addTo(controller)
    

    var mid4Ic2 = new TimelineMax()
        .fromTo(".mid4Line2",1,{opacity:0,transform:"translate(2vw,-4vh)"},{opacity:1,transform:"translate(0,0)"})

    var mid4 = new ScrollMagic.Scene({
        triggerElement:".mid4Trigger-icon",
        duration:200
    })
    .setTween(mid4Ic2)
    .addTo(controller)
    

    var mid4Ic3 = new TimelineMax()
        .fromTo(".mid4Line1",1,{opacity:0,transform:"translate(0,-4vh)"},{opacity:1,transform:"translate(0,0)"})

    var mid4 = new ScrollMagic.Scene({
        triggerElement:".mid4Trigger-icon",
        duration:200
    })
    .setTween(mid4Ic3)
    .addTo(controller)

}