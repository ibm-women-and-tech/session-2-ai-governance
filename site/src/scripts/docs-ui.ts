// Mobile step-nav drawer + click-to-zoom lightbox for lab screenshots.
// Shared by DocsLayout.astro across every step and instructor page.

function initMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const close = document.getElementById('mobile-nav-close');
  const nav = document.getElementById('sidebar-nav');
  if (!toggle || !nav) return;

  const setOpen = (open: boolean) => {
    document.body.classList.toggle('mobile-nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!document.body.classList.contains('mobile-nav-open')));
  close?.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}

function initLightbox() {
  const lightbox = document.getElementById('img-lightbox');
  const lightboxImg = document.getElementById('img-lightbox-img') as HTMLImageElement | null;
  const closeBtn = document.getElementById('img-lightbox-close');
  if (!lightbox || !lightboxImg) return;

  const open = (src: string, alt: string) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
  };
  const close = () => {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  };

  document.querySelectorAll('article.prose img').forEach((img) => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('src') ?? '';
      const alt = img.getAttribute('alt') ?? '';
      if (src) open(src, alt);
    });
  });

  lightbox.addEventListener('click', close);
  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

export function initDocsUI() {
  initMobileNav();
  initLightbox();
}
