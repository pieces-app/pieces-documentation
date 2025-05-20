
if (window.location.pathname === '/') {
  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navbar');
    if (nav) nav.remove();

    document
      .querySelectorAll(
        'span.fixed.inset-0.bg-background-light, span.fixed.inset-0.dark\\:bg-background-dark'
      )
      .forEach(el => el.remove());

    const almond = document.querySelector('.almond-layout');
    if (almond) {
      almond.style.position = 'static';
      almond.style.top = 'auto';
    }
  });
}
