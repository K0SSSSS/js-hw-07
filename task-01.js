const categoriesList = document.querySelector('ul#categories');
const categoryItem = document.querySelectorAll('li.item')
console.log(`У списку ${categoryItem.length} категорії`);

categoryItem.forEach((categoryItem) => {
const categoryTitle = categoryItem.querySelector('h2').textContent;
const subItems = categoryItem.querySelectorAll('li');

console.log(`Категорія: ${categoryTitle}`);
console.log(`Кількість елементів в категорії: ${subItems.length}`)
})