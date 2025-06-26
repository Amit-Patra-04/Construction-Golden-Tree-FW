
// Mobile Menu Toggle
// const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// const navLinks = document.querySelector('.nav-links');

// mobileMenuBtn.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });

// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Slider

const slider = document.getElementById("slider");

// Duplicate the slides for seamless effect
slider.innerHTML += slider.innerHTML;

let scrollAmount = 0;
const speeed= 1;

function scrollSlider() {
  scrollAmount += speeed;
  if (scrollAmount >= slider.scrollWidth / 2) {
    scrollAmount = 0;
  }
  slider.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(scrollSlider);
}

scrollSlider();

  slider.innerHTML += slider.innerHTML; 



// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        }
    });
});

// Work Section

const track = document.getElementById('carousel-track');
    const items = Array.from(track.children);

    // Clone all items and append to the track
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });

    // Wait for DOM to update and then calculate width
    window.addEventListener('load', () => {
      const trackWidth = track.scrollWidth / 2; // only original set
      track.style.animationDuration = `${trackWidth / 50}s`; // adjust speed
      track.style.width = `${track.scrollWidth}px`;

      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${trackWidth}px); }
        }
      `, styleSheet.cssRules.length);
    });



// // Form Submission
// const contactForm = document.getElementById('contactForm');

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // Get form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
    
//     // Here you would typically send the form data to a server
//     // For this example, we'll just show an alert
//     alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon at ${email}.`);
    
//     // Reset form
//     contactForm.reset();
// });



