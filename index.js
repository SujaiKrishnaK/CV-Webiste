$(document).ready(function(){
$(".Fcircle").click(function(){
  anime({
    targets: '.frontend',
    translateX: {
      value: 630,
      duration: 500
    },
    rotate: {
      value: 360,
      duration: 500,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 1,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay: 150 // All properties except 'scale' inherit 250ms delay
  });
})

$(".Bcircle").click(function(){
  anime({
  targets: '.git',
  translateX: 250,
  scale: 1,
  rotate: '4turn'
});

  anime({
  targets: '.backend',
  translateX: -430,
  delay: anime.stagger(100) // increase delay by 100ms for each elements.
});
})

$(".Dcircle").click(function(){
  anime({
  targets: '.database',
  translateY:-200,
  delay: anime.stagger(100, {direction: 'reverse'})
});
})
function skillshide(){
    $(".webdev").toggle(700);
    anime({
      targets: '.dev-img',
      translateY : -20,
      backgroundColor: '#FFF',
      borderRadius: ['50%', '50%'],
      easing: 'easeInOutQuad'
    });
  $(".dev-img").toggleClass("animate__infinite	infinite")
  }
$(".dev-img").on("click",function(){
skillshide();
});

$(".edu-img").on("click",function(){
  anime({
    targets: '.edu-img',
    translateY:-20,
    backgroundColor: '#FFF',
    borderRadius: ['50%', '50%'],
    easing: 'easeInOutQuad'
  });
  $(".card-img-overlay").hide();
  $(".webdev").hide();
    $(".card").css({"visibility":"visible"});
  anime({
  targets: '.card',
  translateY:10,
  scale: 1,
  rotate: '1turn'
});
});

$(".contact-img").on("click",function(){
  anime({
    targets: '.contact-img',
    translateY : -20,
    backgroundColor: '#FFF',
    borderRadius: ['50%', '50%'],
    easing: 'easeInOutQuad'
  });
  $(".webdev").hide();
    $(".card-img-overlay").show();
  $(".card").css({"visibility":"hidden"});

  anime({
    targets: '.card-img-overlay',
    translateY: -240,
    easing:'linear',
    duration: 500
  })
});


});
