(function() {
   var doc = document,
       auth = doc.querySelector("#auth"),
       flipper = doc.querySelector("#flipper"),
       flipperHelp = doc.querySelector("#flipperHelp"),
       returnBack = doc.querySelector("#returnBack");


       auth.addEventListener("click", function () {
         flipper.classList.add("rotate");
         setTimeout(function () {
           flipperHelp.style.display = "none";
         }, 200);
       });

       returnBack.addEventListener("click", function(e) {
        e.preventDefault();
        flipper.classList.remove("rotate");
        setTimeout(function () {
           flipperHelp.style.display = "flex";
         }, 200);
       });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAgdmFyIGRvYyA9IGRvY3VtZW50LFxyXG4gICAgICAgYXV0aCA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI2F1dGhcIiksXHJcbiAgICAgICBmbGlwcGVyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjZmxpcHBlclwiKSxcclxuICAgICAgIGZsaXBwZXJIZWxwID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjZmxpcHBlckhlbHBcIiksXHJcbiAgICAgICByZXR1cm5CYWNrID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcmV0dXJuQmFja1wiKTtcclxuXHJcblxyXG4gICAgICAgYXV0aC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICBmbGlwcGVyLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgIGZsaXBwZXJIZWxwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgIH0pO1xyXG5cclxuICAgICAgIHJldHVybkJhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZmxpcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwicm90YXRlXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgIGZsaXBwZXJIZWxwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgIH0pO1xyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
