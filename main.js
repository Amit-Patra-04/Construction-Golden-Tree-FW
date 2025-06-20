

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



