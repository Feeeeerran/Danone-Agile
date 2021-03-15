export default function end3(controller) {
    


    // SOUNDS

    var audio1 = new ScrollMagic.Scene({
        triggerElement:".end3Trigger-icon"
    })
    .on("enter",function(e){
        agua.play()
    })
    .addTo(controller)



    // ANIMACIONES

    var end3Tit = new TimelineMax()
        .fromTo("#sub-containerEnd3>h3",1,{transform:"translateY(-50vh)"},{transform:"translateY(0)"})

    var end3Title = new ScrollMagic.Scene({
        triggerElement:".end3Trigger-title",
        duration:500
    })
    .setTween(end3Tit)
    .addTo(controller)


    // Entra el bote

    var end3I = new TimelineMax()
        .fromTo(".end3Icon",1,{transform:"translateY(80vh)"},{transform:"translateY(0)"})

    var end3Icon = new ScrollMagic.Scene({
        triggerElement:".end3Trigger-icon",
        duration:800
    })
    .setTween(end3I)
    .addTo(controller)

    // ANIMACIONES DE ESTELA

    var estelaDG = new TimelineMax()
        .to(".end3Icon>.estelaD2-grande",1,{opacity:0})
        .to(".end3Icon>.estelaD1-grande",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD1-grande",1,{opacity:0})
        .to(".end3Icon>.estelaD1-grande",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaD2-grande",1,{opacity:1})
        .to(".end3Icon>.estelaD2-grande",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD2-grande",1,{opacity:0})
        .to(".end3Icon>.estelaD2-grande",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaD1-grande",1,{opacity:1})
        .to(".end3Icon>.estelaD1-grande",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD1-grande",1,{opacity:0})
        .to(".end3Icon>.estelaD1-grande",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaD2-grande",1,{opacity:1})
        .to(".end3Icon>.estelaD2-grande",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD2-grande",1,{opacity:0})
        .to(".end3Icon>.estelaD2-grande",1,{transform:"translateY(0)"})

    
    var end3Icon = new ScrollMagic.Scene({
        triggerElement:".end3Trigger-icon",
        duration:3000
    })
    .setTween(estelaDG)
    .addTo(controller)
    
    var estelaDp = new TimelineMax()
        .to(".end3Icon>.estelaD2-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaD1-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD1-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaD1-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaD2-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaD2-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD2-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaD2-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaD1-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaD1-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD1-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaD1-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaD2-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaD2-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD2-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaD2-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaD1-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaD1-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD1-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaD1-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaD2-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaD2-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD2-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaD2-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaD1-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaD1-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaD1-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaD1-pequeña",1,{transform:"translateY(0)"})

    
    var end3Icon = new ScrollMagic.Scene({
        triggerElement:".end3Trigger-icon",
        duration:3000
    })
    .setTween(estelaDp)
    .addTo(controller)
    
    var estelaIG = new TimelineMax()
        .to(".end3Icon>.estelaI2-grande",1,{opacity:0})
        .to(".end3Icon>.estelaI1-grande",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI1-grande",1,{opacity:0})
        .to(".end3Icon>.estelaI1-grande",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaI2-grande",1,{opacity:1})
        .to(".end3Icon>.estelaI2-grande",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI2-grande",1,{opacity:0})
        .to(".end3Icon>.estelaI2-grande",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaI1-grande",1,{opacity:1})
        .to(".end3Icon>.estelaI1-grande",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI1-grande",1,{opacity:0})
        .to(".end3Icon>.estelaI1-grande",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaI2-grande",1,{opacity:1})
        .to(".end3Icon>.estelaI2-grande",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI2-grande",1,{opacity:0})
        .to(".end3Icon>.estelaI2-grande",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaI1-grande",1,{opacity:1})
        .to(".end3Icon>.estelaI1-grande",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI1-grande",1,{opacity:0})
        .to(".end3Icon>.estelaI1-grande",1,{transform:"translateY(0)"})

    
    var end3Icon = new ScrollMagic.Scene({
        triggerElement:".end3Trigger-icon",
        duration:3000
    })
    .setTween(estelaIG)
    .addTo(controller)
   
    var estelaIp = new TimelineMax()
        .to(".end3Icon>.estelaI2-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaI1-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI1-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaI1-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaI2-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaI2-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI2-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaI2-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaI1-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaI1-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI1-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaI1-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaI2-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaI2-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI2-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaI2-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaI1-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaI1-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI1-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaI1-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaI2-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaI2-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI2-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaI2-pequeña",1,{transform:"translateY(0)"})
        .to(".end3Icon>.estelaI1-pequeña",1,{opacity:1})
        .to(".end3Icon>.estelaI1-pequeña",1,{transform:"translateY(4vh)"})
        .to(".end3Icon>.estelaI1-pequeña",1,{opacity:0})
        .to(".end3Icon>.estelaI1-pequeña",1,{transform:"translateY(0)"})

    
    var end3Icon = new ScrollMagic.Scene({
        triggerElement:".end3Trigger-icon",
        duration:3000
    })
    .setTween(estelaIp)
    .addTo(controller)

    // MOVIMIENTO LADO A LADO

    var iconMov = new TimelineMax()
        .to(".end3Icon",1,{transform:"translateX(2vw)"})
        .to(".end3Icon",1,{transform:"translateX(-1vw)"})
        .to(".end3Icon",1,{transform:"translateX(1vw)"})
        .to(".end3Icon",1,{transform:"translateX(0)"})

    var end3Icon = new ScrollMagic.Scene({
        triggerElement:".end3Trigger-icon",
        duration:1500
    })
    .setTween(iconMov)
    .addTo(controller)



    
    // Sale el bote

    var iconOut = new TimelineMax()
        .fromTo("#sub-containerEnd3>p",1,{opacity:0},{opacity:"1"})
        // .to("#sub-containerEnd3>p",1,{opacity:"1"})
        .to(".end3Icon, #sub-containerEnd3>p,#sub-containerEnd3>h3 ",1,{transform:"translateY(-50vh)"}) 

    var end3Icon = new ScrollMagic.Scene({
        triggerElement:".end3Trigger-iconOut",
        duration:1000
    })
    .setTween(iconOut)
    .addTo(controller)
    



}