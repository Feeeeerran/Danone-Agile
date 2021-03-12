import what from "./what-script.js";
import when from "./when-script.js";
import why from "./why-script.js";
import how from "./how-script.js";

export default function menu(controller) {

    var menuQuestions = new TweenMax
        .fromTo("#menuQuestions li",1,{left:"-100vw"},{left:0})

    var menuQ = new ScrollMagic.Scene({
        triggerElement:".menuTrigger",
        duration:500
    })
    .setTween(menuQuestions)
    .addIndicators()
    .addTo(controller);


    var menuQout = new ScrollMagic.Scene({
        triggerElement:".menuTrigger-out",
        duration:200
    })
    .setTween("#menuQuestions",1,{transform:"translateY(-20vh)"})
    .addIndicators()
    .addTo(controller)


    what(controller)
    when(controller)
    why(controller)
    how(controller)
}