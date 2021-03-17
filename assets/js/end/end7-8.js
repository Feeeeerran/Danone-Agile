export default function end7_8(controller) {


    // BOATS IN

    var triBoat = new TimelineMax()
        .fromTo(".center",1,{transform:"translateY(100vh)"},{transform:"translateY(0)"}) 
        .fromTo(".left",1,{transform:"translateY(100vh)"},{transform:"translateY(0)"}) 
        .fromTo(".right",1,{transform:"translateY(100vh)"},{transform:"translateY(0)"})
        .fromTo(".end7Content",0.8,{transform:"translateY(100vh)"},{transform:"translateY(0)"})
        .fromTo(".triBoats-container>p",1,{opacity:0,transform:"translateY(-10vh)"},{opacity:1,transform:"translateY(0)"}) 

    var end7 = new ScrollMagic.Scene({
        triggerElement:".end7Trigger",
        duration:"680%"
    })
    .setTween(triBoat)
    .addTo(controller)


    // BOATS OUT

    

        var end7 = new ScrollMagic.Scene({
            triggerElement:".end8Trigger-out",
            duration:"106%"
        })
        .setTween(".triBoats-container,.end8Content",1,{transform:"translateY(-100vh)"})
        .addTo(controller)





    // ESTELA

    var estelaDG = new TimelineMax()
        .to(".canoa>.estelaDG",1,{transform:"translateY(10vh)"})
        .to(".canoa>.estelaDG",1,{opacity:0})
        .to(".canoa>.estelaDG",1,{transform:"translateY(0)"})
        .to(".canoa>.estelaDG",1,{opacity:1})
        .to(".canoa>.estelaDG",1,{transform:"translateY(6vh)"})
        .to(".canoa>.estelaDG",1,{opacity:0})
        .to(".canoa>.estelaDG",1,{transform:"translateY(0)"})
        .to(".canoa>.estelaDG",1,{opacity:1})
        .to(".canoa>.estelaDG",1,{transform:"translateY(8vh)"})
        .to(".canoa>.estelaDG",1,{opacity:0})
        .to(".canoa>.estelaDG",1,{transform:"translateY(0)"})
        .to(".canoa>.estelaDG",1,{opacity:1})
        .to(".canoa>.estelaDG",1,{transform:"translateY(5vh)"})
        .to(".canoa>.estelaDG",1,{opacity:0})
        .to(".canoa>.estelaDG",1,{transform:"translateY(0)"})
        .to(".canoa>.estelaDG",1,{opacity:1})
        .to(".canoa>.estelaDG",1,{transform:"translateY(5vh)"})
        

    
    var end7Icon = new ScrollMagic.Scene({
        triggerElement:".end7Trigger",
        duration:"1060%"
    })
    .setTween(estelaDG)
    .addTo(controller)

    
    var estelaDp = new TimelineMax()
        .to(".canoa>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".canoa>.estelaDp",1,{opacity:0})
        .to(".canoa>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaDp",1,{opacity:1})
        .to(".canoa>.estelaDp",1,{transform:"translate(-0.3vw,4vh)"})
        .to(".canoa>.estelaDp",1,{opacity:0})
        .to(".canoa>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaDp",1,{opacity:1})
        .to(".canoa>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".canoa>.estelaDp",1,{opacity:0})
        .to(".canoa>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaDp",1,{opacity:1})
        .to(".canoa>.estelaDp",1,{transform:"translate(-0.2vw,4vh)"})
        .to(".canoa>.estelaDp",1,{opacity:0})
        .to(".canoa>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaDp",1,{opacity:1})
        .to(".canoa>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".canoa>.estelaDp",1,{opacity:0})
        .to(".canoa>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaDp",1,{opacity:1})
        .to(".canoa>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".canoa>.estelaDp",1,{opacity:0})
        .to(".canoa>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaDp",1,{opacity:1})
        .to(".canoa>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".canoa>.estelaDp",1,{opacity:0})
        .to(".canoa>.estelaDp",1,{transform:"translate(0,0)"})

    
    var end7Icon = new ScrollMagic.Scene({
        triggerElement:".end7Trigger",
        duration:"1060%"
    })
    .setTween(estelaDp)
    .addTo(controller)

    
    var estelaIG = new TimelineMax()
        .to(".canoa>.estelaIG",1,{transform:"translateY(4vh)"})
        .to(".canoa>.estelaIG",1,{opacity:0})
        .to(".canoa>.estelaIG",1,{transform:"translateY(0)"})
        .to(".canoa>.estelaIG",1,{opacity:1})
        .to(".canoa>.estelaIG",1,{transform:"translateY(9vh)"})
        .to(".canoa>.estelaIG",1,{opacity:0})
        .to(".canoa>.estelaIG",1,{transform:"translateY(0)"})
        .to(".canoa>.estelaIG",1,{opacity:1})
        .to(".canoa>.estelaIG",1,{transform:"translateY(5vh)"})
        .to(".canoa>.estelaIG",1,{opacity:0})
        .to(".canoa>.estelaIG",1,{transform:"translateY(0)"})
        .to(".canoa>.estelaIG",1,{opacity:1})
        .to(".canoa>.estelaIG",1,{transform:"translateY(6vh)"})
        .to(".canoa>.estelaIG",1,{opacity:0})
        .to(".canoa>.estelaIG",1,{transform:"translateY(0)"})
        .to(".canoa>.estelaDG",1,{opacity:1})
        .to(".canoa>.estelaIG",1,{transform:"translateY(6vh)"})
        .to(".canoa>.estelaIG",1,{opacity:0})
        .to(".canoa>.estelaIG",1,{transform:"translateY(0)"})

    
    var end7Icon = new ScrollMagic.Scene({
        triggerElement:".end7Trigger",
        duration:"1060%"
    })
    .setTween(estelaIG)
    .addTo(controller)

    
    var estelaIp = new TimelineMax()
        .to(".canoa>.estelaIp",1,{transform:"translate(0.1vw,2vh)"})
        .to(".canoa>.estelaIp",1,{opacity:0})
        .to(".canoa>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaIp",1,{opacity:1})
        .to(".canoa>.estelaIp",1,{transform:"translateY(2vh)"})
        .to(".canoa>.estelaIp",1,{opacity:0})
        .to(".canoa>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaIp",1,{opacity:1})
        .to(".canoa>.estelaIp",1,{transform:"translate(0.3vw,2vh)"})
        .to(".canoa>.estelaIp",1,{opacity:0})
        .to(".canoa>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaIp",1,{opacity:1})
        .to(".canoa>.estelaIp",1,{transform:"translateY(2vh)"})
        .to(".canoa>.estelaIp",1,{opacity:0})
        .to(".canoa>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaIp",1,{opacity:1})
        .to(".canoa>.estelaIp",1,{transform:"translate(0.4vw,2vh)"})
        .to(".canoa>.estelaIp",1,{opacity:0})
        .to(".canoa>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaIp",1,{opacity:1})
        .to(".canoa>.estelaIp",1,{transform:"translateY(2vh)"})
        .to(".canoa>.estelaIp",1,{opacity:0})
        .to(".canoa>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".canoa>.estelaIp",1,{opacity:1})
        .to(".canoa>.estelaIp",1,{transform:"translateY(2vh)"})
        

    
    var end7Icon = new ScrollMagic.Scene({
        triggerElement:".end7Trigger",
        duration:"1060%"
    })
    .setTween(estelaIp)
    .addTo(controller)
    
}