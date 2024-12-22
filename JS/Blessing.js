document.addEventListener("DOMContentLoaded", function() {
  var song = document.getElementById("audio");
  if (song) {
    song.volume = 0.1;
    song.currentTime = 67.5;

    setTimeout(function() {
      song.play();
  
      setTimeout(function() {
        song.pause();
        song.currentTime = 67.5;
      }, 2000);
    }, 14200);
  }

  window.addEventListener("scroll", function() {
    var windowBottom = window.scrollY + window.innerHeight;
    document.querySelectorAll(".fade").forEach(function(element) {
      var objectBottom = element.offsetTop + element.offsetHeight;
      if (objectBottom < windowBottom) {
        if (window.getComputedStyle(element).opacity == 0) {
          element.style.opacity = 1;
        }
      } else {
        if (window.getComputedStyle(element).opacity == 1) {
          element.style.opacity = 0;
        }
      }
    });
  });

  document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function() {
      window.location.replace("CardsPage.html");
    });
  });

  function applyRandomTilt() {
    document.querySelectorAll('img').forEach(img => {
      const randomTilt = (Math.random() - 0.5) * 10; // Random tilt between -5 and 5 degrees
      img.style.transform = `rotate(${randomTilt}deg)`;
    });
  }

  applyRandomTilt();
});
