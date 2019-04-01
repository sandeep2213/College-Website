let slideIndex = 1;
let automaticSlide = 0;
showSlides(slideIndex);
automaticSlides();

//Next Prev conntrols
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function automaticSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  automaticSlide++;
  if (automaticSlide > slides.length) {
    automaticSlide = 1;
  }
  slides[automaticSlide - 1].style.display = "block";
  setTimeout(automaticSlides, 3000);
}
