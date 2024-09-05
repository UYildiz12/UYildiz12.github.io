document.addEventListener('DOMContentLoaded', function() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var closeButton = document.getElementsByClassName('close')[0];
  
    // Get all images with class 'zoomable-plot-image'
    var images = document.querySelectorAll('.zoomable-plot-image');
  
    images.forEach(function(img) {
      img.addEventListener('click', function() {
        lightbox.classList.add('active');
        lightboxImage.src = this.src;
        
        // Ensure the image is loaded before calculating dimensions
        lightboxImage.onload = function() {
          var imgWidth = this.naturalWidth;
          var imgHeight = this.naturalHeight;
          var windowWidth = window.innerWidth * 0.9;
          var windowHeight = window.innerHeight * 0.9;
          
          var scale = Math.min(windowWidth / imgWidth, windowHeight / imgHeight);
          
          this.style.width = imgWidth * scale + 'px';
          this.style.height = imgHeight * scale + 'px';
        }
      });
    });
  
    function closeLightbox() {
      lightbox.classList.remove('active');
    }
  
    closeButton.onclick = closeLightbox;
  
    lightbox.onclick = function(event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    }
  
    // Handle window resize
    window.addEventListener('resize', function() {
      if (lightbox.classList.contains('active')) {
        var img = lightboxImage;
        var imgWidth = img.naturalWidth;
        var imgHeight = img.naturalHeight;
        var windowWidth = window.innerWidth * 0.9;
        var windowHeight = window.innerHeight * 0.9;
        
        var scale = Math.min(windowWidth / imgWidth, windowHeight / imgHeight);
        
        img.style.width = imgWidth * scale + 'px';
        img.style.height = imgHeight * scale + 'px';
      }
    });
  });