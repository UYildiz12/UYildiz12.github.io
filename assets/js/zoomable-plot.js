const containers = document.querySelectorAll('.zoomable-plot-container');

containers.forEach(container => {
  const image = container.querySelector('.zoomable-plot-image');
  const overlay = document.querySelector('.zoomable-plot-overlay'); // Select the overlay directly
  const largeImage = container.querySelector('.zoomable-plot-large-image');

  image.addEventListener('click', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Calculate the vertical offset relative to the viewport
    const offsetTop = container.getBoundingClientRect().top + scrollTop;
    overlay.style.top = offsetTop + 'px';
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollTop); // Restore scroll position
    }
  });
});