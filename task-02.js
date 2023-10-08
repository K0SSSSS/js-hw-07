const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsList = document.querySelector('ul.ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredientText) => {
const listItem = document.createElement('li');
listItem.textContent = ingredientText;
console.log(fragment.appendChild(listItem));
});

console.log(ingredientsList.appendChild(fragment)) 
