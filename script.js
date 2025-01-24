/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                documnet.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    /*reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact form, .certification', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Client-Side Developer', 'Server-Side Developer', 'Freelancer', 'Advance AI Coder' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// JavaScript to handle the image preview in the modal
function previewImage(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    // Set the image source and display the modal
    modalImage.src = imageSrc;
    modal.style.display = "block";
}

// Close modal when the user clicks on the close button or outside the modal
document.querySelector(".close").onclick = function () {
    document.getElementById("imageModal").style.display = "none";
};

window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Get the sections
const aboutSection = document.getElementById('home');
const footerSection = document.getElementById('footer');
const socialMedia = document.getElementById('social-mediaa');

// Listen for scroll events
window.addEventListener('scroll', function() {
    // Get the position of the About and Footer sections relative to the viewport
    const aboutPosition = aboutSection.getBoundingClientRect();
    const footerPosition = footerSection.getBoundingClientRect();

    // Check if the user has scrolled past the About section and before the Footer section
    if (aboutPosition.bottom <= 0 && footerPosition.top > window.innerHeight) {
        // Show the social media section
        socialMedia.style.display = 'block';
    } else {
        // Hide the social media section if user is not in the required range
        socialMedia.style.display = 'none';
    }
});
