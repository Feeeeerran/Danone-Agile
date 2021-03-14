export default function end11_12_13_14(controller) {

    // BOATS IN

    var boats = new TimelineMax()
        .fromTo(".boat",1,{transform:"translateY(100vh)"},{transform:"translateY(0)"})
        .fromTo(".end11Content",1,{transform:"translateY(-100vh)"},{transform:"translateY(0)"})
        .fromTo(".boatIcons>p",1,{opacity:0},{opacity:1})
        .fromTo(".rect1",1,{opacity:0},{opacity:1})
        .fromTo(".rect2",1,{opacity:0},{opacity:1})
        .to(".rect2",1,{opacity:1})
        .to(".rect2",1,{opacity:1})
        .to(".rect2",1,{opacity:1})
        .to(".boatIcons",1,{transform:"translate(-80vw,-20vh) scale(0.8)"})

    var end11 = new ScrollMagic.Scene({
        triggerElement:".end11-12-13-14Trigger",
        duration:7000
    })
    .setTween(boats)
    .addTo(controller)


    // GROUP IN

    var group = new TimelineMax()
        .fromTo(".end12Content",1,{transform:"translateY(100vh)"},{transform:"translateY(0)"})
        .fromTo(".groundIcon",1,{opacity:0,transform:"translateX(80vw)"},{opacity:1,transform:"translateX(36vw)"})
        .fromTo(".groupFirst",1,{opacity:0,transform:"translateX(80vw)"},{opacity:1,transform:"translateX(34vw)"})
        .fromTo(".chat>.chatIcon1,.chat>.chatIcon2",1,{opacity:0,transform:"translateX(34vw)"},{opacity:0,transform:"translateX(34vw)"})
        .to(".chatIcon1",1,{opacity:1,})
        .to(".chatIcon2",1,{opacity:1,})
        .to(".groupFirst,.groundIcon,.chatIcon1,.chatIcon2",1,{transform:"translateX(0)"})
        .to(".end12Content",1,{transform:"translateX(80vw)"})
        .fromTo(".groupIcon4",1,{opacity:0,transform:"translateX(50vw)"},{opacity:1,transform:"translateX(0)"})
        .to(".groupIcons",1,{top:"-7vh"})
        .fromTo(".groupIcons>p",1,{opacity:0},{opacity:1})

    var end12 = new ScrollMagic.Scene({
        triggerElement:".end12Trigger",
        duration:4500
    })
    .setTween(group)
    .addTo(controller)


    // CARDS
    var cards = new TimelineMax()
    .fromTo(".responsib>.cardLeft",1,{top:"40vh"},{top:0})
    .fromTo(".responsib>.cardCenter",1,{top:"120%"},{top:0})
    .fromTo(".responsib>.cardRight",1,{top:"120%"},{top:0})
    .fromTo(".responsib>p",1,{opacity:0},{opacity:1})

    .to(".responsib>.cardLeft>.back",1,{transform:"rotateY(90deg)"})
    .fromTo(".responsib>.cardLeft>.flip",1,{transform:"rotateY(90deg)"},{transform:"rotateY(0)"})
    
    .to(".responsib>.cardCenter>.back",1,{transform:"rotateY(90deg)"})
    .fromTo(".responsib>.cardCenter>.flip",1,{transform:"rotateY(90deg)"},{transform:"rotateY(0)"})

    .to(".responsib>.cardRight>.back",1,{transform:"rotateY(90deg)"})
    .fromTo(".responsib>.cardRight>.flip",1,{transform:"rotateY(90deg)"},{transform:"rotateY(0)"})

    var end13 = new ScrollMagic.Scene({
        triggerElement:".end13Trigger",
        duration:3000
    })
    .setTween(cards)
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
        duration:7000
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
        duration:7000
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
        duration:7000
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
        duration:7000
    })
    .setTween(estelaIp)
    .addTo(controller)

    
}