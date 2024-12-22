document.addEventListener('DOMContentLoaded', function() {
    // Get all video elements
    var videos = document.querySelectorAll('video');
  
    // Get all play/pause buttons
    var playButtons = document.querySelectorAll('[class^="btn-"]');
  
    // Add click event listeners to each play button
    playButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        // Pause all other videos before playing the clicked one
        videos.forEach(function(video) {
          if (!video.paused && video.id !== 'vid-' + (index + 1)) {
            video.pause();
          }
        });
  
        // Get the corresponding video element
        var video = document.getElementById('vid-' + (index + 1));
  
        // Toggle play/pause
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });
  });
  