$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 10000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });

  //Trocar a cor do menu Minha conta e mostrar itens do submenu
  $(document).ready(function(){
    $(".conta-icon").click(function(){
      $(".minhaconta-options").fadeToggle();
      $(this).toggleClass("white-userbackground");
      $(".conta span").toggleClass("white-span-conta");
	}); 
});  

//Trocar a cor do menu Carrinho e mostrar itens do submenu
$(document).ready(function(){
  $(".itens-icon").click(function(){
      $(".itens-options").fadeToggle();
}); 
});  

//Efeito de submenu em Artigos
$(document).ready(function(){
  $(".artigos").click(function(){
        $(".menu-options").slideToggle();
        $(this).toggleClass("white-fullbackground");
  }); 
});  

$(document).ready(function(){
  $(".item").hover(function(){
        $(".espiar-inactive, .comprar-inactive").addClass(".espiar-active, .comprar-active");
  }), function() {
    $(".espiar-active, .comprar-active").removeClass();}  
});


  