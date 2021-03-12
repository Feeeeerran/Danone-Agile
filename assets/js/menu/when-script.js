export default function when (controller) {


    var whenT = new ScrollMagic.Scene({
        triggerElement:".whenTrigger-title",
    })
    .setClassToggle("#whenTit","typed")
    .addIndicators()
    .addTo(controller);

    var whenContent = new TimelineMax()
        .fromTo(".whenIcon1",1,{transform:"translateX(-100vw)"},{transform:"translateX(0)"})
        .fromTo(".whenText",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})
        .fromTo(".whenIcon2",1,{transform:"scale(0)"},{transform:"scale(1) rotate(30deg)"})
        .to(".whenIcon2",1,{transform:"rotate(-30deg)"})
        .to(".whenIcon2",1,{transform:"scale(1.1) rotate(0)"})
        .to(".whenContent,#whenTit",1,{filter:"blur(1.5px)"})
        .to(".whenContent,#whenTit",1,{filter:"blur(3px)"})
        .to(".whenContent,#whenTit",1,{filter:"blur(6px)"})


    var when = new ScrollMagic.Scene({
        triggerElement:".whenTrigger-content",
        duration:2300
    })
    .setTween(whenContent)
    .addIndicators()
    .addTo(controller)

}