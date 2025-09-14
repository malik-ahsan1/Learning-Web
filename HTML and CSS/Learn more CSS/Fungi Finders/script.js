const navToggle = document.querySelector('[aria-controls="primary-nav"]');

navToggle.addEventListener('click', () => {
  const isNavOpened = navToggle.getAttribute('aria-expanded');

  if (isNavOpened === 'false') {
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
