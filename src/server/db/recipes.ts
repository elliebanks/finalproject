import { Query } from "./index";

const getRecipe = async () =>
  Query(`select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink, ingredients.name, ingredients.amount, users.username from recipes
  join ingredients on recipes.id = ingredients.recipeid
  join users on users.id=recipes.userid`);

  const oneRecipe = async (id: any) =>
  Query(`select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink,  ingredients.name, ingredients.amount, users.username from recipes
  join ingredients on recipes.id = ingredients.recipeid
  join users on recipes.userid=users.id
  where recipes.id = ?`, [id]);

// const postRecipe = async () =>
//   Query(
//     `insert into users(name, email, password) values("${name}", "${email}", "${password}")`
//   );

// const postChirp = async (userid, content, location) =>
//   Query(`insert into chirps(userid, content, location) values(?, ?, ?)`, [
//     userid,
//     content,
//     location,
//   ]);








export default {
  getRecipe,
  oneRecipe,
//   postRecipe
  
};
