import what from "./what-script.js";
import when from "./when-script.js";
import why from "./why-script.js";
import how from "./how-script.js";

export default function menu(controller) {

    var menuQuestions = new TweenMax
        .fromTo(".menuQuestions-container #menuQuestions",1,{left:"-100vw"},{left:0})

    var menuQ = new ScrollMagic.Scene({
        triggerElement:".menuTrigger",
        duration:500
    })
    .setTween(menuQuestions)
    .addTo(controller);


    var menuQout = new ScrollMagic.Scene({
        triggerElement:".menuTrigger-out",
        duration:200
    })
    .setTween(".menuQuestions-container",1,{transform:"translateY(-20vh)"})
    .addTo(controller)

    var menuActive = new ScrollMagic.Scene({
        triggerElement:".whatTrigger-title",
        duration:3200
    })
    .setClassToggle("#what","menuActive")
    .addTo(controller)
    
    var menuActive = new ScrollMagic.Scene({
        triggerElement:".whenTrigger-title",
        duration:3450
    })
    .setClassToggle("#when","menuActive")
    .addTo(controller)
    
    var menuActive = new ScrollMagic.Scene({
        triggerElement:".whyTrigger-title",
        duration:4300
    })
    .setClassToggle("#why","menuActive")
    .addTo(controller)
    
    var menuActive = new ScrollMagic.Scene({
        triggerElement:".howTrigger-title",
        duration:3500
    })
    .setClassToggle("#how","menuActive")
    .addTo(controller)






    what(controller)
    when(controller)
    why(controller)
    how(controller)
}