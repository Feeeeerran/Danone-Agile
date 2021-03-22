export default function what (controller) {


    // SOUNDS


    var audio1 = new ScrollMagic.Scene({
        triggerElement:".whatTrigger-title"
    })
    .on("enter",function(e){
        notificacion.play()
    })
    .addTo(controller)
    
    

    var audio1 = new ScrollMagic.Scene({
        triggerElement:".whatTrigger-content"
    })
    .on("enter",function(e){
        movimiento.play()
    })
    .addTo(controller)



    


    // ANIMACIONES

    var whatT = new ScrollMagic.Scene({
        triggerElement:".whatTrigger-title",
    })
    .setClassToggle("#whatTit","typed")
    .addTo(controller);


    // Anim responsive
    if (window.innerWidth>600) {
        var whatContent = new TimelineMax()
        .fromTo(".whatContent>.primerP",1,{opacity:0},{opacity:1})
        .fromTo(".whatContent>.whatIcon3",1,{transform:"translate(100vw,0)"},{transform:"translate(0,0)"})
        .fromTo(".whatContent>.segundoP",1,{opacity:0},{opacity:1})
        .fromTo(".whatIcon2",1,{transform:"scale(0)"},{transform:"scale(1.2)"},)
        .to(".whatIcon2",1,{transform:"scale(0.8)"})
        .to(".whatIcon2",1,{transform:"scale(0.8)"})
    } else if (window.innerWidth<=600) {
        var whatContent = new TimelineMax()
        .fromTo(".whatContent>.primerP",1,{opacity:0},{opacity:1})
        .fromTo(".whatContent>.whatIcon3",1,{transform:"translate(100vw,0)"},{transform:"translate(0,0)"})
        .fromTo(".whatContent>.segundoP",1,{opacity:0},{opacity:1})
        .fromTo(".whatIcon2",1,{transform:"scale(0)"},{transform:"scale(0.6)"},)
        .to(".whatIcon2",1,{transform:"scale(0.4)"})
        .to(".whatIcon2",1,{transform:"scale(0.4)"})
    }


    var what = new ScrollMagic.Scene({
        triggerElement:".whatTrigger-content",
        duration:"380%"
    })
    .setTween(whatContent)
    .addTo(controller)


    // WHEEL 
    var wheel = new TimelineMax()
        .fromTo(".whatIcon1",1,{left:"-50vw"},{left:"0vw"})

    var what = new ScrollMagic.Scene({
        triggerElement:".whatTrigger-content",
        duration:"380%"
    })
    .setTween(wheel)
    .addTo(controller)

    // OUT

    var what = new ScrollMagic.Scene({
        triggerElement:".whatTrigger-out",
        duration:"120%"
    })
    .setTween("#sub-containerWhat>h3,.whatContent",1,{transform:"translateX(100vw)"})
    .addTo(controller)
}