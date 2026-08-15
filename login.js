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

// nav bar on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ham toggle menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const body = document.body;

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('open');
    body.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-links li a').forEach(function(link) {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        body.classList.remove('menu-open');
    });
});


// GSAP Animation

// nav bar
gsap.from(".anchor",{
    y:-30,
    opacity:0,
    duration: 1,
    delay:0.5,
    stagger: 0.3,
})

// GSAP timeline Animation
var tl = gsap.timeline()

tl.from("#gsap",{
    y:-30,
    opacity:0,
    duration: 1,
    delay:0.5,
    stagger: 0.3,
})
tl.from(".auth-submit",{
    opacity:0,
    duration: 0.1,
})

tl.from("#gsapp",{
    y:-30,
    opacity:0,
    duration: 0.5,
    stagger: 0.3,
})

// card flip
function flipCard() {
    const card = document.getElementById('flipCard');
    card.classList.toggle('flipped');
}

// checkbox
document.getElementById('termsCheck').addEventListener('change', function() {
    const btn = document.getElementById('signupBtn');
    btn.disabled = !this.checked;
});