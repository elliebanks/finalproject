import * as express from 'express';

const router = express.Router();
import db from "../db";

router.get("/", async (req, res) => {
  try {
    const recipes = await db.Recipes.getRecipe()
    res.json(recipes);
    
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.json((await db.Recipes.oneRecipe(req.params.id))[0]);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    let User = await db.Recipes.postUser(req.body.username)
    let userid = User.insertId
    let Recipe = await db.Recipes.postRecipe(req.body.imagelink, req.body.title, req.body.directions, req.body.description, req.body.cooktime, req.body.servings, userid  )
    let recipeid = Recipe.insertId
    let Ingredients = await db.Recipes.postIngredients(req.body.name, req.body.amount, recipeid)
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});





export default router;