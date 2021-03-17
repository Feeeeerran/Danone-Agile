export default function why (controller) {

    // SOUNDS

    var audio1 = new ScrollMagic.Scene({
        triggerElement:".whyTrigger-rocket"
    })
    .on("enter",function(e){
        cohete.play()
    })
    .addTo(controller)




    // ANIMACIONES
    var whyT = new ScrollMagic.Scene({
        triggerElement:".whyTrigger-title",
    })
    .setClassToggle("#whyTit","typed")
    .addTo(controller);

    var whyContent = new TimelineMax()
        .fromTo(".whyText>p",1,{opacity:0},{opacity:1})
        .fromTo(".textCheck1",1,{transform:"translateY(80vh)"},{transform:"translateY(0)"})
        .fromTo(".check1",1,{transform:"scale(0)"},{transform:"scale(1.1)"})
        .fromTo(".textCheck2",1,{transform:"translateY(80vh)"},{transform:"translateY(0)"})
        .fromTo(".check2",1,{transform:"scale(0)"},{transform:"scale(1.1)"})
        .fromTo(".textCheck3",1,{transform:"translateY(80vh)"},{transform:"translateY(0)"})
        .fromTo(".check3",1,{transform:"scale(0)"},{transform:"scale(1.1)"})
        .fromTo(".textCheck4",1,{transform:"translateY(80vh)"},{transform:"translateY(0)"})
        .fromTo(".check4",1,{transform:"scale(0)"},{transform:"scale(1.1)"})
        // .to(".whyContent,#whyTit",1,{transform:"translateY(-50vh)"})


    var why = new ScrollMagic.Scene({
        triggerElement:".whyTrigger-content",
        duration:2500
    })
    .setTween(whyContent)
    .addTo(controller)

    var rocket = new TimelineMax()
        .fromTo(".whyIcon",1,{transform:"translateY(20vh)"},{transform:"translateY(-100vh)"}) 
    var whyRocket = new ScrollMagic.Scene({
        triggerElement:".whyTrigger-rocket",
        duration:"400%"
    })
    .setTween(rocket)
    .addTo(controller)

    

}