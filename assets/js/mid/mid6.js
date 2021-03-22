export default function mid6 (controller) {

    // SOUNDS

    var audio1 = new ScrollMagic.Scene({
        triggerElement:".mid6Trigger-icons"
    })
    .on("enter",function(e){
        launch.play()
    })
    .addTo(controller)



    // ANIMACIONES
    var mid6T = new TimelineMax()
        .fromTo("#sub-containerMid6>h3",1,{transform:"translateY(-30vh)"},{transform:"translateY(0)"})

    var mid6 = new ScrollMagic.Scene({
        triggerElement:".mid6Trigger-title",
        duration:"75%"
    })
    .setTween(mid6T)
    .addTo(controller)

    if (window.innerWidth>600) {
        var mid6Icons = new TimelineMax()
            .fromTo(".mid6Content",1,{right:"-80%",top:"50%"},{right:"65%",top:"-30%"})
    } else if (window.innerWidth<=600) {
        var mid6Icons = new TimelineMax()
            .fromTo(".mid6Content",1,{right:"-80%",top:"10%"},{right:"100%",top:"-35%"})
    }

    var mid5 = new ScrollMagic.Scene({
        triggerElement:".mid6Trigger-icons",
        duration:"375%"
    })
    .setTween(mid6Icons)
    .addTo(controller)
    

}