function locomotive(){

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()

//-------------------------------Loader-page-----------------------------------//

function loader(){

    var tl = gsap.timeline()
    
    tl.from("#img1",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:0.1       
    })
    
    tl.to("#img1",{
        display:"initial",
        opacity:0,
        duration:.1 
    })
    
       
    tl.from("#img2",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:.1
    })
    
    
    tl.to("#img2",{
        display:"initial",
        opacity:0,
        duration:.1 
    })
    
    
    tl.from("#img3",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:.1   
    })
    
    
    tl.to("#img3",{
        display:"initial",
        opacity:0, 
        duration:.1
    })
    
    
    tl.from("#img4",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:.1 
    })
    

    tl.to("#img4",{
        display:"initial",
        opacity:0,
        duration:.1
    })
    
    
    tl.from("#img5",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:.1 
    })
    
    
    tl.to("#img5",{
        display:"initial",
        opacity:0,
        duration:.1
    })
    
    tl.from("#img6",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:.1 
    })
    
    tl.to("#img6",{
        display:"initial",
        opacity:0, 
        duration:.1
    })
    
    tl.from("#img7",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:.1    
    })
    
    tl.to("#img7",{
        display:"initial",
        opacity:0,
        duration:.1
    })
    

    tl.from("#img8",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:.1  
    })
    

    tl.to("#img8",{
        display:"initial",
        opacity:0,
        duration:.1
    })
    
    
    tl.from("#img9",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:.1
    
    })
    
    tl.to("#img9",{
        display:"initial",
        opacity:0,
        duration:.1
    })
    
    
    
    tl.from("#img10",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:.1 
        
    })
    
    tl.to("#img10",{
        display:"initial",
        opacity:0, 
        duration:.1
    })
    
    
    tl.from("#img11",{
        display:"initial",
        opacity:0,
        stagger:0.1,
        duration:.1
    
    })
    
    tl.to("#img11",{
        display:"initial",
        opacity:0,
        duration:.1
    }) 
}
  
 loader()


//-----------------------------Second-part---------------------------------------//
function page1(){
gsap.from("#page-1",{
    y:1000,
    duration:1.2,
    delay:2,
    scrub:2,

})


gsap.from("#page-1 #nav-1, h2, #nav-2, h3",{
    y:-40,
    duartion:1.6,
    delay:2.5,
    scrub:3,
    opacity:0
})


gsap.from("#page-1-content h1",{
    y:80,
    duration:1.3,
    delay:2.6,
    stagger:1,
    opacity:0
})

gsap.from("#page-1-content p",{
    y:60,
    duration:1,
    delay:2.9,
    opacity:0
})

}
page1()


//------------------------------Page-2----------------------------------//

function page2(){
gsap.to("#page-2 video",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page-2 #video",
        scroller:"#main",
        start:"top 0%",
        end:"top -102%",
        scrub:2,
        pin:true,
    
    }

})
}
page2()



// ---------------------------------Page-3----------------------------------------//

function page3(){
gsap.from("#page-3 span , h5 ",{
    y:100,
    stagger:.4,
    duration:1.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#page-3 ",
        scroller:"#main",
        start:"top 30%",
        end:"top 40%",
        scrub:5,        
    }
 })

}
page3()

//--------------------------------Page-4-------------------------------------------//



//---------------------------------Page-5---------------------------------------//

function page5Animation(){
    gsap.to("#page-5 h1",{
        transform:"translateX(-117%)",
        scrollTrigger:{
            trigger:"#page-5",
            scroller:"#main",
            start:"top 0",
            end:"top -70%",
            scrub:4,
            pin:true
    
        }
    })

}
 page5Animation()

 //--------------------------------Page-7--------------------------------------//
gsap.to("#page-7 h1 , h2 , h3",{
    y:20,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page-7 ",
        scroller:"#main",
        start:"top 30%",
        end:"top 20%",
        scrub:5,
       
    }
 })


