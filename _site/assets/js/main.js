document.addEventListener("DOMContentLoaded", function () {
    new SweetScroll({});
    
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 85,
          density: { enable: true, value_area: 800 }
        },
        color: { 
          value: ["#ff0000", "#00ff00", "#0000ff"]
        },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
        },
        opacity: {
          value: 0.65,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 5,
          random: true,
          anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.65,
          direction: "right",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { 
            enable: true, 
            mode: "repulse",
            parallax: { enable: true, force: 30, smooth: 70 }
          },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { 
            distance: 85,
            duration: 0.9
          },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover"
      }
    });
  
    // Custom activation animation
    setInterval(function() {
      var particles = pJSDom[0].pJS.particles.array;
      var randomParticle = particles[Math.floor(Math.random() * particles.length)];
      
      if (randomParticle) {
        randomParticle.color.value = "#ffffff";
        randomParticle.size = 8;
  
        setTimeout(function() {
          randomParticle.color.value = randomParticle.initialColor;
          randomParticle.size = randomParticle.initialSize;
        }, 300);
      }
    }, 500);
  
  }, false);
  
  // Initialize particle colors and sizes
  window.addEventListener('load', function() {
    if (window.pJSDom && window.pJSDom[0].pJS.particles) {
      var particles = window.pJSDom[0].pJS.particles.array;
      particles.forEach(function(p) {
        p.initialColor = p.color.value;
        p.initialSize = p.radius;
      });
    }
  });