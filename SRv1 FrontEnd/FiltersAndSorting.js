const filterForm = document.querySelector('#filters');
const filterNameInput = document.querySelector('#filter-name');
const filterCategorySelect = document.querySelector('#filter-category');

const sortForm = document.querySelector('#sort');
const sortBySelect = document.querySelector('#sort-by');

filterForm.addEventListener('submit', (event) => {
event.preventDefault();

console.log("Applying filters:", {
name: filterNameInput.value,
category: filterCategorySelect.value
});
});

sortForm.addEventListener('submit', (event) => {
event.preventDefault();

console.log("Applying sort:", {
sortBy: sortBySelect.value
});
});
