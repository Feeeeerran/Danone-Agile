export default function how (controller) {
    var howT = new ScrollMagic.Scene({
        triggerElement:".howTrigger-title",
    })
    .setClassToggle("#howTit","typed")
    .addIndicators()
    .addTo(controller);


    var howContent = new TimelineMax()
        .fromTo(".howContent>p",1,{transform:"translateY(100vh)"},{transform:"translateY(0)"})
        .fromTo(".howIcon1",1.5,{transform:"scale(0)"},{transform:"scale(1.5)"})
        .to(".howIcon1",1,{transform:"scale(1.5)"})
        .to(".light",1,{fill:"yellow"})
        .fromTo(".keepS",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})
        

    
    var how = new ScrollMagic.Scene({
        triggerElement:".howTrigger-content",
        duration:2500
    })
    .setTween(howContent)
    .addIndicators()
    .addTo(controller)




}