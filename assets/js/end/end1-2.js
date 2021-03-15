export default function end1_2(controller) {

    // SOUNDS 

    var marcador = new Audio();
    marcador.src = "../../../sounds/marcador.mp3";
    var audio1 = new ScrollMagic.Scene({
        triggerElement:".end2Trigger"
    })
    .on("enter",function(e){
        marcador.play()
    })
    .addTo(controller)





    // ANIMACIONES
    var end1T = new ScrollMagic.Scene({
        triggerElement:".end1Trigger",
    })
    .setClassToggle("#sub-containerEnd1>h3","typed")
    .addTo(controller);


    
    var end1An1 = new TimelineMax()
        .fromTo(".end1-2Icon1",1,{left:"-50vw"},{left:"0vw"})
    
    var end1 = new ScrollMagic.Scene({
        triggerElement:".end1Trigger-movs",
        duration:2000
    })
    .setTween(end1An1)
    .addTo(controller);
    
    var end1An2 = new TimelineMax()
        .fromTo(".end1-2Icon2",1,{top:"80vh"},{top:"15vh"})
    
    var end1 = new ScrollMagic.Scene({
        triggerElement:".end1Trigger-movs",
        duration:2000
    })
    .setTween(end1An2)
    .addTo(controller);
    
    var end1An3 = new TimelineMax()
        .fromTo(".end1-2Icon3",1,{left:"50vw"},{left:"0vw"})
    
    var end1 = new ScrollMagic.Scene({
        triggerElement:".end1Trigger-movs",
        duration:2000
    })
    .setTween(end1An3)
    .addTo(controller);
    
    
    var end1An4 = new TimelineMax()
        .fromTo(".fillS",1,{opacity:0},{opacity:1})
    
    var end1 = new ScrollMagic.Scene({
        triggerElement:".end1Trigger-fills",
        duration:500
    })
    .setTween(end1An4)
    .addTo(controller);
    
    
    var end1An4 = new TimelineMax()
        .to(".end1-2Icon7,.end1-2Icon8,.end1-2Icon9",1,{rotation:360})
        .to(".end1-2Icon7,.end1-2Icon8,.end1-2Icon9,.end1-2Icon5",1,{transform:"translateY(-80vh) scale(0.1)"})
    
    var end1 = new ScrollMagic.Scene({
        triggerElement:".end1Trigger-fills",
        duration:1500
    })
    .setTween(end1An4)
    .addTo(controller);
    
    var end1An5 = new TimelineMax()
        .to(".end1-2Icon2",1,{top:"-5vh"})
    
    var end1 = new ScrollMagic.Scene({
        triggerElement:".end2Trigger",
        duration:500
    })
    .setTween(end1An5)
    .addTo(controller);
    
    var end1An6 = new TimelineMax()
        .fromTo(".end1-2Icon4,.end1-2Icon6",1,{top:"70vh"},{top:"55vh"})
    
    var end1 = new ScrollMagic.Scene({
        triggerElement:".end2Trigger",
        duration:500
    })
    .setTween(end1An6)
    .addTo(controller);
    
    
    var container = new TimelineMax()
        .to(".iconsContainer",1,{top:"-40vh"})
        .fromTo("#sub-containerEnd2>h3",1,{transform:"translateY(40vh)"},{transform:"translateY(0vh)"})
        .to(".iconsContainer,#sub-containerEnd2>h3",1,{opacity:1})
        .to(".iconsContainer,#sub-containerEnd2>h3",1,{opacity:0})
    
    var end1 = new ScrollMagic.Scene({
        triggerElement:".end2Trigger",
        duration:1300
    })
    .setTween(container)
    .addTo(controller);
    
}