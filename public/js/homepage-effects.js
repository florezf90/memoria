$(document).ready(function () {
  function initializeCarousel(selector, items) {
    var owlOptions = {
      loop: true,
      margin: 10,
      nav: true,
      items: items,
    };

    // Update Owl Carousel options on window resize
    function updateCarousel() {
      owlOptions.items = $(window).width() < 768 ? 1 : items;
      $(selector).owlCarousel("destroy").owlCarousel(owlOptions);
    }

    // Initialize Owl Carousel
    $(selector).owlCarousel(owlOptions);

    // Update on window resize
    $(window).resize(updateCarousel);
  }

  initializeCarousel(".carousel1", 2);
  initializeCarousel(".carousel2", 3);
  initializeCarousel(".carousel3", 4);
  initializeCarousel(".carousel4", 2);
});
