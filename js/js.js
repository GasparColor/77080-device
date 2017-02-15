  var link = document.querySelector(".contacts__link");
  var popup = document.querySelector(".write-us-popup");
  var close = popup.querySelector(".write-us-popup__close");
  var login = popup.querySelector("[name=login]");
  link.addEventListener("click", function(event) {
     event.preventDefault();
     popup.classList.add("write-us-popup-show");
     login.focus();
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("write-us-popup-show");
      });

  var mapOpen = document.querySelector(".contacts__map");

  var mapPopup = document.querySelector(".modal-content-map");
  var mapClose = mapPopup.querySelector(".write-us-popup__close");

     mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-map-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-map-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-content-map-show")) {
            mapPopup.classList.remove("modal-content-map-show");
          }
        }
      }); 