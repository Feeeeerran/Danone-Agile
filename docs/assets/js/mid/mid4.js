export default function mid4 (controller) {

    var mid4T = new TimelineMax()
        .fromTo("#sub-containerMid4>h3",1,{transform:"translateY(-50vh)"},{transform:"translateY(0)"})

    var mid4 = new ScrollMagic.Scene({
        triggerElement:".mid4Trigger-title",
        duration:500
    })
    .setTween(mid4T)
    .addTo(controller)

}