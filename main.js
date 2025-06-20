

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
