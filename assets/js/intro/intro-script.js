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

    var introTitle = new TimelineMax()
    .fromTo(".introTit-container>img",1,{width:0},{width:"27%"})

    var scene1 = new ScrollMagic.Scene({
        duration:1000,
    })
    .setTween(introTitle)
    .addTo(controller)


}

