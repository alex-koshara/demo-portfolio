(function() {
   var doc = document,
       auth = doc.querySelector("#auth"),
       flipper = doc.querySelector("#flipper"),
       flipperHelp = doc.querySelector("#flipperHelp"),
       returnBack = doc.querySelector("#returnBack");


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
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgIHZhciBkb2MgPSBkb2N1bWVudCxcclxuICAgICAgIGF1dGggPSBkb2MucXVlcnlTZWxlY3RvcihcIiNhdXRoXCIpLFxyXG4gICAgICAgZmxpcHBlciA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI2ZsaXBwZXJcIiksXHJcbiAgICAgICBmbGlwcGVySGVscCA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI2ZsaXBwZXJIZWxwXCIpLFxyXG4gICAgICAgcmV0dXJuQmFjayA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI3JldHVybkJhY2tcIik7XHJcblxyXG5cclxuICAgICAgIGF1dGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgZmxpcHBlci5jbGFzc0xpc3QuYWRkKFwicm90YXRlXCIpO1xyXG4gICAgICAgICBhdXRoLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICBmbGlwcGVySGVscC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICB9KTtcclxuXHJcbiAgICAgICByZXR1cm5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZsaXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZVwiKTtcclxuICAgICAgICBhdXRoLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgIGZsaXBwZXJIZWxwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgIH0pO1xyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
