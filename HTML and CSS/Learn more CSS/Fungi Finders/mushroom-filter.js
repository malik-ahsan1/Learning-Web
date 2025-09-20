const cards = document.querySelectorAll('.mushroom-guide .card');
const seasonFilter = document.querySelector('#season');
const edibilityFilter = document.querySelector('#edibility');
const noMatchesMessage = document.querySelector('.no-matches');

const currentFilters = {
  season: 'all',
  edibility: 'all',
};

cards.forEach((card, index) => {
  const mushroomId = `mushroom-card-${index + 1}`;
  card.style.viewTransitionName = mushroomId;
});

function filterCards() {
  let hasVisibleCards = false;

  cards.forEach((card) => {
    const season = card.querySelector('[data-season]').dataset.season;
    const edibility = card.querySelector('[data-edibility]').dataset.edibility;

    const seasonMatches = season === currentFilters.season;
    const edibilityMatches = edibility === currentFilters.edibility;

    if (
      (seasonMatches || currentFilters.season === 'all') &&
      (edibilityMatches || currentFilters.edibility === 'all')
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }
  });

  if (!hasVisibleCards) {
    noMatchesMessage.hidden = false;
  } else {
    noMatchesMessage.hidden = true;
  }
}

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;

  if (document.startViewTransition) {
    document.startViewTransition(filterCards);
  } else {
    filterCards();
  }
}

seasonFilter.addEventListener('change', updateFilter);
edibilityFilter.addEventListener('change', updateFilter);
