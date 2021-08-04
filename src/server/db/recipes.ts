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

const postUser = async (username) =>
  Query(
    `insert into users(username) values(?);`, [username]
  );

  const postRecipe = async (imagelink, title, directions, description, cooktime, servings, userid) =>
  Query(
    `insert into recipes(imagelink, title, directions, description, cooktime, servings, userid) values(?,?,?,?,?,?,?);`, [imagelink, title, directions, description, cooktime, servings, userid]
  );

  const postIngredients = async (name, amount, recipeid) =>
  Query(
    `insert into ingredients(name, amount, recipeid) values(?,?,?);`, [name, amount, recipeid]
  );









export default {
  getRecipe,
  oneRecipe,
  postUser,
  postRecipe,
  postIngredients
  
};
