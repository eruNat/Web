document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.getElementById('aboutDrawer');
  const drawerToggle = document.getElementById('drawerToggle');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxBuy = document.getElementById('lightboxBuy');
  const lightboxClose = document.getElementById('lightboxClose');

  // Toggle bottom About/Contact drawer
  drawerToggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // Open Lightbox when clicking any gallery tile
  document.querySelectorAll('.tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const img = tile.querySelector('img');
      const buyUrl = tile.dataset.buyUrl;

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxTitle.textContent = tile.dataset.title || '';
      lightboxCategory.textContent = tile.dataset.category || '';
      lightboxDesc.textContent = tile.dataset.description || '';

      if (buyUrl) {
        lightboxBuy.href = buyUrl;
        lightboxBuy.classList.remove('hidden');
      } else {
        lightboxBuy.classList.add('hidden');
      }

      drawer.classList.remove('open');
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  // Close Lightbox via button, backdrop click, or Escape key
  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      drawer.classList.remove('open');
    }
  });
});
