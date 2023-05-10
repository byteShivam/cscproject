const sliderWrapper = document.querySelector(".slider-wrapper");

let counter = 0;

// function to slide to the next image
function slideNext() {
  if (counter < 3) {
    counter++;
  } else {
    counter = 0;
  }

  sliderWrapper.style.transform = `translateX(-${counter * 25}%)`;
}

// automatically slide to the next image every 3 seconds
setInterval(slideNext, 3000);
