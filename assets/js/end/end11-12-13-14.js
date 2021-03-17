export default function end11_12_13_14(controller) {

    // BOATS IN

    var boats = new TimelineMax()
        .fromTo(".boat",1,{transform:"translateY(100vh)"},{transform:"translateY(0)"})
        .fromTo(".end11Content",1,{transform:"translateY(-100vh)"},{transform:"translateY(0)"})
        .fromTo(".boatIcons>p",1,{opacity:0},{opacity:1})
        .fromTo(".rect1",1,{opacity:0},{opacity:1})
        .to(".rect1",1,{opacity:1})
        .to(".rect1",1,{opacity:1})
        .to(".rect1",1,{opacity:1})
        .to(".boatIcons",1,{transform:"scale(0.8)"})
        .to(".boatIcons",1,{transform:"translate(-80vw,-20vh) scale(0.4)"})

    var end11 = new ScrollMagic.Scene({
        triggerElement:".end11-12-13-14Trigger",
        duration:"1060%"
    })
    .setTween(boats)
    .addTo(controller)


    // GROUP IN

    var group = new TimelineMax()
        .fromTo(".end12Content",1,{transform:"translateY(100vh)"},{transform:"translateY(0)"})
        .fromTo(".groundIcon",1,{left:"100%"},{left:"40%"})
        .fromTo(".group,.chat",1,{left:"100%"},{left:"37%"})
        .fromTo(".chat",1,{opacity:0},{opacity:1})
        .to(".group,.chat,.groundIcon",1,{left:"0%"})
        .fromTo(".groupIcon4",1,{opacity:0,left:"100%"},{opacity:1,left:"50%"})
        .to(".end12Content",1,{transform:"translateX(40vw)"})
        .fromTo(".groupIcons>p",1,{opacity:0},{opacity:1})

    var end12 = new ScrollMagic.Scene({
        triggerElement:".end12Trigger",
        duration:"680%"
    })
    .setTween(group)
    .addTo(controller)


    // CARDS
    var cards = new TimelineMax()
    .fromTo(".responsib>p",1,{opacity:0},{opacity:1})
    .fromTo(".responsib",1,{top:"120%"},{top:0})


    var end13 = new ScrollMagic.Scene({
        triggerElement:".end13Trigger",
        duration:"460%"
    })
    .setTween(cards)
    .addTo(controller)


    // END 14 OUT 

    var end14 = new ScrollMagic.Scene({
        triggerElement:".end14Trigger",
        duration:"110%"
    })
    .setTween(".groupContainer,.responsib",{transform:"translateY(-80vh)"})
    .addTo(controller)



    // ESTELA

    var estelaDG = new TimelineMax()
        .to(".boat>.estelaDG",1,{transform:"translateY(10vh)"})
        .to(".boat>.estelaDG",1,{opacity:0})
        .to(".boat>.estelaDG",1,{transform:"translateY(0)"})
        .to(".boat>.estelaDG",1,{opacity:1})
        .to(".boat>.estelaDG",1,{transform:"translateY(6vh)"})
        .to(".boat>.estelaDG",1,{opacity:0})
        .to(".boat>.estelaDG",1,{transform:"translateY(0)"})
        .to(".boat>.estelaDG",1,{opacity:1})
        .to(".boat>.estelaDG",1,{transform:"translateY(8vh)"})
        .to(".boat>.estelaDG",1,{opacity:0})
        .to(".boat>.estelaDG",1,{transform:"translateY(0)"})
        .to(".boat>.estelaDG",1,{opacity:1})
        .to(".boat>.estelaDG",1,{transform:"translateY(5vh)"})
        .to(".boat>.estelaDG",1,{opacity:0})
        .to(".boat>.estelaDG",1,{transform:"translateY(0)"})
        .to(".boat>.estelaDG",1,{opacity:1})
        .to(".boat>.estelaDG",1,{transform:"translateY(5vh)"})
        

    
    var end11Icon = new ScrollMagic.Scene({
        triggerElement:".end11-12-13-14Trigger",
        duration:"1060%"
    })
    .setTween(estelaDG)
    .addTo(controller)

    
    var estelaDp = new TimelineMax()
        .to(".boat>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".boat>.estelaDp",1,{opacity:0})
        .to(".boat>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaDp",1,{opacity:1})
        .to(".boat>.estelaDp",1,{transform:"translate(-0.3vw,4vh)"})
        .to(".boat>.estelaDp",1,{opacity:0})
        .to(".boat>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaDp",1,{opacity:1})
        .to(".boat>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".boat>.estelaDp",1,{opacity:0})
        .to(".boat>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaDp",1,{opacity:1})
        .to(".boat>.estelaDp",1,{transform:"translate(-0.2vw,4vh)"})
        .to(".boat>.estelaDp",1,{opacity:0})
        .to(".boat>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaDp",1,{opacity:1})
        .to(".boat>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".boat>.estelaDp",1,{opacity:0})
        .to(".boat>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaDp",1,{opacity:1})
        .to(".boat>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".boat>.estelaDp",1,{opacity:0})
        .to(".boat>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaDp",1,{opacity:1})
        .to(".boat>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".boat>.estelaDp",1,{opacity:0})
        .to(".boat>.estelaDp",1,{transform:"translate(0,0)"})

    
    var end11Icon = new ScrollMagic.Scene({
        triggerElement:".end11-12-13-14Trigger",
        duration:"1060%"
    })
    .setTween(estelaDp)
    .addTo(controller)

    
    var estelaIG = new TimelineMax()
        .to(".boat>.estelaIG",1,{transform:"translateY(4vh)"})
        .to(".boat>.estelaIG",1,{opacity:0})
        .to(".boat>.estelaIG",1,{transform:"translateY(0)"})
        .to(".boat>.estelaIG",1,{opacity:1})
        .to(".boat>.estelaIG",1,{transform:"translateY(9vh)"})
        .to(".boat>.estelaIG",1,{opacity:0})
        .to(".boat>.estelaIG",1,{transform:"translateY(0)"})
        .to(".boat>.estelaIG",1,{opacity:1})
        .to(".boat>.estelaIG",1,{transform:"translateY(5vh)"})
        .to(".boat>.estelaIG",1,{opacity:0})
        .to(".boat>.estelaIG",1,{transform:"translateY(0)"})
        .to(".boat>.estelaIG",1,{opacity:1})
        .to(".boat>.estelaIG",1,{transform:"translateY(6vh)"})
        .to(".boat>.estelaIG",1,{opacity:0})
        .to(".boat>.estelaIG",1,{transform:"translateY(0)"})
        .to(".boat>.estelaDG",1,{opacity:1})
        .to(".boat>.estelaIG",1,{transform:"translateY(6vh)"})
        .to(".boat>.estelaIG",1,{opacity:0})
        .to(".boat>.estelaIG",1,{transform:"translateY(0)"})

    
    var end11Icon = new ScrollMagic.Scene({
        triggerElement:".end11-12-13-14Trigger",
        duration:"1060%"
    })
    .setTween(estelaIG)
    .addTo(controller)

    
    var estelaIp = new TimelineMax()
        .to(".boat>.estelaIp",1,{transform:"translate(0.1vw,2vh)"})
        .to(".boat>.estelaIp",1,{opacity:0})
        .to(".boat>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaIp",1,{opacity:1})
        .to(".boat>.estelaIp",1,{transform:"translateY(2vh)"})
        .to(".boat>.estelaIp",1,{opacity:0})
        .to(".boat>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaIp",1,{opacity:1})
        .to(".boat>.estelaIp",1,{transform:"translate(0.3vw,2vh)"})
        .to(".boat>.estelaIp",1,{opacity:0})
        .to(".boat>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaIp",1,{opacity:1})
        .to(".boat>.estelaIp",1,{transform:"translateY(2vh)"})
        .to(".boat>.estelaIp",1,{opacity:0})
        .to(".boat>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaIp",1,{opacity:1})
        .to(".boat>.estelaIp",1,{transform:"translate(0.4vw,2vh)"})
        .to(".boat>.estelaIp",1,{opacity:0})
        .to(".boat>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaIp",1,{opacity:1})
        .to(".boat>.estelaIp",1,{transform:"translateY(2vh)"})
        .to(".boat>.estelaIp",1,{opacity:0})
        .to(".boat>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boat>.estelaIp",1,{opacity:1})
        .to(".boat>.estelaIp",1,{transform:"translateY(2vh)"})
        

    
    var end11Icon = new ScrollMagic.Scene({
        triggerElement:".end11-12-13-14Trigger",
        duration:"1060%"
    })
    .setTween(estelaIp)
    .addTo(controller)

    
}