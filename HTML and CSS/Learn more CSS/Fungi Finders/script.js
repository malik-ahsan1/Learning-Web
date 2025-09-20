const navToggle = document.querySelector('[aria-controls="primary-nav"]');

navToggle.addEventListener('click', () => {
  const isNavOpened = navToggle.getAttribute('aria-expanded');

  if (isNavOpened === 'false') {
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const resizeObserver = new ResizeObserver((entries) => {
  entries[0].target.classList.add('resizing');

  requestAnimationFrame(() => {
    entries[0].target.classList.remove('resizing');
  });
});

resizeObserver.observe(document.body);
