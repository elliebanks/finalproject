import { Query } from "./index";

const getRecipe = async () =>
  Query(`select recipes.id, recipes.title, recipes.directions, ingredients.name, ingredients.amount from recipes
  join ingredients on recipes.id = ingredients.recipeid`);







export default {
  getRecipe
  
};
