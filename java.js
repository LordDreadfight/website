$(document).ready(function() {
  $(".dropdown").click(function() {
    $(".dropdown-content").slideToggle(1000);
  });

  showSlides();
});

function showSlides() {
  var slideIndex = 0;
  var slides = document.getElementsByClassName("mySlides");

  function changeSlide() {
    // Remove animations from the current slide
    slides[slideIndex].classList.remove("slideIn");
    slides[slideIndex].classList.remove("slideOut");

    // Hide the current slide
    slides[slideIndex].style.display = "none";

    // Increment slideIndex
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    // Show the next slide
    slides[slideIndex].style.display = "block";

    // Add the slide in animation
    slides[slideIndex].classList.add("slideIn");

    // Schedule the slide out animation
    setTimeout(function() {
      slides[slideIndex].classList.add("slideOut");
    }, 4500);

    // Schedule the next slide change
    setTimeout(changeSlide, 5000);
  }

  changeSlide();
}
