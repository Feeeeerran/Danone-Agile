export default function end4_5_6(controller) {



    // SOUNDS

    // var audio1 = new ScrollMagic.Scene({
    //     triggerElement:".end4-5-6Trigger-boat"
    // })
    // .on("enter",function(e){
    //     agua.play()
    // })
    // .addTo(controller)
    
    
    // var audio1 = new ScrollMagic.Scene({
    //     triggerElement:".end4-5-6Trigger-boat"
    // })
    // .on("enter",function(e){
    //     agua.play()
    // })
    // .addTo(controller)







    // ANIMACIONES

    // BOAT IN
    var boatIn = new TimelineMax()
        .fromTo(".end4-5-6Icon",0.1,{transform:"translateY(100vh) scale(0.5)"},{transform:"translateY(10vh) scale(0.8)"})
        .fromTo(".end4-5-6Icon>p",0.1,{opacity:0,transform:"translateY(-20vh)"},{opacity:1,transform:"translateY(0)"})
        .to(".end4-5-6Icon",1,{transform:"scale(1)"})
    
    
    var end4Icon = new ScrollMagic.Scene({
        triggerElement:".end4-5-6Trigger-boat",
        duration:8000
    })
    .setTween(boatIn)
    .addTo(controller)

    //  END4 CONTENT

    var end4T = new TimelineMax()
        .fromTo(".end4Content>p",1,{transform:"translateX(-50vw)"},{transform:"translateX(0)"})
        .fromTo(".end4Content>ul",1,{transform:"translateX(35vw)"},{transform:"translateX(2vw)"})
        .fromTo(".end4Content>ul>li:nth-child(1)",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})
        .fromTo(".end4Content>ul>li:nth-child(2)",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})
        .fromTo(".end4Content>ul>li:nth-child(3)",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})
        .fromTo(".end4Content>ul>li:nth-child(4)",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})
    
    
    var end4T = new ScrollMagic.Scene({
        triggerElement:".end4Trigger-content",
        duration:3000
    })
    .setTween(end4T)
    .addTo(controller)



    // END 5 CONTENT

    var end4Cont = new TimelineMax()
        .fromTo(".keyRoles",1,{transform:"translateX(-50vw)"},{transform:"translateX(0)"})
        .fromTo(".keyRoles>li:nth-child(1)",1,{transform:"translateY(60vh)"},{transform:"translateY(0)"})
        .fromTo(".keyRoles>li:nth-child(2)",1,{transform:"translateY(60vh)"},{transform:"translateY(0)"})
        .fromTo(".keyRoles>li:nth-child(3)",1,{transform:"translateY(60vh)"},{transform:"translateY(0)"})

        .fromTo(".info1>img",1,{transform:"scale(0)"},{transform:"scale(0.2) rotateY(65deg) skewX(10deg)"})
        .to(".info1>img",1,{opacity:0})
        .to(".info1>img",1,{opacity:1,transform:"scale(0.4) rotateX(50deg) skewY(30deg)"})
        .to(".info1>img",1,{opacity:0})
        .to(".info1>img",1,{opacity:1,transform:"scale(0.6) rotateX(15deg) SkewX(25deg)"})
        .to(".info1>img",1,{opacity:0})
        .to(".info1>img",1,{opacity:1,transform:"scale(0.8) rotate(-10deg)"})
        .to(".info1>img",1,{opacity:0})
        .to(".info1>img",1,{opacity:1,transform:"scale(1)"})
        .fromTo(".info1>p",1,{opacity:0},{opacity:1})

        .fromTo(".info2>img",1,{transform:"scale(0)"},{transform:"scale(0.2) rotateY(65deg) skewX(10deg)"})
        .to(".info2>img",1,{opacity:0})
        .to(".info2>img",1,{opacity:1,transform:"scale(0.4) rotateX(50deg) skewY(30deg)"})
        .to(".info2>img",1,{opacity:0})
        .to(".info2>img",1,{opacity:1,transform:"scale(0.6) rotateX(15deg) SkewX(25deg)"})
        .to(".info2>img",1,{opacity:0})
        .to(".info2>img",1,{opacity:1,transform:"scale(0.8) rotate(-10deg)"})
        .to(".info2>img",1,{opacity:0})
        .to(".info2>img",1,{opacity:1,transform:"scale(1)"})
        .fromTo(".info2>p",1,{opacity:0},{opacity:1})
        
        .fromTo(".info3>img",1,{transform:"scale(0)"},{transform:"scale(0.2) rotateY(65deg) skewX(10deg)"})
        .to(".info3>img",1,{opacity:0})
        .to(".info3>img",1,{opacity:1,transform:"scale(0.4) rotateX(50deg) skewY(30deg)"})
        .to(".info3>img",1,{opacity:0})
        .to(".info3>img",1,{opacity:1,transform:"scale(0.6) rotateX(15deg) SkewX(25deg)"})
        .to(".info3>img",1,{opacity:0})
        .to(".info3>img",1,{opacity:1,transform:"scale(0.8) rotate(-10deg)"})
        .to(".info3>img",1,{opacity:0})
        .to(".info3>img",1,{opacity:1,transform:"scale(1)"})
        .fromTo(".info3>p",1,{opacity:0},{opacity:1})

        



    var end5 = new ScrollMagic.Scene({
        triggerElement:".end5-6Trigger-leftContent",
        duration:6000
    })
    .setTween(end4Cont)
    .addTo(controller)


    // BOAT OUT


    var boatOut = new ScrollMagic.Scene({
        triggerElement:".end6Trigger-out",
        duration:900
    })
    .setTween(".end4-5-6Icon,.contentContainer",1,{transform:"translateY(-100vh)"})
    .addTo(controller)



    // ESTELA

    var estelaDG = new TimelineMax()
        .to(".boatLarge>.estelaDG",1,{transform:"translateY(10vh)"})
        .to(".boatLarge>.estelaDG",1,{opacity:0})
        .to(".boatLarge>.estelaDG",1,{transform:"translateY(0)"})
        .to(".boatLarge>.estelaDG",1,{opacity:1})
        .to(".boatLarge>.estelaDG",1,{transform:"translateY(6vh)"})
        .to(".boatLarge>.estelaDG",1,{opacity:0})
        .to(".boatLarge>.estelaDG",1,{transform:"translateY(0)"})
        .to(".boatLarge>.estelaDG",1,{opacity:1})
        .to(".boatLarge>.estelaDG",1,{transform:"translateY(8vh)"})
        .to(".boatLarge>.estelaDG",1,{opacity:0})
        .to(".boatLarge>.estelaDG",1,{transform:"translateY(0)"})
        .to(".boatLarge>.estelaDG",1,{opacity:1})
        .to(".boatLarge>.estelaDG",1,{transform:"translateY(5vh)"})
        .to(".boatLarge>.estelaDG",1,{opacity:0})
        .to(".boatLarge>.estelaDG",1,{transform:"translateY(0)"})
        .to(".boatLarge>.estelaDG",1,{opacity:1})
        .to(".boatLarge>.estelaDG",1,{transform:"translateY(5vh)"})
        

    
    var end4Icon = new ScrollMagic.Scene({
        triggerElement:".end4-5-6Trigger-boat",
        duration:10800
    })
    .setTween(estelaDG)
    .addTo(controller)

    
    var estelaDp = new TimelineMax()
        .to(".boatLarge>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".boatLarge>.estelaDp",1,{opacity:0})
        .to(".boatLarge>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaDp",1,{opacity:1})
        .to(".boatLarge>.estelaDp",1,{transform:"translate(-0.3vw,4vh)"})
        .to(".boatLarge>.estelaDp",1,{opacity:0})
        .to(".boatLarge>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaDp",1,{opacity:1})
        .to(".boatLarge>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".boatLarge>.estelaDp",1,{opacity:0})
        .to(".boatLarge>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaDp",1,{opacity:1})
        .to(".boatLarge>.estelaDp",1,{transform:"translate(-0.2vw,4vh)"})
        .to(".boatLarge>.estelaDp",1,{opacity:0})
        .to(".boatLarge>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaDp",1,{opacity:1})
        .to(".boatLarge>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".boatLarge>.estelaDp",1,{opacity:0})
        .to(".boatLarge>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaDp",1,{opacity:1})
        .to(".boatLarge>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".boatLarge>.estelaDp",1,{opacity:0})
        .to(".boatLarge>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaDp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaDp",1,{opacity:1})
        .to(".boatLarge>.estelaDp",1,{transform:"translateY(4vh)"})
        .to(".boatLarge>.estelaDp",1,{opacity:0})
        .to(".boatLarge>.estelaDp",1,{transform:"translate(0,0)"})

    
    var end4Icon = new ScrollMagic.Scene({
        triggerElement:".end4-5-6Trigger-boat",
        duration:10800
    })
    .setTween(estelaDp)
    .addTo(controller)

    
    var estelaIG = new TimelineMax()
        .to(".boatLarge>.estelaIG",1,{transform:"translateY(4vh)"})
        .to(".boatLarge>.estelaIG",1,{opacity:0})
        .to(".boatLarge>.estelaIG",1,{transform:"translateY(0)"})
        .to(".boatLarge>.estelaIG",1,{opacity:1})
        .to(".boatLarge>.estelaIG",1,{transform:"translateY(9vh)"})
        .to(".boatLarge>.estelaIG",1,{opacity:0})
        .to(".boatLarge>.estelaIG",1,{transform:"translateY(0)"})
        .to(".boatLarge>.estelaIG",1,{opacity:1})
        .to(".boatLarge>.estelaIG",1,{transform:"translateY(5vh)"})
        .to(".boatLarge>.estelaIG",1,{opacity:0})
        .to(".boatLarge>.estelaIG",1,{transform:"translateY(0)"})
        .to(".boatLarge>.estelaIG",1,{opacity:1})
        .to(".boatLarge>.estelaIG",1,{transform:"translateY(6vh)"})
        .to(".boatLarge>.estelaIG",1,{opacity:0})
        .to(".boatLarge>.estelaIG",1,{transform:"translateY(0)"})
        .to(".boatLarge>.estelaDG",1,{opacity:1})
        .to(".boatLarge>.estelaIG",1,{transform:"translateY(6vh)"})
        .to(".boatLarge>.estelaIG",1,{opacity:0})
        .to(".boatLarge>.estelaIG",1,{transform:"translateY(0)"})

    
    var end4Icon = new ScrollMagic.Scene({
        triggerElement:".end4-5-6Trigger-boat",
        duration:10800
    })
    .setTween(estelaIG)
    .addTo(controller)

    
    var estelaIp = new TimelineMax()
        .to(".boatLarge>.estelaIp",1,{transform:"translate(0.1vw,2vh)"})
        .to(".boatLarge>.estelaIp",1,{opacity:0})
        .to(".boatLarge>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaIp",1,{opacity:1})
        .to(".boatLarge>.estelaIp",1,{transform:"translateY(2vh)"})
        .to(".boatLarge>.estelaIp",1,{opacity:0})
        .to(".boatLarge>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaIp",1,{opacity:1})
        .to(".boatLarge>.estelaIp",1,{transform:"translate(0.3vw,2vh)"})
        .to(".boatLarge>.estelaIp",1,{opacity:0})
        .to(".boatLarge>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaIp",1,{opacity:1})
        .to(".boatLarge>.estelaIp",1,{transform:"translateY(2vh)"})
        .to(".boatLarge>.estelaIp",1,{opacity:0})
        .to(".boatLarge>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaIp",1,{opacity:1})
        .to(".boatLarge>.estelaIp",1,{transform:"translate(0.4vw,2vh)"})
        .to(".boatLarge>.estelaIp",1,{opacity:0})
        .to(".boatLarge>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaIp",1,{opacity:1})
        .to(".boatLarge>.estelaIp",1,{transform:"translateY(2vh)"})
        .to(".boatLarge>.estelaIp",1,{opacity:0})
        .to(".boatLarge>.estelaIp",1,{transform:"translate(0,0)"})
        .to(".boatLarge>.estelaIp",1,{opacity:1})
        .to(".boatLarge>.estelaIp",1,{transform:"translateY(2vh)"})
        

    
    var end4Icon = new ScrollMagic.Scene({
        triggerElement:".end4-5-6Trigger-boat",
        duration:10800
    })
    .setTween(estelaIp)
    .addTo(controller)

    
}