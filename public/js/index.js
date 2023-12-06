//drop down menu code
const dropMenu = document.getElementById('dropdown');
const dropdownButton = document.getElementById('dropdownButton');

dropdownButton.addEventListener('click', () => {
  // toggle the dropdown menu
  dropMenu.classList.toggle('hidden');
});

const darkModeButton = document.getElementById('dark-mode-button');
const headerEl = document.getElementById('header');
const backgroundEl = document.getElementById('bg');
const footerEl = document.getElementById('footer');

darkModeButton.addEventListener('click', () => {
  // toggle the dropdown menu
  headerEl.classList.toggle('dark');
  darkModeButton.classList.toggle('night');
  backgroundEl.classList.toggle('dark-bg');
  footerEl.classList.toggle('dark');
});

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

$('#_samewidth_images').owlCarousel({
  margin: 10,
  autoWidth: false,
  nav: true,
  items: 4,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
});
