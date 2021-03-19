export default function end16(controller) {

    var end16T = new TimelineMax()
        .to("#end>.backgroundContainer",1,{opacity:0})
        .fromTo("#sub-containerEnd16>h3",1,{opacity:0},{opacity:1})
        
    var end16 = new ScrollMagic.Scene({
        triggerElement:".end16Trigger",
        duration:"120%"
    })
    .setTween(end16T)
    .addTo(controller)


    // ICONS

    var end16Icons = new TimelineMax()
        .fromTo(".top1>svg",1,{transform:"scale(0)"},{transform:"scale(1)"})
        .fromTo(".top1>p",1,{opacity:0},{opacity:1})

        .fromTo(".midIcon1>path:nth-child(1)",1,{opacity:0},{opacity:1})
        .fromTo(".midIcon1>.cls-2",1,{opacity:0},{opacity:1})
        .fromTo(".midIcon1>.cls-2",1,{strokeDasharray:"23 90"},{strokeDasharray:"11.43 11.43"})
        .fromTo(".midIcon1>path:nth-child(3)",1,{opacity:0},{opacity:1})

        .fromTo(".bottom1>svg",1,{opacity:0,transform:"translateY(-5vh)"},{opacity:1,transform:"translateY(0)"})
        .fromTo(".bottom1>p",1,{opacity:0,transform:"translateY(5vh)"},{opacity:1,transform:"translateY(0)"})

        .fromTo(".midIcon2>path:nth-child(1)",1,{opacity:0},{opacity:1})
        .fromTo(".midIcon2>.cls-2",1,{opacity:0},{opacity:1})
        .fromTo(".midIcon2>.cls-2",1,{strokeDasharray:"23 90"},{strokeDasharray:"11.43 11.43"})
        .fromTo(".midIcon2>path:nth-child(3)",1,{opacity:0},{opacity:1})

        .fromTo(".top2>svg",1,{opacity:0,transform:"translate(-3.5vw,8vh)"},{opacity:1,transform:"translate(0,0)"})
        .fromTo(".top2>p",1,{opacity:0,transform:"translate(5vh)"},{opacity:1,transform:"translateY(0)"})

        .fromTo(".midIcon3>.cls-2",1,{transform:"translate(-13vw, -11vh) rotate(-35deg)"},{transform:"translate(0,0)"})
        .fromTo(".midIcon3>path:nth-child(3)",1,{opacity:0},{opacity:0})
        .fromTo(".midIcon3>path:nth-child(1)",1,{opacity:0},{opacity:1})

        .fromTo(".bottom2>svg",1,{opacity:0,rotation:-180},{opacity:1,rotation:0})
        .fromTo(".bottom2>p",1,{opacity:0,transform:"translateY(5vh)"},{opacity:1,transform:"translateY(0)"})

        .fromTo(".midIcon4>path:nth-child(1)",1,{opacity:0},{opacity:1})
        .fromTo(".midIcon4>.cls-2",1,{opacity:0},{opacity:1})
        .fromTo(".midIcon4>.cls-2",1,{strokeDasharray:"23 90"},{strokeDasharray:"11.43 11.43"})
        .fromTo(".midIcon4>path:nth-child(3)",1,{opacity:0},{opacity:1})

        .fromTo(".top3>svg",1,{opacity:0,transform:"scale(3)"},{opacity:1,transform:"scale(1.5) translateY(-1vh)"})
        .fromTo(".top3>p",1,{transform:"scale(0)"},{transform:"scale(1)"})

        .fromTo(".midIcon5>path:nth-child(1)",1,{opacity:0},{opacity:1})
        .fromTo(".midIcon5>.cls-2",1,{opacity:0},{opacity:1})
        .fromTo(".midIcon5>.cls-2",1,{strokeDasharray:"23 90"},{strokeDasharray:"11.43 11.43"})
        .fromTo(".midIcon5>path:nth-child(3)",1,{opacity:0},{opacity:1})

        .fromTo(".bottom3>svg",1,{opacity:0,transform:"scale(0)"},{opacity:1,transform:"scale(1.2)"})
        .to(".bottom3>svg",1,{transform:"scale(1)"})
        .fromTo(".bottom3>p",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})



    

    var end16 = new ScrollMagic.Scene({
        triggerElement:".end16Trigger-icons",
        duration:"1820%"
    })
    .setTween(end16Icons)
    .addTo(controller)

}