export default function mid1_2 (controller) {


    // SOUNDS

    var audio1 = new ScrollMagic.Scene({
        triggerElement:".girlSound-alert"
    })
    .on("enter",function(e){
        alerta.play()
    })
    .addTo(controller)


    var audio1 = new ScrollMagic.Scene({
        triggerElement:".girlSound-notificacion"
    })
    .on("enter",function(e){
        notificacion.play()
    })
    .addTo(controller)





    // ANIMACIONES

    var mid1_2T1 = new ScrollMagic.Scene({
        triggerElement:".mid1-2Trigger-title1",
    })
    .setClassToggle("#mid1Tit1","typed")
    .addTo(controller);
    
    var mid1_2T2 = new ScrollMagic.Scene({
        triggerElement:".mid1-2Trigger-title2",
    })
    .setClassToggle("#mid1Tit2","typed")
    .addTo(controller);



    var girl = new TimelineMax()
        .fromTo(".midIcon-girl",1,{transform:"translateY(60vh)"},{transform:"translateY(0)"})
        .fromTo(".girlLine1",1,{transform:"scale(0)"},{transform:"scale(1)"})
        .fromTo(".girlLine2",1,{transform:"scale(0)"},{transform:"scale(1)"})
        .fromTo(".girlLine3",1,{transform:"scale(0)"},{transform:"scale(1)"})
        .fromTo(".girlLine4",1,{transform:"scale(0)"},{transform:"scale(1)"})
        .fromTo(".girlLine5",1,{transform:"scale(0)"},{transform:"scale(1)"})

    var midGirl = new ScrollMagic.Scene({
        triggerElement:".girlTrigger",
        duration:"500%"
    })
    .setTween(girl)
    .addTo(controller)


    var girlQuestion = new TimelineMax()
        .fromTo("#sub-containerMid2>h3",1,{opacity:0,transform:"translateY(-20vh)"},{opacity:1,transform:"translateY(0vh)"})
        .to(".girlLine",1,{opacity:0})
        .fromTo(".midIcon-question",1,{opacity:0,transform:"translateX(50vw)"},{opacity:1,transform:"translateX(0)"})
        .to(".girlContainer",1,{top:"-100vh"})
        // .to(".girlContainer,.mid2Icon,#sub-containerMid2>h3",1,{transform:"translateY(-60vh)",opacity:0})

    var midGirl2 = new ScrollMagic.Scene({
        triggerElement:".girlTrigger-question",
        duration:"300%"
    })
    .setTween(girlQuestion)
    .addTo(controller)



}