// preloader
setTimeout(() => 
    { 
        const preloader = document.getElementById('preloader'); 
        preloader.style.opacity = '0'; 
        setTimeout(() => { preloader.style.display = 'none'; }, 1000);
    }, 300);


// GSAP timeline Animation
var tl = gsap.timeline()

// nav bar
tl.from(".anchor",{
    y:-30,
    opacity:0,
    duration: 1,
    delay:0.5,
    stagger: 0.3,
})

// heading & logo
tl.from(".text",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2,
})

// about section
gsap.from(".points p",{
    x:-800,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger: ".points p",
        // markers: true,   
    }
        
})
gsap.from(".pic",{
    opacity:0,
    duration:1,
    scale:0.2,
    scrollTrigger:".pic"
})  

// service
gsap.from(".service .image img",{
    scale:0.1,
    duration:1,
    scrollTrigger:".service .image img"
})
