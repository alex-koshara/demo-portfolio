$(document).ready(function () {

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


        reqLink.closest('.blog__fixed .menu__item').addClass('active')
                        .siblings().removeClass('active');
           
        window.location.hash = currentId;

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
var options = {
  mapTypeControlOptions: {
    mapTypeIds: [ 'Koshara Alexandr']
  },
  center: new google.maps.LatLng(44.95650027, 34.10031259),
  zoom: 16,
  mapTypeId: 'Koshara Alexandr'
};
var div = document.getElementById('google-map');
var map = new google.maps.Map(div, options);
var styledMapType = new google.maps.StyledMapType(styles, { name: 'Koshara Alexandr' });
map.mapTypes.set('Koshara Alexandr', styledMapType);

//добавил маркер на карту
var imageMarker = 'assets/img/awesome/map_marker.png';
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(44.95691973, 34.10664126),
    icon: imageMarker
});
marker.setMap(map);


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



});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKCcubWVudV9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNob3dQb3N0KCQodGhpcykuYXR0cignaHJlZicpLCB0cnVlKTtcclxuICB9KTtcclxuXHJcblxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICBjaGVja0Jsb2dTZWN0aW9uKCk7XHJcbiAgICBzaG93U2tpbGwoKTtcclxuICB9KTsgLy8gLT4gZW5kIHNjcm9sbCBzZWN0aW9uXHJcblxyXG4gIGZ1bmN0aW9uIHNob3dQb3N0KHNlY3Rpb24sIGlzQW5pbWF0ZSkgeyAgXHJcbiAgICB2YXJcclxuICAgICAgZGlyZWN0aW9uID0gc2VjdGlvbi5yZXBsYWNlKC8jLywgJycpLFxyXG4gICAgICByZXFTZWN0aW9uID0gJCgnLmJsb2dfX2NvbnRlbnQtYXJ0aWNsZScpLmZpbHRlcignW2RhdGEtc2VjdGlvbj1cIicgKyBkaXJlY3Rpb24gKyAnXCJdJyk7XHJcbiAgICAgIHJlcVNlY3Rpb25Qb3MgPSByZXFTZWN0aW9uLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgIGlmIChpc0FuaW1hdGUpIHtcclxuICAgICAgICAkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiByZXFTZWN0aW9uUG9zfSwgNTAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCdib2R5LCBocm1sJykuc2Nyb2xsVG9wKHJlcVNlY3Rpb25Qb3MpO1xyXG4gICAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrQmxvZ1NlY3Rpb24oKSB7XHJcbiAgICAkKCcuYmxvZ19fY29udGVudC1hcnRpY2xlJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICB2YXJcclxuICAgICAgICAkdGhpcyA9ICQodGhpcyksIC8vINCy0YHQtSDRgdGC0LDRgtGM0LhcclxuICAgICAgICB0b3BFZGdlID0gJHRoaXMub2Zmc2V0KCkudG9wIC0gMjAwLCAvLyDQtNCw0L3QvdCw0Y8g0YHRgtCw0YLRjNGPIC0gMjAwINC+0YIg0L3QsNGH0LDQu9CwINC00L7QutGD0LzQtdC90YLQsCDQtNC+INC90LXRkVxyXG4gICAgICAgIGJvdHRvbUVkZ2UgPSB0b3BFZGdlICsgJHRoaXMuaGVpZ2h0KCksIC8vINC6INGC0L7Rh9C60LUg0L3QsNGH0LDQu9CwINGB0YLQsNGC0YzQuCDQtNC+0LHQsNCy0LvRj9C10LxcclxuICAgICAgICBtZW51ID0gJCgnLmJsb2dfX3N0YXRpYyAubWVudV9fbGlzdCcpLFxyXG4gICAgICAgIHNpZGViYXIgPSAkKCcuYmxvZ19fc3RhdGljIC5tZW51X193cmFwcGVyJyksIFxyXG4gICAgICAgIHN0aWNreVN0YXJ0ID0gc2lkZWJhci5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgbWVudUNsb25lID0gc2lkZWJhci5jbG9uZSgpLFxyXG4gICAgICAgIGZpeGVkU2lkZWJhciA9ICQoJy5ibG9nX19maXhlZCAuYmxvZ19fbGVmdC1jb2wnKSxcclxuICAgICAgICB3U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIC8vIGFjdGl2ZURhdGFzZXQgPSAkKHRoaXMpWzBdLmRhdGFzZXQuc2VjdGlvbixcclxuICAgICAgICAvLyBhY3RpdmVEaXJlY3Rpb24gPSBhY3RpdmVEYXRhc2V0LnJlcGxhY2UoLyMvLCAnJyksXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgaWYgKHRvcEVkZ2UgPCB3U2Nyb2xsICYmIGJvdHRvbUVkZ2UgPiB3U2Nyb2xsKSB7XHJcbiAgICAgICAgdmFyXHJcbiAgICAgICAgICBjdXJyZW50SWQgPSAkdGhpcy5kYXRhKCdzZWN0aW9uJyksXHJcbiAgICAgICAgICByZXFMaW5rID0gJCgnLm1lbnVfX2xpbmsnKS5maWx0ZXIoJ1tocmVmPVwiIycgKyBjdXJyZW50SWQgKyAnXCJdJyk7XHJcblxyXG5cclxuICAgICAgICByZXFMaW5rLmNsb3Nlc3QoJy5ibG9nX19maXhlZCAubWVudV9faXRlbScpLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBjdXJyZW50SWQ7XHJcblxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIGlmICh3U2Nyb2xsID49IHN0aWNreVN0YXJ0KSB7XHJcblxyXG4gICAgaWYgKCFmaXhlZFNpZGViYXIuZmluZCgnLm1lbnVfX3dyYXBwZXInKS5sZW5ndGgpIHtcclxuICAgICAgZml4ZWRTaWRlYmFyLmFwcGVuZChtZW51Q2xvbmUpO1xyXG4gICAgICBtZW51LmhpZGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgZml4ZWRTaWRlYmFyLmZpbmQoJy5tZW51X193cmFwcGVyJykucmVtb3ZlKCk7XHJcbiAgICBtZW51LnNob3coKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHZhciBzdHlsZXMgPSBbXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXHJcbiAgICBlbGVtZW50VHlwZTogJ2FsbCcsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHsgaHVlOiAnIzQzNjlhYScgfSxcclxuICAgICAgeyBzYXR1cmF0aW9uOiAtMyB9LFxyXG4gICAgICB7IGxpZ2h0bmVzczogLTM5IH0sXHJcbiAgICAgIHsgdmlzaWJpbGl0eTogJ29uJyB9XHJcbiAgICBdXHJcbiAgfSx7XHJcbiAgICBmZWF0dXJlVHlwZTogJ2xhbmRzY2FwZScsXHJcbiAgICBlbGVtZW50VHlwZTogJ2FsbCcsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHsgaHVlOiAnI2YyZjJmMicgfSxcclxuICAgICAgeyBzYXR1cmF0aW9uOiAtMTAwIH0sXHJcbiAgICAgIHsgbGlnaHRuZXNzOiA1NCB9LFxyXG4gICAgICB7IHZpc2liaWxpdHk6ICdvbicgfVxyXG4gICAgXVxyXG4gIH0se1xyXG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkJyxcclxuICAgIGVsZW1lbnRUeXBlOiAnYWxsJyxcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAgeyBodWU6ICcjZWFlYWVhJyB9LFxyXG4gICAgICB7IHNhdHVyYXRpb246IC0xMDAgfSxcclxuICAgICAgeyBsaWdodG5lc3M6IDc3IH0sXHJcbiAgICAgIHsgdmlzaWJpbGl0eTogJ29uJyB9XHJcbiAgICBdXHJcbiAgfSx7XHJcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXHJcbiAgICBlbGVtZW50VHlwZTogJ2FsbCcsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHsgaHVlOiAnI2Q2ZDZkNicgfSxcclxuICAgICAgeyBzYXR1cmF0aW9uOiAtMTAwIH0sXHJcbiAgICAgIHsgbGlnaHRuZXNzOiA1NSB9LFxyXG4gICAgICB7IHZpc2liaWxpdHk6ICdvbicgfVxyXG4gICAgXVxyXG4gIH0se1xyXG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmFydGVyaWFsJyxcclxuICAgIGVsZW1lbnRUeXBlOiAnYWxsJyxcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAgeyBodWU6ICcjZmZmZmZmJyB9LFxyXG4gICAgICB7IHNhdHVyYXRpb246IC0xMDAgfSxcclxuICAgICAgeyBsaWdodG5lc3M6IDEwMCB9LFxyXG4gICAgICB7IHZpc2liaWxpdHk6ICdvbicgfVxyXG4gICAgXVxyXG4gIH0se1xyXG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmxvY2FsJyxcclxuICAgIGVsZW1lbnRUeXBlOiAnYWxsJyxcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAgeyBodWU6ICcjZWFlYWVhJyB9LFxyXG4gICAgICB7IHNhdHVyYXRpb246IC0xMDAgfSxcclxuICAgICAgeyBsaWdodG5lc3M6IC04IH0sXHJcbiAgICAgIHsgdmlzaWJpbGl0eTogJ29uJyB9XHJcbiAgICBdXHJcbiAgfSx7XHJcbiAgICBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJyxcclxuICAgIGVsZW1lbnRUeXBlOiAnYWxsJyxcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAgeyBodWU6ICcjZjJmMGU4JyB9LFxyXG4gICAgICB7IHNhdHVyYXRpb246IC0zNSB9LFxyXG4gICAgICB7IGxpZ2h0bmVzczogNjggfSxcclxuICAgICAgeyB2aXNpYmlsaXR5OiAnb24nIH1cclxuICAgIF1cclxuICB9XHJcbl07XHJcbnZhciBvcHRpb25zID0ge1xyXG4gIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xyXG4gICAgbWFwVHlwZUlkczogWyAnS29zaGFyYSBBbGV4YW5kciddXHJcbiAgfSxcclxuICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDQuOTU2NTAwMjcsIDM0LjEwMDMxMjU5KSxcclxuICB6b29tOiAxNixcclxuICBtYXBUeXBlSWQ6ICdLb3NoYXJhIEFsZXhhbmRyJ1xyXG59O1xyXG52YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2dsZS1tYXAnKTtcclxudmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZGl2LCBvcHRpb25zKTtcclxudmFyIHN0eWxlZE1hcFR5cGUgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShzdHlsZXMsIHsgbmFtZTogJ0tvc2hhcmEgQWxleGFuZHInIH0pO1xyXG5tYXAubWFwVHlwZXMuc2V0KCdLb3NoYXJhIEFsZXhhbmRyJywgc3R5bGVkTWFwVHlwZSk7XHJcblxyXG4vL9C00L7QsdCw0LLQuNC7INC80LDRgNC60LXRgCDQvdCwINC60LDRgNGC0YNcclxudmFyIGltYWdlTWFya2VyID0gJ2Fzc2V0cy9pbWcvYXdlc29tZS9tYXBfbWFya2VyLnBuZyc7XHJcbnZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQ0Ljk1NjkxOTczLCAzNC4xMDY2NDEyNiksXHJcbiAgICBpY29uOiBpbWFnZU1hcmtlclxyXG59KTtcclxubWFya2VyLnNldE1hcChtYXApO1xyXG5cclxuXHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyXHJcbiAgICAgIGRvYyA9IGRvY3VtZW50LFxyXG4gICAgICBhdXRoID0gJChcIiNhdXRoXCIpLFxyXG4gICAgICBmbGlwcGVyID0gJChcIiNmbGlwcGVyXCIpLFxyXG4gICAgICBmbGlwcGVySGVscCA9ICQoXCIjZmxpcHBlckhlbHBcIiksXHJcbiAgICAgIHJldHVybkJhY2sgPSAkKFwiI3JldHVybkJhY2tcIik7XHJcblxyXG4gICBpZihhdXRoKSB7XHJcbiAgICAgIGF1dGgub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgZmxpcHBXZWxjb21lKFwibm9uZVwiKTtcclxuICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybkJhY2sub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmbGlwcFdlbGNvbWUoXCJmbGV4XCIpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGZsaXBwV2VsY29tZShkaXNwKSB7XHJcbiAgICAgIGZsaXBwZXIudG9nZ2xlQ2xhc3MoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgYXV0aC50b2dnbGVDbGFzcyhcInZpc2libGVcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIGZsaXBwZXJIZWxwLmNzcyhcImRpc3BsYXlcIiAsIGRpc3ApO1xyXG4gICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuICB9KSgpO1xyXG5cclxuXHJcblxyXG4gIChmdW5jdGlvbigpe1xyXG4gICAgdmFyXHJcbiAgICAgICAgbWFpbk5hdiA9ICQoXCIjbWFpbk5hdlwiKSxcclxuICAgICAgICBtYWluUG9wdXAgPSAkKFwiI3BvcHVwX19uYXZcIiksXHJcbiAgICAgICAgcG9wdXBDbG9zZSA9ICQoXCIjcG9wdXBfX2Nsb3NlXCIpO1xyXG5cclxuICAgIGlmKG1haW5OYXYpIHtcclxuICAgICAgbWFpbk5hdi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHBvcHVwQWJvdXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYocG9wdXBDbG9zZSkge1xyXG4gICAgICBwb3B1cENsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcG9wdXBBYm91dCgpO1xyXG5cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdXBBYm91dCgpIHtcclxuICAgICAgbWFpblBvcHVwLnRvZ2dsZUNsYXNzKFwibm90LXZpc2libGVcIik7XHJcbiAgICAgIG1haW5OYXYudG9nZ2xlQ2xhc3MoXCJub3QtdmlzaWJsZVwiKTtcclxuICAgIH07XHJcblxyXG4gIH0pKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyDQv9C+0Y/QstC70LXQvdC40LUg0YHQutC40LvQu9C+0LJcclxuICAgIGZ1bmN0aW9uIHNob3dTa2lsbCgpIHtcclxuICAgICQoJy5za2lsbF9faXRlbScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgdmFyXHJcbiAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgIHdpbkhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIDIwMCwgXHJcbiAgICAgICAgdG9wRWRnZSA9ICR0aGlzLm9mZnNldCgpLnRvcCAtIHdpbkhlaWdodCxcclxuICAgICAgICBib3R0b21FZGdlID0gdG9wRWRnZSArICR0aGlzLmhlaWdodCgpLFxyXG4gICAgICAgIHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICBpZiAodG9wRWRnZSA8IHdTY3JvbGwgJiYgYm90dG9tRWRnZSA+IHdTY3JvbGwpIHtcclxuICAgICAgICB2YXIgc2tpbGxCbG9jayA9ICR0aGlzLmZpbmQoJy5zZWN0b3InKVxyXG4gICAgICAgIHNraWxsQmxvY2suZWFjaChmdW5jdGlvbihpdGVtLCB2YWwpe1xyXG4gICAgICAgICAgdmFsLmNsYXNzTGlzdC5yZW1vdmUoJ251bGxfX3N0cm9rZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgLy8g0LrQvtC90LXRhiDRgdC60LjQu9C70L7QslxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
