import presentDrinks from "./source/presentDrinks.js";
import "./source/searchForm.js";
import './source/setDrink.js';
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL);
  
});

// console.log(id);