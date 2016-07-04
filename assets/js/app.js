$(document).ready(function () {

  $(function () {
    var imgs = [];

    $.each($('*'), function() {
      var $this = $(this),
          img = $this.is('img'),
          background = $this.css('background-image'),
          video = $this.is('video source');

      if (background != 'none') {
        var path = background.replace('url("', '').replace('")', '');
        imgs.push(path);
      }

      if (img || video) { // || video
        var path = $this.attr('src');

        if (path) {
          imgs.push(path);
        }
      }

    }); // end each

    var percents = 1;

    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].indexOf('.mp4') + 1) {
          var image = $('<source>', {
            attr: {
              src: imgs[i]
            }
        });
      } else {
          var image = $('<img>', {
            attr: {
              src: imgs[i]
            }
          });
        }

        $(image).on('load', function() {
          setPercents(imgs.length, percents);
          percents++;
        });
    }


    function setPercents(total, current) {
      var percent = Math.ceil(current / total * 100);

      if (percent >= 67) {
        $('.preload__none').css('display', 'block');
        $('.loader').css('display', 'none');
      }

      $('.loader-bar').css({
        'stroke-width' : Math.ceil(percent / 10 + 5) + 'px'
      }).text(percent + '%');
    } // end setPercents

  }); // end preload



    (function() {
    var
      doc = document,
      auth = $("#auth"),
      flipper = $("#flipper"),
      flipperHelp = $("#flipperHelp"),
      returnBack = $("#returnBack");

   if(auth) {
      auth.on('click', function () {
       flippWelcome("none");
     });

      returnBack.on('click', function(e) {
        e.preventDefault();
        flippWelcome("flex");
      });
    };


    function flippWelcome(disp) {
      flipper.toggleClass("rotate");
        auth.toggleClass("visible");
        setTimeout(function () {
         flipperHelp.css("display" , disp);
       }, 200);
    }
  })();



    $('.menu__link').on('click', function(e){
      e.preventDefault();

    showPost($(this).attr('href'), true);
  });


  $(window).scroll(function() {
    checkBlogSection();
    showSkill();
  }); // -> end scroll section

  function showPost(section, isAnimate) {  
    var
      direction = section.replace(/#/, ''),
      reqSection = $('.blog__content-article').filter('[data-section="' + direction + '"]');
      reqSectionPos = reqSection.offset().top;

      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 500);
      } else {
        $('body, hrml').scrollTop(reqSectionPos);
      }
  };


  function checkBlogSection() {
    $('.blog__content-article').each(function(){
      var
        $this = $(this), // все статьи
        topEdge = $this.offset().top - 200, // данная статья - 200 от начала документа до неё
        bottomEdge = topEdge + $this.height(), // к точке начала статьи добавляем
        menu = $('.blog__static .menu__list'),
        sidebar = $('.blog__static .menu__wrapper'), 
        stickyStart = sidebar.offset().top,
        menuClone = sidebar.clone(),
        fixedSidebar = $('.blog__fixed .blog__left-col'),
        wScroll = $(window).scrollTop();
        // activeDataset = $(this)[0].dataset.section,
        // activeDirection = activeDataset.replace(/#/, ''),
        
      if (topEdge < wScroll && bottomEdge > wScroll) {
        var
          currentId = $this.data('section'),
          reqLink = $('.menu__link').filter('[href="#' + currentId + '"]');

          console.log(currentId)

        reqLink.closest('.blog__fixed .menu__item').addClass('active')
                        .siblings().removeClass('active');
           
        // window.location.hash = currentId;

      }


      if (wScroll >= stickyStart) {

    if (!fixedSidebar.find('.menu__wrapper').length) {
      fixedSidebar.append(menuClone);
      menu.hide();

    }


  } else {
    fixedSidebar.find('.menu__wrapper').remove();
    menu.show();
  }



    });
  };



  var styles = [
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      { hue: '#4369aa' },
      { saturation: -3 },
      { lightness: -39 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      { hue: '#f2f2f2' },
      { saturation: -100 },
      { lightness: 54 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road',
    elementType: 'all',
    stylers: [
      { hue: '#eaeaea' },
      { saturation: -100 },
      { lightness: 77 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      { hue: '#d6d6d6' },
      { saturation: -100 },
      { lightness: 55 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road.arterial',
    elementType: 'all',
    stylers: [
      { hue: '#ffffff' },
      { saturation: -100 },
      { lightness: 100 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      { hue: '#eaeaea' },
      { saturation: -100 },
      { lightness: -8 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'poi.park',
    elementType: 'all',
    stylers: [
      { hue: '#f2f0e8' },
      { saturation: -35 },
      { lightness: 68 },
      { visibility: 'on' }
    ]
  }
];

var googleMap = document.getElementById('google-map');

if(googleMap) {
  var options = {
    mapTypeControlOptions: {
      mapTypeIds: [ 'Koshara Alexandr']
    },
    center: new google.maps.LatLng(44.95650027, 34.10031259),
    zoom: 16,
    mapTypeId: 'Koshara Alexandr'
  };
  
  var map = new google.maps.Map(googleMap, options);
  var styledMapType = new google.maps.StyledMapType(styles, { name: 'Koshara Alexandr' });
  map.mapTypes.set('Koshara Alexandr', styledMapType);

  // добавил маркер на карту
  var imageMarker = 'assets/img/awesome/map_marker.png';
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(44.95691973, 34.10664126),
      icon: imageMarker
  });
  marker.setMap(map);
}

  



  (function(){
    var
        mainNav = $("#mainNav"),
        mainPopup = $("#popup__nav"),
        popupClose = $("#popup__close");

    if(mainNav) {
      mainNav.on('click', function(e) {
        e.preventDefault();
        popupAbout();
      });
    }

    if(popupClose) {
      popupClose.on('click', function(e) {
        e.preventDefault();
        popupAbout();

      });
    }

    function popupAbout() {
      mainPopup.toggleClass("not-visible");
      mainNav.toggleClass("not-visible");
    };

  })();








  // появление скиллов
    function showSkill() {
    $('.skill__item').each(function(){
      var
        $this = $(this),
        winHeight = $(window).height() - 200, 
        topEdge = $this.offset().top - winHeight,
        bottomEdge = topEdge + $this.height(),
        wScroll = $(window).scrollTop();

      if (topEdge < wScroll && bottomEdge > wScroll) {
        var skillBlock = $this.find('.sector')
        skillBlock.each(function(item, val){
          val.classList.remove('null__stroke');
        })
      }
    });
  };
  // конец скиллов







 $('.control__down').on('click', function(e) {
    e.preventDefault();
 });

  $('.control__up').on('click', function(e) {
    e.preventDefault();
 });







  // slider start
  (function sliderIt() {
    var
    slider = $('.js-slider'), //ok
  // Инфа
    image = slider.find('.slider__preview-img'),  //ok
    name = slider.find('.about__name-h2'),  //ok
    description = slider.find('.slider__skills-text'), //ok
    link = slider.find('.slider__link-show'), //ok
  // Кнопки
    prevButton = slider.find('.js-slider__prev'), //ok
    prevButtonImageCurrent = prevButton.find('.js-slider__control-image_current'), //ok
    prevButtonImageNext = prevButton.find('.js-slider__control-image_next'),  //ok
    nextButton = slider.find('.js-slider__next'), //ok
    nextButtonImageCurrent = nextButton.find('.js-slider__control-image_current'), //ok
    nextButtonImageNext = nextButton.find('.js-slider__control-image_next'), //ok
  // Слайды
    items = slider.find('.slider__item'),
    current = 0,
    currentSlideItem,
    prevSlideItem,
    nextSlideItem;

  function validate(num) {
    var result;

    if (num < 0)
      result = items.length - 1;
    else if (num > items.length - 1)
      result = 0;
    else
      result = num;

    return result;
  }

  function calcSlides() {
    var
      prev = validate(current - 1),
      next = validate(current + 1);

    currentSlideItem = items.eq(current);
    prevSlideItem = items.eq(prev);
    nextSlideItem = items.eq(next);
  }

  function init() {
    calcSlides();

    changeSlide();
  }

  function changeBackground(elem, background) {
    elem.css('background-image', 'url("' + background + '")');

    return elem;
  }

  function changeSlideControl(next, current, background, direction) {
    if (direction) {
      next.css('top', '100%')
    }

    changeBackground(next, background).animate({
      top: '0%'
    }, function () {
      $(this).css('top', direction ? '100%' : '-100%');
    });

    current.animate({
      top: direction ? '-100%' : '100%'
    }, function () {
      changeBackground($(this), background).css('top', '0');
    });
  }

  function textChange(elem, text, animationName) {
    var
      letters = text.split(''),
      str = '<span style="display: inline-block;">',
      animationDelay = 0;

    letters.forEach(function (letter, id) {
      animationDelay++;

      if (letter === ' ') {
        str += '&nbsp;</span><span style="display: inline-block;">';
      } else {
        str += '<span id="letter-' + id + '" class="' + animationName
          + '" style="display: inline-block; animation-delay:'
          + animationDelay / 20
          + 's">'
          + letter
          + '</span>';
      }

    });
    str += '</span>';
    elem.html(str);
  }

  function changeSlide() {
    // Смена главного изображения
    image.fadeOut(300, function () {
      changeBackground($(this), currentSlideItem.data('img')).fadeIn();
    });

    // Смена текста
    textChange(name, currentSlideItem.data('name'), 'bounceIn');
    textChange(description, currentSlideItem.data('description'), 'bounceIn');
    link.attr('href', currentSlideItem.data('link'));

    // Смена слайдов в контролах
    changeSlideControl(prevButtonImageNext, prevButtonImageCurrent, prevSlideItem.data('img'));
    changeSlideControl(nextButtonImageNext, nextButtonImageCurrent, nextSlideItem.data('img'), true);
  }

  function nextSlide() {
    current = validate(++current);
    calcSlides();
    slider.trigger('changeSlide');
  }

  function prevSlide() {
    current = validate(--current);
    calcSlides();
    slider.trigger('changeSlide');
  }

  $(window).on('load', init());
  slider.on('changeSlide', changeSlide);
  nextButton.click(nextSlide);
  prevButton.click(prevSlide);
  })();



});



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGltZ3MgPSBbXTtcclxuXHJcbiAgICAkLmVhY2goJCgnKicpLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgIGltZyA9ICR0aGlzLmlzKCdpbWcnKSxcclxuICAgICAgICAgIGJhY2tncm91bmQgPSAkdGhpcy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcclxuICAgICAgICAgIHZpZGVvID0gJHRoaXMuaXMoJ3ZpZGVvIHNvdXJjZScpO1xyXG5cclxuICAgICAgaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XHJcbiAgICAgICAgdmFyIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XHJcbiAgICAgICAgaW1ncy5wdXNoKHBhdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW1nIHx8IHZpZGVvKSB7IC8vIHx8IHZpZGVvXHJcbiAgICAgICAgdmFyIHBhdGggPSAkdGhpcy5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgIGltZ3MucHVzaChwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTsgLy8gZW5kIGVhY2hcclxuXHJcbiAgICB2YXIgcGVyY2VudHMgPSAxO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaW1nc1tpXS5pbmRleE9mKCcubXA0JykgKyAxKSB7XHJcbiAgICAgICAgICB2YXIgaW1hZ2UgPSAkKCc8c291cmNlPicsIHtcclxuICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgIHNyYzogaW1nc1tpXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgaW1hZ2UgPSAkKCc8aW1nPicsIHtcclxuICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgIHNyYzogaW1nc1tpXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoaW1hZ2UpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzZXRQZXJjZW50cyhpbWdzLmxlbmd0aCwgcGVyY2VudHMpO1xyXG4gICAgICAgICAgcGVyY2VudHMrKztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UGVyY2VudHModG90YWwsIGN1cnJlbnQpIHtcclxuICAgICAgdmFyIHBlcmNlbnQgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcbiAgICAgIGlmIChwZXJjZW50ID49IDY3KSB7XHJcbiAgICAgICAgJCgnLnByZWxvYWRfX25vbmUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAkKCcubG9hZGVyJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCgnLmxvYWRlci1iYXInKS5jc3Moe1xyXG4gICAgICAgICdzdHJva2Utd2lkdGgnIDogTWF0aC5jZWlsKHBlcmNlbnQgLyAxMCArIDUpICsgJ3B4J1xyXG4gICAgICB9KS50ZXh0KHBlcmNlbnQgKyAnJScpO1xyXG4gICAgfSAvLyBlbmQgc2V0UGVyY2VudHNcclxuXHJcbiAgfSk7IC8vIGVuZCBwcmVsb2FkXHJcblxyXG5cclxuXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXJcclxuICAgICAgZG9jID0gZG9jdW1lbnQsXHJcbiAgICAgIGF1dGggPSAkKFwiI2F1dGhcIiksXHJcbiAgICAgIGZsaXBwZXIgPSAkKFwiI2ZsaXBwZXJcIiksXHJcbiAgICAgIGZsaXBwZXJIZWxwID0gJChcIiNmbGlwcGVySGVscFwiKSxcclxuICAgICAgcmV0dXJuQmFjayA9ICQoXCIjcmV0dXJuQmFja1wiKTtcclxuXHJcbiAgIGlmKGF1dGgpIHtcclxuICAgICAgYXV0aC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICBmbGlwcFdlbGNvbWUoXCJub25lXCIpO1xyXG4gICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuQmFjay5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZsaXBwV2VsY29tZShcImZsZXhcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZmxpcHBXZWxjb21lKGRpc3ApIHtcclxuICAgICAgZmxpcHBlci50b2dnbGVDbGFzcyhcInJvdGF0ZVwiKTtcclxuICAgICAgICBhdXRoLnRvZ2dsZUNsYXNzKFwidmlzaWJsZVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgZmxpcHBlckhlbHAuY3NzKFwiZGlzcGxheVwiICwgZGlzcCk7XHJcbiAgICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcblxyXG5cclxuXHJcbiAgICAkKCcubWVudV9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2hvd1Bvc3QoJCh0aGlzKS5hdHRyKCdocmVmJyksIHRydWUpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIGNoZWNrQmxvZ1NlY3Rpb24oKTtcclxuICAgIHNob3dTa2lsbCgpO1xyXG4gIH0pOyAvLyAtPiBlbmQgc2Nyb2xsIHNlY3Rpb25cclxuXHJcbiAgZnVuY3Rpb24gc2hvd1Bvc3Qoc2VjdGlvbiwgaXNBbmltYXRlKSB7ICBcclxuICAgIHZhclxyXG4gICAgICBkaXJlY3Rpb24gPSBzZWN0aW9uLnJlcGxhY2UoLyMvLCAnJyksXHJcbiAgICAgIHJlcVNlY3Rpb24gPSAkKCcuYmxvZ19fY29udGVudC1hcnRpY2xlJykuZmlsdGVyKCdbZGF0YS1zZWN0aW9uPVwiJyArIGRpcmVjdGlvbiArICdcIl0nKTtcclxuICAgICAgcmVxU2VjdGlvblBvcyA9IHJlcVNlY3Rpb24ub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICAgaWYgKGlzQW5pbWF0ZSkge1xyXG4gICAgICAgICQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHJlcVNlY3Rpb25Qb3N9LCA1MDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJ2JvZHksIGhybWwnKS5zY3JvbGxUb3AocmVxU2VjdGlvblBvcyk7XHJcbiAgICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tCbG9nU2VjdGlvbigpIHtcclxuICAgICQoJy5ibG9nX19jb250ZW50LWFydGljbGUnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhclxyXG4gICAgICAgICR0aGlzID0gJCh0aGlzKSwgLy8g0LLRgdC1INGB0YLQsNGC0YzQuFxyXG4gICAgICAgIHRvcEVkZ2UgPSAkdGhpcy5vZmZzZXQoKS50b3AgLSAyMDAsIC8vINC00LDQvdC90LDRjyDRgdGC0LDRgtGM0Y8gLSAyMDAg0L7RgiDQvdCw0YfQsNC70LAg0LTQvtC60YPQvNC10L3RgtCwINC00L4g0L3QtdGRXHJcbiAgICAgICAgYm90dG9tRWRnZSA9IHRvcEVkZ2UgKyAkdGhpcy5oZWlnaHQoKSwgLy8g0Log0YLQvtGH0LrQtSDQvdCw0YfQsNC70LAg0YHRgtCw0YLRjNC4INC00L7QsdCw0LLQu9GP0LXQvFxyXG4gICAgICAgIG1lbnUgPSAkKCcuYmxvZ19fc3RhdGljIC5tZW51X19saXN0JyksXHJcbiAgICAgICAgc2lkZWJhciA9ICQoJy5ibG9nX19zdGF0aWMgLm1lbnVfX3dyYXBwZXInKSwgXHJcbiAgICAgICAgc3RpY2t5U3RhcnQgPSBzaWRlYmFyLm9mZnNldCgpLnRvcCxcclxuICAgICAgICBtZW51Q2xvbmUgPSBzaWRlYmFyLmNsb25lKCksXHJcbiAgICAgICAgZml4ZWRTaWRlYmFyID0gJCgnLmJsb2dfX2ZpeGVkIC5ibG9nX19sZWZ0LWNvbCcpLFxyXG4gICAgICAgIHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgLy8gYWN0aXZlRGF0YXNldCA9ICQodGhpcylbMF0uZGF0YXNldC5zZWN0aW9uLFxyXG4gICAgICAgIC8vIGFjdGl2ZURpcmVjdGlvbiA9IGFjdGl2ZURhdGFzZXQucmVwbGFjZSgvIy8sICcnKSxcclxuICAgICAgICBcclxuICAgICAgaWYgKHRvcEVkZ2UgPCB3U2Nyb2xsICYmIGJvdHRvbUVkZ2UgPiB3U2Nyb2xsKSB7XHJcbiAgICAgICAgdmFyXHJcbiAgICAgICAgICBjdXJyZW50SWQgPSAkdGhpcy5kYXRhKCdzZWN0aW9uJyksXHJcbiAgICAgICAgICByZXFMaW5rID0gJCgnLm1lbnVfX2xpbmsnKS5maWx0ZXIoJ1tocmVmPVwiIycgKyBjdXJyZW50SWQgKyAnXCJdJyk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coY3VycmVudElkKVxyXG5cclxuICAgICAgICByZXFMaW5rLmNsb3Nlc3QoJy5ibG9nX19maXhlZCAubWVudV9faXRlbScpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBjdXJyZW50SWQ7XHJcblxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgaWYgKHdTY3JvbGwgPj0gc3RpY2t5U3RhcnQpIHtcclxuXHJcbiAgICBpZiAoIWZpeGVkU2lkZWJhci5maW5kKCcubWVudV9fd3JhcHBlcicpLmxlbmd0aCkge1xyXG4gICAgICBmaXhlZFNpZGViYXIuYXBwZW5kKG1lbnVDbG9uZSk7XHJcbiAgICAgIG1lbnUuaGlkZSgpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBmaXhlZFNpZGViYXIuZmluZCgnLm1lbnVfX3dyYXBwZXInKS5yZW1vdmUoKTtcclxuICAgIG1lbnUuc2hvdygpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgdmFyIHN0eWxlcyA9IFtcclxuICB7XHJcbiAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcclxuICAgIGVsZW1lbnRUeXBlOiAnYWxsJyxcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAgeyBodWU6ICcjNDM2OWFhJyB9LFxyXG4gICAgICB7IHNhdHVyYXRpb246IC0zIH0sXHJcbiAgICAgIHsgbGlnaHRuZXNzOiAtMzkgfSxcclxuICAgICAgeyB2aXNpYmlsaXR5OiAnb24nIH1cclxuICAgIF1cclxuICB9LHtcclxuICAgIGZlYXR1cmVUeXBlOiAnbGFuZHNjYXBlJyxcclxuICAgIGVsZW1lbnRUeXBlOiAnYWxsJyxcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAgeyBodWU6ICcjZjJmMmYyJyB9LFxyXG4gICAgICB7IHNhdHVyYXRpb246IC0xMDAgfSxcclxuICAgICAgeyBsaWdodG5lc3M6IDU0IH0sXHJcbiAgICAgIHsgdmlzaWJpbGl0eTogJ29uJyB9XHJcbiAgICBdXHJcbiAgfSx7XHJcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxyXG4gICAgZWxlbWVudFR5cGU6ICdhbGwnLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7IGh1ZTogJyNlYWVhZWEnIH0sXHJcbiAgICAgIHsgc2F0dXJhdGlvbjogLTEwMCB9LFxyXG4gICAgICB7IGxpZ2h0bmVzczogNzcgfSxcclxuICAgICAgeyB2aXNpYmlsaXR5OiAnb24nIH1cclxuICAgIF1cclxuICB9LHtcclxuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcclxuICAgIGVsZW1lbnRUeXBlOiAnYWxsJyxcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAgeyBodWU6ICcjZDZkNmQ2JyB9LFxyXG4gICAgICB7IHNhdHVyYXRpb246IC0xMDAgfSxcclxuICAgICAgeyBsaWdodG5lc3M6IDU1IH0sXHJcbiAgICAgIHsgdmlzaWJpbGl0eTogJ29uJyB9XHJcbiAgICBdXHJcbiAgfSx7XHJcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuYXJ0ZXJpYWwnLFxyXG4gICAgZWxlbWVudFR5cGU6ICdhbGwnLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7IGh1ZTogJyNmZmZmZmYnIH0sXHJcbiAgICAgIHsgc2F0dXJhdGlvbjogLTEwMCB9LFxyXG4gICAgICB7IGxpZ2h0bmVzczogMTAwIH0sXHJcbiAgICAgIHsgdmlzaWJpbGl0eTogJ29uJyB9XHJcbiAgICBdXHJcbiAgfSx7XHJcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQubG9jYWwnLFxyXG4gICAgZWxlbWVudFR5cGU6ICdhbGwnLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7IGh1ZTogJyNlYWVhZWEnIH0sXHJcbiAgICAgIHsgc2F0dXJhdGlvbjogLTEwMCB9LFxyXG4gICAgICB7IGxpZ2h0bmVzczogLTggfSxcclxuICAgICAgeyB2aXNpYmlsaXR5OiAnb24nIH1cclxuICAgIF1cclxuICB9LHtcclxuICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxyXG4gICAgZWxlbWVudFR5cGU6ICdhbGwnLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7IGh1ZTogJyNmMmYwZTgnIH0sXHJcbiAgICAgIHsgc2F0dXJhdGlvbjogLTM1IH0sXHJcbiAgICAgIHsgbGlnaHRuZXNzOiA2OCB9LFxyXG4gICAgICB7IHZpc2liaWxpdHk6ICdvbicgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbnZhciBnb29nbGVNYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZ2xlLW1hcCcpO1xyXG5cclxuaWYoZ29vZ2xlTWFwKSB7XHJcbiAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHtcclxuICAgICAgbWFwVHlwZUlkczogWyAnS29zaGFyYSBBbGV4YW5kciddXHJcbiAgICB9LFxyXG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQ0Ljk1NjUwMDI3LCAzNC4xMDAzMTI1OSksXHJcbiAgICB6b29tOiAxNixcclxuICAgIG1hcFR5cGVJZDogJ0tvc2hhcmEgQWxleGFuZHInXHJcbiAgfTtcclxuICBcclxuICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChnb29nbGVNYXAsIG9wdGlvbnMpO1xyXG4gIHZhciBzdHlsZWRNYXBUeXBlID0gbmV3IGdvb2dsZS5tYXBzLlN0eWxlZE1hcFR5cGUoc3R5bGVzLCB7IG5hbWU6ICdLb3NoYXJhIEFsZXhhbmRyJyB9KTtcclxuICBtYXAubWFwVHlwZXMuc2V0KCdLb3NoYXJhIEFsZXhhbmRyJywgc3R5bGVkTWFwVHlwZSk7XHJcblxyXG4gIC8vINC00L7QsdCw0LLQuNC7INC80LDRgNC60LXRgCDQvdCwINC60LDRgNGC0YNcclxuICB2YXIgaW1hZ2VNYXJrZXIgPSAnYXNzZXRzL2ltZy9hd2Vzb21lL21hcF9tYXJrZXIucG5nJztcclxuICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQ0Ljk1NjkxOTczLCAzNC4xMDY2NDEyNiksXHJcbiAgICAgIGljb246IGltYWdlTWFya2VyXHJcbiAgfSk7XHJcbiAgbWFya2VyLnNldE1hcChtYXApO1xyXG59XHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG4gIChmdW5jdGlvbigpe1xyXG4gICAgdmFyXHJcbiAgICAgICAgbWFpbk5hdiA9ICQoXCIjbWFpbk5hdlwiKSxcclxuICAgICAgICBtYWluUG9wdXAgPSAkKFwiI3BvcHVwX19uYXZcIiksXHJcbiAgICAgICAgcG9wdXBDbG9zZSA9ICQoXCIjcG9wdXBfX2Nsb3NlXCIpO1xyXG5cclxuICAgIGlmKG1haW5OYXYpIHtcclxuICAgICAgbWFpbk5hdi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHBvcHVwQWJvdXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYocG9wdXBDbG9zZSkge1xyXG4gICAgICBwb3B1cENsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcG9wdXBBYm91dCgpO1xyXG5cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdXBBYm91dCgpIHtcclxuICAgICAgbWFpblBvcHVwLnRvZ2dsZUNsYXNzKFwibm90LXZpc2libGVcIik7XHJcbiAgICAgIG1haW5OYXYudG9nZ2xlQ2xhc3MoXCJub3QtdmlzaWJsZVwiKTtcclxuICAgIH07XHJcblxyXG4gIH0pKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyDQv9C+0Y/QstC70LXQvdC40LUg0YHQutC40LvQu9C+0LJcclxuICAgIGZ1bmN0aW9uIHNob3dTa2lsbCgpIHtcclxuICAgICQoJy5za2lsbF9faXRlbScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgdmFyXHJcbiAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgIHdpbkhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIDIwMCwgXHJcbiAgICAgICAgdG9wRWRnZSA9ICR0aGlzLm9mZnNldCgpLnRvcCAtIHdpbkhlaWdodCxcclxuICAgICAgICBib3R0b21FZGdlID0gdG9wRWRnZSArICR0aGlzLmhlaWdodCgpLFxyXG4gICAgICAgIHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICBpZiAodG9wRWRnZSA8IHdTY3JvbGwgJiYgYm90dG9tRWRnZSA+IHdTY3JvbGwpIHtcclxuICAgICAgICB2YXIgc2tpbGxCbG9jayA9ICR0aGlzLmZpbmQoJy5zZWN0b3InKVxyXG4gICAgICAgIHNraWxsQmxvY2suZWFjaChmdW5jdGlvbihpdGVtLCB2YWwpe1xyXG4gICAgICAgICAgdmFsLmNsYXNzTGlzdC5yZW1vdmUoJ251bGxfX3N0cm9rZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgLy8g0LrQvtC90LXRhiDRgdC60LjQu9C70L7QslxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICQoJy5jb250cm9sX19kb3duJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gfSk7XHJcblxyXG4gICQoJy5jb250cm9sX191cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyBzbGlkZXIgc3RhcnRcclxuICAoZnVuY3Rpb24gc2xpZGVySXQoKSB7XHJcbiAgICB2YXJcclxuICAgIHNsaWRlciA9ICQoJy5qcy1zbGlkZXInKSwgLy9va1xyXG4gIC8vINCY0L3RhNCwXHJcbiAgICBpbWFnZSA9IHNsaWRlci5maW5kKCcuc2xpZGVyX19wcmV2aWV3LWltZycpLCAgLy9va1xyXG4gICAgbmFtZSA9IHNsaWRlci5maW5kKCcuYWJvdXRfX25hbWUtaDInKSwgIC8vb2tcclxuICAgIGRlc2NyaXB0aW9uID0gc2xpZGVyLmZpbmQoJy5zbGlkZXJfX3NraWxscy10ZXh0JyksIC8vb2tcclxuICAgIGxpbmsgPSBzbGlkZXIuZmluZCgnLnNsaWRlcl9fbGluay1zaG93JyksIC8vb2tcclxuICAvLyDQmtC90L7Qv9C60LhcclxuICAgIHByZXZCdXR0b24gPSBzbGlkZXIuZmluZCgnLmpzLXNsaWRlcl9fcHJldicpLCAvL29rXHJcbiAgICBwcmV2QnV0dG9uSW1hZ2VDdXJyZW50ID0gcHJldkJ1dHRvbi5maW5kKCcuanMtc2xpZGVyX19jb250cm9sLWltYWdlX2N1cnJlbnQnKSwgLy9va1xyXG4gICAgcHJldkJ1dHRvbkltYWdlTmV4dCA9IHByZXZCdXR0b24uZmluZCgnLmpzLXNsaWRlcl9fY29udHJvbC1pbWFnZV9uZXh0JyksICAvL29rXHJcbiAgICBuZXh0QnV0dG9uID0gc2xpZGVyLmZpbmQoJy5qcy1zbGlkZXJfX25leHQnKSwgLy9va1xyXG4gICAgbmV4dEJ1dHRvbkltYWdlQ3VycmVudCA9IG5leHRCdXR0b24uZmluZCgnLmpzLXNsaWRlcl9fY29udHJvbC1pbWFnZV9jdXJyZW50JyksIC8vb2tcclxuICAgIG5leHRCdXR0b25JbWFnZU5leHQgPSBuZXh0QnV0dG9uLmZpbmQoJy5qcy1zbGlkZXJfX2NvbnRyb2wtaW1hZ2VfbmV4dCcpLCAvL29rXHJcbiAgLy8g0KHQu9Cw0LnQtNGLXHJcbiAgICBpdGVtcyA9IHNsaWRlci5maW5kKCcuc2xpZGVyX19pdGVtJyksXHJcbiAgICBjdXJyZW50ID0gMCxcclxuICAgIGN1cnJlbnRTbGlkZUl0ZW0sXHJcbiAgICBwcmV2U2xpZGVJdGVtLFxyXG4gICAgbmV4dFNsaWRlSXRlbTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUobnVtKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgIGlmIChudW0gPCAwKVxyXG4gICAgICByZXN1bHQgPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgZWxzZSBpZiAobnVtID4gaXRlbXMubGVuZ3RoIC0gMSlcclxuICAgICAgcmVzdWx0ID0gMDtcclxuICAgIGVsc2VcclxuICAgICAgcmVzdWx0ID0gbnVtO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYWxjU2xpZGVzKCkge1xyXG4gICAgdmFyXHJcbiAgICAgIHByZXYgPSB2YWxpZGF0ZShjdXJyZW50IC0gMSksXHJcbiAgICAgIG5leHQgPSB2YWxpZGF0ZShjdXJyZW50ICsgMSk7XHJcblxyXG4gICAgY3VycmVudFNsaWRlSXRlbSA9IGl0ZW1zLmVxKGN1cnJlbnQpO1xyXG4gICAgcHJldlNsaWRlSXRlbSA9IGl0ZW1zLmVxKHByZXYpO1xyXG4gICAgbmV4dFNsaWRlSXRlbSA9IGl0ZW1zLmVxKG5leHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNhbGNTbGlkZXMoKTtcclxuXHJcbiAgICBjaGFuZ2VTbGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZChlbGVtLCBiYWNrZ3JvdW5kKSB7XHJcbiAgICBlbGVtLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoXCInICsgYmFja2dyb3VuZCArICdcIiknKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZVNsaWRlQ29udHJvbChuZXh0LCBjdXJyZW50LCBiYWNrZ3JvdW5kLCBkaXJlY3Rpb24pIHtcclxuICAgIGlmIChkaXJlY3Rpb24pIHtcclxuICAgICAgbmV4dC5jc3MoJ3RvcCcsICcxMDAlJylcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VCYWNrZ3JvdW5kKG5leHQsIGJhY2tncm91bmQpLmFuaW1hdGUoe1xyXG4gICAgICB0b3A6ICcwJSdcclxuICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIGRpcmVjdGlvbiA/ICcxMDAlJyA6ICctMTAwJScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY3VycmVudC5hbmltYXRlKHtcclxuICAgICAgdG9wOiBkaXJlY3Rpb24gPyAnLTEwMCUnIDogJzEwMCUnXHJcbiAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNoYW5nZUJhY2tncm91bmQoJCh0aGlzKSwgYmFja2dyb3VuZCkuY3NzKCd0b3AnLCAnMCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0ZXh0Q2hhbmdlKGVsZW0sIHRleHQsIGFuaW1hdGlvbk5hbWUpIHtcclxuICAgIHZhclxyXG4gICAgICBsZXR0ZXJzID0gdGV4dC5zcGxpdCgnJyksXHJcbiAgICAgIHN0ciA9ICc8c3BhbiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj4nLFxyXG4gICAgICBhbmltYXRpb25EZWxheSA9IDA7XHJcblxyXG4gICAgbGV0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIsIGlkKSB7XHJcbiAgICAgIGFuaW1hdGlvbkRlbGF5Kys7XHJcblxyXG4gICAgICBpZiAobGV0dGVyID09PSAnICcpIHtcclxuICAgICAgICBzdHIgKz0gJyZuYnNwOzwvc3Bhbj48c3BhbiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj4nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ciArPSAnPHNwYW4gaWQ9XCJsZXR0ZXItJyArIGlkICsgJ1wiIGNsYXNzPVwiJyArIGFuaW1hdGlvbk5hbWVcclxuICAgICAgICAgICsgJ1wiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBhbmltYXRpb24tZGVsYXk6J1xyXG4gICAgICAgICAgKyBhbmltYXRpb25EZWxheSAvIDIwXHJcbiAgICAgICAgICArICdzXCI+J1xyXG4gICAgICAgICAgKyBsZXR0ZXJcclxuICAgICAgICAgICsgJzwvc3Bhbj4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICBzdHIgKz0gJzwvc3Bhbj4nO1xyXG4gICAgZWxlbS5odG1sKHN0cik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VTbGlkZSgpIHtcclxuICAgIC8vINCh0LzQtdC90LAg0LPQu9Cw0LLQvdC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbiAgICBpbWFnZS5mYWRlT3V0KDMwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjaGFuZ2VCYWNrZ3JvdW5kKCQodGhpcyksIGN1cnJlbnRTbGlkZUl0ZW0uZGF0YSgnaW1nJykpLmZhZGVJbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0KHQvNC10L3QsCDRgtC10LrRgdGC0LBcclxuICAgIHRleHRDaGFuZ2UobmFtZSwgY3VycmVudFNsaWRlSXRlbS5kYXRhKCduYW1lJyksICdib3VuY2VJbicpO1xyXG4gICAgdGV4dENoYW5nZShkZXNjcmlwdGlvbiwgY3VycmVudFNsaWRlSXRlbS5kYXRhKCdkZXNjcmlwdGlvbicpLCAnYm91bmNlSW4nKTtcclxuICAgIGxpbmsuYXR0cignaHJlZicsIGN1cnJlbnRTbGlkZUl0ZW0uZGF0YSgnbGluaycpKTtcclxuXHJcbiAgICAvLyDQodC80LXQvdCwINGB0LvQsNC50LTQvtCyINCyINC60L7QvdGC0YDQvtC70LDRhVxyXG4gICAgY2hhbmdlU2xpZGVDb250cm9sKHByZXZCdXR0b25JbWFnZU5leHQsIHByZXZCdXR0b25JbWFnZUN1cnJlbnQsIHByZXZTbGlkZUl0ZW0uZGF0YSgnaW1nJykpO1xyXG4gICAgY2hhbmdlU2xpZGVDb250cm9sKG5leHRCdXR0b25JbWFnZU5leHQsIG5leHRCdXR0b25JbWFnZUN1cnJlbnQsIG5leHRTbGlkZUl0ZW0uZGF0YSgnaW1nJyksIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xyXG4gICAgY3VycmVudCA9IHZhbGlkYXRlKCsrY3VycmVudCk7XHJcbiAgICBjYWxjU2xpZGVzKCk7XHJcbiAgICBzbGlkZXIudHJpZ2dlcignY2hhbmdlU2xpZGUnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByZXZTbGlkZSgpIHtcclxuICAgIGN1cnJlbnQgPSB2YWxpZGF0ZSgtLWN1cnJlbnQpO1xyXG4gICAgY2FsY1NsaWRlcygpO1xyXG4gICAgc2xpZGVyLnRyaWdnZXIoJ2NoYW5nZVNsaWRlJyk7XHJcbiAgfVxyXG5cclxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBpbml0KCkpO1xyXG4gIHNsaWRlci5vbignY2hhbmdlU2xpZGUnLCBjaGFuZ2VTbGlkZSk7XHJcbiAgbmV4dEJ1dHRvbi5jbGljayhuZXh0U2xpZGUpO1xyXG4gIHByZXZCdXR0b24uY2xpY2socHJldlNsaWRlKTtcclxuICB9KSgpO1xyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
