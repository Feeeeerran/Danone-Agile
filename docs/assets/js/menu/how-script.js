export default function how (controller) {


    // SOUNDS 

    var audio1 = new ScrollMagic.Scene({
        triggerElement:".howSound-lampara"
    })
    .on("enter",function(e){
        lampara.play()
    })
    .addTo(controller)

    
    var audio1 = new ScrollMagic.Scene({
        triggerElement:".howSound-papel"
    })
    .on("enter",function(e){
        papel.play()
    })
    .addTo(controller)






    // ANIMACIONES 

    var howT = new ScrollMagic.Scene({
        triggerElement:".howTrigger-title",
    })
    .setClassToggle("#howTit","typed")
    .addTo(controller);


    var howContent = new TimelineMax()
        .fromTo(".howContent>p",1,{transform:"translateY(100vh)"},{transform:"translateY(0)"})
        .fromTo(".howIcon1",1.5,{transform:"scale(0)"},{transform:"scale(1.5)"})
        .to(".howIcon1",1,{transform:"scale(1.5)"})
        .to(".howIcon1>.cls-3",1,{fill:"yellow"})
        .fromTo(".logo",1,{transform:"rotateX(-90deg)"},{transform:"rotateX(0deg) rotate(-20deg)"})
        .to(".logo",1,{transform:"rotateX(90deg) rotate(10deg) skewY(5deg)"})
        .to(".logo",1,{transform:"rotateX(180deg) rotateY(20deg)"})
        // .to(".logo",1,{transform:"rotateX(270deg)"})
        .to(".logo",1,{transform:"rotateX(360deg)  rotate(20deg)"})
        .fromTo(".keepS",1,{transform:"translateY(50vh)"},{transform:"translateY(0)"})
        

    
    var how = new ScrollMagic.Scene({
        triggerElement:".howTrigger-content",
        duration:2500
    })
    .setTween(howContent)
    .addTo(controller)




}