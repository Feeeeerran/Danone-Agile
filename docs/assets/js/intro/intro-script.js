export default function intro (controller) {

 // SONIDOS


    var audio1 = new ScrollMagic.Scene({
        triggerElement:".introSound-movimiento"
    })
    .on("enter",function(e){
        movimiento.play()
    })
    .addTo(controller)
    
    

    var audio1 = new ScrollMagic.Scene({
        triggerElement:".introSound-click"
    })
    .on("enter",function(e){
        click.play()
    })
    .addTo(controller)



    // ANIMACIONES

    if (window.innerWidth>992) {
        var introTitle = new TimelineMax()
        .fromTo(".introTit-container>img",1,{width:0},{width:"27%"})
        .fromTo(".introSubT",1,{opacity:0},{opacity:1})
    
        var scene1 = new ScrollMagic.Scene({
            duration:"300%"
        })
        .setTween(introTitle)
        .addTo(controller)
    }

    if (window.innerWidth<600) {
        var introTitle = new TimelineMax()
        .fromTo(".introTit-container>img",1,{width:0},{width:"36%"})
        .fromTo(".introSubT",1,{opacity:0},{opacity:1})
    
        var scene1 = new ScrollMagic.Scene({
            duration:"300%"
        })
        .setTween(introTitle)
        .addTo(controller)
    }



}

