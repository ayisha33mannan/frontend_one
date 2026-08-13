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