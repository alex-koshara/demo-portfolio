$(document).ready(function () {
    (function() {
     var doc = document,
     auth = doc.querySelector("#auth"),
     flipper = doc.querySelector("#flipper"),
     flipperHelp = doc.querySelector("#flipperHelp"),
     returnBack = doc.querySelector("#returnBack");

     if(auth) {
      auth.addEventListener("click", function () {
       flipper.classList.add("rotate");
       auth.classList.toggle("visible");
       setTimeout(function () {
         flipperHelp.style.display = "none";
       }, 200);
     });

      returnBack.addEventListener("click", function(e) {
        e.preventDefault();
        flipper.classList.remove("rotate");
        auth.classList.toggle("visible");
        setTimeout(function () {
         flipperHelp.style.display = "flex";
       }, 200);
      });
    };
  })();


  (function(){
    var mainNav = document.querySelector("#mainNav");
    var  mainPopup = document.querySelector("#popup__nav"),
    popupClose = document.querySelector("#popup__close");

    if(mainNav) {
      mainNav.addEventListener("click", function(e) {
        e.preventDefault();
        mainPopup.classList.toggle("not-visible");
      });
    }

    if(popupClose) {
      popupClose.addEventListener("click", function(e) {
        e.preventDefault();
        mainPopup.classList.toggle("not-visible");
      });
    }

  }());







$(window).scroll(function() {
  var
  wScroll = $(window).scrollTop(),
  menu = $('.blog__static .menu__list'),
  sidebar = $('.blog__static .menu__wrapper '),
  stickyStart = sidebar.offset().top,
  menuClone = sidebar.clone(),
  postCaption = $('.post__caption'),
  menuActive = $('.menu__list .menu__item'),
  postSelect = 100,
  fixedSidebar = $('.blog__fixed .blog__left-col');
  var len = postCaption.length;


  for (var i = 0; i < postCaption.length; i++) {
    if ( wScroll + postSelect >= postCaption[i].offsetTop  && wScroll < postCaption[i].offsetTop ) {

      if(!menuActive[i].classList.contains("active")) {
        $(menuActive).removeClass('active');
        $(menuActive[i]).addClass('active');
      }
    }

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
});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICB2YXIgZG9jID0gZG9jdW1lbnQsXHJcbiAgICAgYXV0aCA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI2F1dGhcIiksXHJcbiAgICAgZmxpcHBlciA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI2ZsaXBwZXJcIiksXHJcbiAgICAgZmxpcHBlckhlbHAgPSBkb2MucXVlcnlTZWxlY3RvcihcIiNmbGlwcGVySGVscFwiKSxcclxuICAgICByZXR1cm5CYWNrID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcmV0dXJuQmFja1wiKTtcclxuXHJcbiAgICAgaWYoYXV0aCkge1xyXG4gICAgICBhdXRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICBmbGlwcGVyLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVcIik7XHJcbiAgICAgICBhdXRoLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIGZsaXBwZXJIZWxwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgIH0sIDIwMCk7XHJcbiAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZsaXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZVwiKTtcclxuICAgICAgICBhdXRoLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICBmbGlwcGVySGVscC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICB9LCAyMDApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSkoKTtcclxuXHJcblxyXG4gIChmdW5jdGlvbigpe1xyXG4gICAgdmFyIG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5OYXZcIik7XHJcbiAgICB2YXIgIG1haW5Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBfX25hdlwiKSxcclxuICAgIHBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwX19jbG9zZVwiKTtcclxuXHJcbiAgICBpZihtYWluTmF2KSB7XHJcbiAgICAgIG1haW5OYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbWFpblBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJub3QtdmlzaWJsZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYocG9wdXBDbG9zZSkge1xyXG4gICAgICBwb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG1haW5Qb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwibm90LXZpc2libGVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9KCkpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICB2YXJcclxuICB3U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gIG1lbnUgPSAkKCcuYmxvZ19fc3RhdGljIC5tZW51X19saXN0JyksXHJcbiAgc2lkZWJhciA9ICQoJy5ibG9nX19zdGF0aWMgLm1lbnVfX3dyYXBwZXIgJyksXHJcbiAgc3RpY2t5U3RhcnQgPSBzaWRlYmFyLm9mZnNldCgpLnRvcCxcclxuICBtZW51Q2xvbmUgPSBzaWRlYmFyLmNsb25lKCksXHJcbiAgcG9zdENhcHRpb24gPSAkKCcucG9zdF9fY2FwdGlvbicpLFxyXG4gIG1lbnVBY3RpdmUgPSAkKCcubWVudV9fbGlzdCAubWVudV9faXRlbScpLFxyXG4gIHBvc3RTZWxlY3QgPSAxMDAsXHJcbiAgZml4ZWRTaWRlYmFyID0gJCgnLmJsb2dfX2ZpeGVkIC5ibG9nX19sZWZ0LWNvbCcpO1xyXG4gIHZhciBsZW4gPSBwb3N0Q2FwdGlvbi5sZW5ndGg7XHJcblxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc3RDYXB0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoIHdTY3JvbGwgKyBwb3N0U2VsZWN0ID49IHBvc3RDYXB0aW9uW2ldLm9mZnNldFRvcCAgJiYgd1Njcm9sbCA8IHBvc3RDYXB0aW9uW2ldLm9mZnNldFRvcCApIHtcclxuXHJcbiAgICAgIGlmKCFtZW51QWN0aXZlW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICQobWVudUFjdGl2ZSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQobWVudUFjdGl2ZVtpXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaWYgKHdTY3JvbGwgPj0gc3RpY2t5U3RhcnQpIHtcclxuXHJcbiAgICBpZiAoIWZpeGVkU2lkZWJhci5maW5kKCcubWVudV9fd3JhcHBlcicpLmxlbmd0aCkge1xyXG4gICAgICBmaXhlZFNpZGViYXIuYXBwZW5kKG1lbnVDbG9uZSk7XHJcbiAgICAgIG1lbnUuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIGZpeGVkU2lkZWJhci5maW5kKCcubWVudV9fd3JhcHBlcicpLnJlbW92ZSgpO1xyXG4gICAgbWVudS5zaG93KCk7XHJcbiAgfVxyXG5cclxufSk7XHJcbn0pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
