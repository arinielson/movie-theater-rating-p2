// Carousel functionality for theatres
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(theatreId) {
  showTheatreInfo(theatreId)
  showSlides(slideIndex = theatreId);
}

function showTheatreInfo(theatreId) {
  document.getElementById("AMC").style.display = "none";
  document.getElementById("Cinemark").style.display = "none";
  document.getElementById("Megaplex").style.display = "none";
  if (theatreId === 1) document.getElementById("AMC").style.display = "block";
  if (theatreId === 2) document.getElementById("Cinemark").style.display = "block";
  if (theatreId === 3) document.getElementById("Megaplex").style.display = "block";
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  showTheatreInfo(slideIndex)
}
// end of carousel function 

// function theatreData 