export default function intro (controller) {

    var introTitle = new TimelineMax()
    .fromTo("#introTit",1,{opacity:0},{opacity:1})
    .fromTo(".introTit-container>img",1,{width:0},{width:"27%"})
    .fromTo(".introSubT",1,{opacity:0},{opacity:1})
    .fromTo(".introIcons,p:nth-child(4)",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})

    var scene1 = new ScrollMagic.Scene({
        duration:2000,
    })
    .setTween(introTitle)
    .addIndicators()
    .addTo(controller)
}

