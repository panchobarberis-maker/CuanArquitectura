document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const setScrolled = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  const menuToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuClose = document.querySelector('.mobile-menu-close');
  const openMenu = () => mobileMenu && mobileMenu.classList.add('is-open');
  const closeMenu = () => mobileMenu && mobileMenu.classList.remove('is-open');
  menuToggle && menuToggle.addEventListener('click', openMenu);
  menuClose && menuClose.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));

  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(open => {
        if (open !== item) {
          open.classList.remove('is-open');
          open.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      item.classList.toggle('is-open', !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
    });
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('[data-category]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const filter = btn.dataset.filter;
      portfolioItems.forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.style.display = show ? '' : 'none';
      });
    });
  });

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      bookingForm.classList.add('is-hidden');
      const success = document.getElementById('booking-success');
      if (success) success.classList.add('is-visible');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  if (lightbox && lightboxImg) {
    const openLightbox = (src, caption) => {
      lightboxImg.src = src;
      lightboxImg.alt = caption || '';
      lightboxCaption.textContent = caption || '';
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
      lightbox.classList.remove('is-open');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    };
    document.querySelectorAll('[data-lightbox]').forEach(img => {
      img.addEventListener('click', () => openLightbox(img.currentSrc || img.src, img.dataset.caption || img.alt));
    });
    lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
