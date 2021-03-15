export default function intro (controller) {

 // SONIDOS

    // var movimiento = new Audio();
    // movimiento.src = "sounds/movimiento.mp3";
    var movimientoo = document.getElementById("audio1");


    var audio1 = new ScrollMagic.Scene({
        triggerElement:".introSound-movimiento"
    })
    .on("enter",function(e){
        movimientoo.play()
    })
    .addTo(controller)
    
    
    var click = new Audio();
    click.src = "../../../sounds/click.mp3";
    var audio1 = new ScrollMagic.Scene({
        triggerElement:".introSound-click"
    })
    .on("enter",function(e){
        click.play()
    })
    .addTo(controller)






    var introTitle = new TimelineMax()
    .fromTo("#introTit",1,{opacity:0},{opacity:1})
    .fromTo(".introTit-container>img",1,{width:0},{width:"27%"})
    .fromTo(".introSubT",1,{opacity:0},{opacity:1})
    .fromTo(".introIcons,p:nth-child(4)",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})

    var scene1 = new ScrollMagic.Scene({
        duration:2000,
    })
    .setTween(introTitle)
    .addTo(controller)


}

