$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      780: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
})