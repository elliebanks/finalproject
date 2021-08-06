import { Query } from "./index";

const getRecipe = async () =>
  Query(`select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink, ingredients.name, ingredients.amount, users.username from recipes
  join ingredients on recipes.id = ingredients.recipeid
  join users on users.id=recipes.userid`);

  const oneRecipe = async (id: any) => 
  Query(
    `SELECT * FROM  recipes WHERE recipes.id = ?`, [id]
  )

  const oneUser = async(id:any) => Query( `SELECT * FROM  users WHERE users.id = ?`, [id])

  const oneIngredient = async(id:any) => Query( `SELECT * FROM  ingredients WHERE ingredients.recipeid = ?`, [id])

  const oneComments = async(id:any) => Query( `SELECT * FROM  comments WHERE comments.recipeid = ?`, [id])


  

// const oneRecipe = async (id: any) =>
//   Query(
//     `select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink,  ingredients.name, ingredients.amount, users.username, comments.comment from recipes
//   join ingredients on recipes.id = ingredients.recipeid
//   join users on recipes.userid=users.id
//   join comments on recipes.id = comments.recipeid
//   where recipes.id = ?`,
//     [id]
//   );

const postUser = async (username) =>
  Query(`insert into users(username) values(?);`, [username]);

const postRecipe = async (
  imagelink,
  title,
  directions,
  description,
  cooktime,
  servings,
  userid
) =>
  Query(
    `insert into recipes(imagelink, title, directions, description, cooktime, servings, userid) values(?,?,?,?,?,?,?);`,
    [imagelink, title, directions, description, cooktime, servings, userid]
  );

const postIngredients = async (name, amount, recipeid) =>
  Query(`insert into ingredients(name, amount, recipeid) values(?,?,?);`, [
    name,
    amount,
    recipeid,
  ]);

const postComments = async (comment, recipeid) => Query(`insert into comments(comment, recipeid) values(?,?)`, [comment, recipeid]);

const searchRecipesByIngredient = async (ingname: string) => Query(`select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink, ingredients.name, ingredients.amount, users.username from recipes
join ingredients on recipes.id = ingredients.recipeid
join users on users.id=recipes.userid
where ingredients.name = ?`,[ingname])

const searchRecipesByUsername = async (username: string) => Query(`select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink, ingredients.name, ingredients.amount, users.username from recipes
join ingredients on recipes.id = ingredients.recipeid
join users on users.id=recipes.userid
where users.username = ?`,[username])
export default {
  getRecipe,
  oneRecipe,
  oneUser,
  oneIngredient,
  oneComments,
  postUser,
  postRecipe,
  postIngredients,
  postComments,
  searchRecipesByIngredient,
  searchRecipesByUsername
};
