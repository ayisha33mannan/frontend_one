// lenis smooth scroll
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});


// preloader
setTimeout(() =>
    {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => { preloader.style.display = 'none'; }, 1000);
    }, 300);




// ham toggle menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    body.classList.toggle('menu-open');
});

// close menuu
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        body.classList.remove('menu-open');
    });
});

// close
body.addEventListener('click', (e) => {
    if (body.classList.contains('menu-open') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        body.classList.remove('menu-open');
    }
});

// nav bar on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// active links
const sections = document.querySelectorAll('section[id], header[id]');
const navLinkItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


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
        trigger: ".points p"
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
