export default function mid3 (controller) {


    // SOUNDS




    var audio1 = new ScrollMagic.Scene({
        triggerElement:".mid3Sound-movimiento1"
    })
    .on("enter",function(e){
        movimiento.play()
    })
    .addTo(controller)

    var audio1 = new ScrollMagic.Scene({
        triggerElement:".mid3Sound-movimiento2"
    })
    .on("enter",function(e){
        movimiento.play()
    })
    .addTo(controller)

    var audio1 = new ScrollMagic.Scene({
        triggerElement:".mid3Sound-movimiento3"
    })
    .on("enter",function(e){
        movimiento.play()
    })
    .addTo(controller)







    // ANIMACIONES

    var mid3T = new TimelineMax()
        .fromTo("#sub-containerMid3>h3",1,{transform:"translateY(-50vh)"},{transform:"translateY(0vh)"})

    var mid3Title = new ScrollMagic.Scene({
        triggerElement:".mid3Trigger-title",
        duration:500
    })
    .setTween(mid3T)
    .addTo(controller)

    // ANIMACION DE FLECHA ////////////

    if (window.innerWidth>600) {
        var mid3Anim = new TimelineMax()
            .fromTo(".mid3Icon3",1,{transform:"translateX(-60vw)"},{transform:"translateX(0)"})
    } else if (window.innerWidth<=600) {
        var mid3Anim = new TimelineMax()
            .fromTo(".mid3Icon3",1,{transform:"translateX(-80vw)"},{transform:"translateX(0)"})
    }

    var mid3An = new ScrollMagic.Scene({
        triggerElement:".mid3Trigger-animation1",
        duration:2000
    })
    .setTween(mid3Anim)
    .addTo(controller)
    

    if (window.innerWidth>=600) {
        var mid3Anim = new TimelineMax()
            .fromTo(".mid3Icon3>polygon",1,{transform:"translateX(100vw)"},{transform:"translateX(0)"})
    } else if (window.innerWidth<=600) {
        var mid3Anim = new TimelineMax()
            .fromTo(".mid3Icon3>polygon",1,{transform:"translateX(400vw)"},{transform:"translateX(0)"})
    }

    var mid3An = new ScrollMagic.Scene({
        triggerElement:".mid3Trigger-animation2",
        duration:2000
    })
    .setTween(mid3Anim)
    .addTo(controller)
    
    // ANIMACION DE PERSONA

    if (window.innerWidth>600) {
        var mid3Anim = new TimelineMax()
            .fromTo(".mid3Icon2",1,{top:"45%",width:"0",transform:"rotate(-35deg)"},{top:"-8%",width:"10%",transform:"rotate(-25deg)"})
            .to(".mid3Icon2",1,{top:"-5%",width:"13%",transform:"rotate(5deg)"})
            .to(".mid3Icon2",1,{top:"-25%",width:"18%",transform:"rotate(-15deg)"})
            .to(".mid3Icon2",1,{top:"-20%",width:"19.5%",transform:"rotate(15deg)"})
            .to(".mid3Icon2",1,{top:"-18%",width:"23%",transform:"rotate(0)"})
            .fromTo(".mid3Icon1",0.5,{opacity:0,transform:"translateY(10vh)"},{opacity:1,transform:"translateY(0vh)"})

    } else if (window.innerWidth<=600) {
        var mid3Anim = new TimelineMax()
            .fromTo(".mid3Icon2",1,{top:"45%",width:"0",transform:"rotate(-35deg)"},{top:"-8%",width:"10%",transform:"rotate(-25deg)"})
            .to(".mid3Icon2",1,{top:"-5%",width:"15%",transform:"rotate(5deg)"})
            .to(".mid3Icon2",1,{top:"-25%",width:"25%",transform:"rotate(-15deg)"})
            .to(".mid3Icon2",1,{top:"-20%",width:"35%",transform:"rotate(15deg)"})
            .to(".mid3Icon2",1,{top:"-18%",width:"45%",transform:"rotate(0)"})
            .fromTo(".mid3Icon1",0.5,{opacity:0,transform:"translateY(10vh)"},{opacity:1,transform:"translateY(0vh)"})
    }

    var mid3An = new ScrollMagic.Scene({
        triggerElement:".mid3Trigger-animation2",
        duration:"350%"
    })
    .setTween(mid3Anim)
    .addTo(controller)

    
}