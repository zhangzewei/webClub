function addAnimate(selector, animation) {
  selector.css({
    visibility: 'visible'
  }).addClass('animated ' + animation);
}

function removeAnimate(selector, animation) {
  selector.css({
    visibility: 'hidden'
  }).removeClass(animation);
}

$(document).ready(function() {
  $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
      afterLoad: function(anchorLink, index){
        switch (index){
          case 1:
            addAnimate($('.section1 h1'), 'bounceInLeft');
            setTimeout(function(){
              addAnimate($('.section-tit'), 'bounceInRight');
            }, 500);
            break;
          case 2:
            addAnimate($('.slider1 h1'), 'bounceInLeft');
            setTimeout(function(){
              addAnimate($('.slider1 h2'), 'bounceInLeft');
            }, 100);
            setTimeout(function(){
              addAnimate($('.slider1 div.slider'), 'bounceInLeft');
            }, 200);
            break;
          case 3:
            addAnimate($(this).find('.master'), 'rotateIn');
            addAnimate($(this).find('.des'), 'fadeIn');
            break;
          case 4:

            break;
        }
      },
      onLeave: function(index, nextIndex, direction) {
        switch (index){
          case 1:
            removeAnimate($('.section1 h1'), 'bounceInLeft');
            removeAnimate($('.section-tit'), 'bounceInRight');
            break;
          case 2:
            removeAnimate($('.slider1 h1'), 'bounceInLeft');
            removeAnimate($('.slider1 h2'), 'bounceInLeft');
            removeAnimate($('.slider1 div.slider'), 'bounceInLeft');
            break;
          case 3:
            removeAnimate($(this).find('.master'), 'rotateIn');
            removeAnimate($(this).find('.des'), 'fadeIn');
            break;
          case 4:

            break;
        }
      },
      afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
        var h1 = $(this).find('.fp-tableCell > h1');
        var p = $(this).find('.fp-tableCell > p');
        var img = $(this).find('.fp-tableCell > img');
        if (slideIndex === 0) {
          addAnimate($('.slider1 h1'), 'bounceInLeft');
          setTimeout(function(){
            addAnimate($('.slider1 h2'), 'bounceInLeft');
          }, 100);
          setTimeout(function(){
            addAnimate($('.slider1 div.slider'), 'bounceInLeft');
          }, 200);
        } else if (slideIndex === 4) {
          var sections = $(this).find('section a');
          setTimeout(function() {
            addAnimate($(sections[0]), 'bounceInDown');
          }, 50);
          setTimeout(function() {
            addAnimate($(sections[1]), 'bounceInUp');
          }, 100);
          setTimeout(function() {
            addAnimate($(sections[2]), 'bounceInDown');
          }, 150);
          setTimeout(function() {
            addAnimate($(sections[3]), 'bounceInUp');
          }, 200);
        } else {
          addAnimate(h1, 'bounceInUp');
          setTimeout(function() {
            addAnimate(p, 'bounceInUp');
          }, 30);
          setTimeout(function() {
            addAnimate(img, 'bounceInDown');
          }, 20);
        }
      },
      onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
        var h1 = $(this).find('.fp-tableCell > h1');
        var p = $(this).find('.fp-tableCell > p');
        var img = $(this).find('.fp-tableCell > img');
        if (slideIndex === 0) {
          removeAnimate($('.slider1 h1'), 'bounceInLeft');
          removeAnimate($('.slider1 h2'), 'bounceInLeft');
          removeAnimate($('.slider1 div.slider'), 'bounceInLeft');
        }
        if (slideIndex === 4) {
          var sections = $(this).find('section a');

          for (var j = 0; j < sections.length; j++) {
            if (j % 2 === 0) {
              removeAnimate($(sections[j]), 'bounceInDown');
            } else {
              removeAnimate($(sections[j]), 'bounceInUp');
            }
          };
        } else {
          removeAnimate(h1, 'bounceInUp');
          removeAnimate(p, 'bounceInUp');
          removeAnimate(img, 'bounceInDown');
        }
      },
      sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', '#fff'],

      //Scrolling
      css3: true,
      scrollingSpeed: 400,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: false,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: true,
  });
});

(function() {

  function init() {
    var speed = 300,
      easing = mina.backout;

    [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
      var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
        pathConfig = {
          from : path.attr( 'd' ),
          to : el.getAttribute( 'data-path-hover' )
        };

      el.addEventListener( 'mouseenter', function() {
        path.animate( { 'path' : pathConfig.to }, speed, easing );
      } );

      el.addEventListener( 'mouseleave', function() {
        path.animate( { 'path' : pathConfig.from }, speed, easing );
      } );
    } );
  }

  init();

})();
