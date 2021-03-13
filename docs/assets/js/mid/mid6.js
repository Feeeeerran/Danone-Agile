export default function mid6 (controller) {

    var mid6T = new TimelineMax()
        .fromTo("#sub-containerMid6>h3",1,{transform:"translateY(-30vh)"},{transform:"translateY(0)"})

    var mid6 = new ScrollMagic.Scene({
        triggerElement:".mid6Trigger-title",
        duration:500
    })
    .setTween(mid6T)
    .addIndicators()
    .addTo(controller)

    var mid6Icons = new TimelineMax()
        .fromTo(".mid6Content",1,{right:"-80%",top:"50%"},{right:"65%",top:"-30%"})

    var mid5 = new ScrollMagic.Scene({
        triggerElement:".mid6Trigger-icons",
        duration:2500
    })
    .setTween(mid6Icons)
    .addIndicators()
    .addTo(controller)
    

}