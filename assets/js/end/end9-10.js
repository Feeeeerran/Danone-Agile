export default function end9_10(controller) {

    var TLeader = new TimelineMax()
        .fromTo(".end9-10Content>img",1,{transform:"translateX(-70vw)"},{transform:"translateX(0)"})
        .fromTo(".contentText",1,{opacity:0},{opacity:1})
        .fromTo(".tribeRes>p",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})
        .fromTo(".tribeRes>.cardLeft",1,{top:"120%"},{top:0})
        .fromTo(".tribeRes>.cardCenter",1,{top:"120%"},{top:0})
        .fromTo(".tribeRes>.cardRight",1,{top:"120%"},{top:0})
        .to(".tribeRes>.cardLeft>.back",1,{transform:"rotateY(90deg)"})
        .fromTo(".tribeRes>.cardLeft>.flip",1,{transform:"rotateY(90deg)"},{transform:"rotateY(0)"})

        .to(".tribeRes>.cardCenter>.back",1,{transform:"rotateY(90deg)"})
        .fromTo(".tribeRes>.cardCenter>.flip",1,{transform:"rotateY(90deg)"},{transform:"rotateY(0)"})

        .to(".tribeRes>.cardRight>.back",1,{transform:"rotateY(90deg)"})
        .fromTo(".tribeRes>.cardRight>.flip",1,{transform:"rotateY(90deg)"},{transform:"rotateY(0)"})



    var end9 = new ScrollMagic.Scene({
        triggerElement:".end9-10Trigger",
        // duration:"1200%"
        duration:"600%"
    })
    .setTween(TLeader)
    .addTo(controller)

    var end10 = new ScrollMagic.Scene({
        triggerElement:".end10Trigger-out",
        duration:"110%"
    })
    .setTween(".end9-10Content-container",{transform:"translateY(-100vh)"})
    .addTo(controller)
    
}