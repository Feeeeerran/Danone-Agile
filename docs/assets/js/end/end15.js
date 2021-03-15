export default function end15(controller) {

    var end15T = new TimelineMax()
        .fromTo("#sub-containerEnd15>h3,#sub-containerEnd15>svg",1,{transform:"translateY(80vh)"},{transform:"translateY(0)"})

    var end15 = new ScrollMagic.Scene({
        triggerElement:".end15Trigger",
        duration:800
    })
    .setTween(end15T)
    .addTo(controller)

    
}