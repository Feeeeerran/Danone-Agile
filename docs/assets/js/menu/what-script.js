export default function what (controller) {


    var whatT = new ScrollMagic.Scene({
        triggerElement:".whatTrigger-title",
    })
    .setClassToggle("#whatTit","typed")
    .addTo(controller);


   var whatContent = new TimelineMax()
    .fromTo(".whatContent>.primerP",1,{opacity:0},{opacity:1})
    .fromTo(".whatContent>.whatIcon3",1,{transform:"translate(100vw,0)"},{transform:"translate(0,0)"})
    .fromTo(".whatContent>.segundoP",1,{opacity:0},{opacity:1})
    .fromTo(".whatIcon2",1,{transform:"scale(0)"},{transform:"scale(1.2)"},)
    .to(".whatIcon2",1,{transform:"scale(0.8)"})
    .to(".whatIcon2",1,{transform:"scale(0.8)"})
    .to(".whatContent,#whatTit",1,{transform:"translateY(-50vh)"})


    var what = new ScrollMagic.Scene({
        triggerElement:".whatTrigger-content",
        duration:2500
    })
    .setTween(whatContent)
    .addTo(controller)

}