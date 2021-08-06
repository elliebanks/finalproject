import * as express from "express";

const router = express.Router();
import db from "../db";

router.get("/", async (req, res) => {
  try {
      const recipes = await db.Recipes.getRecipe();
      res.json(recipes);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
);

router.get("/search-user/:username", async (req, res) => {
  try {
    const recipesByUsername = await db.Recipes.searchRecipesByUsername(req.params.username);
    res.json(recipesByUsername);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/search-ing/:ingname", async (req, res) => {
  try {
    const recipesByIngredient = await db.Recipes.searchRecipesByIngredient(req.params.ingname);
    res.json(recipesByIngredient);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let recipe = await db.Recipes.oneRecipe(req.params.id);
    console.log(recipe);

    let user = await db.Recipes.oneUser(req.params.id);
    console.log(user);

    let comment = await db.Recipes.oneComments(req.params.id);
    console.log(comment);

    let ingredients = await db.Recipes.oneIngredient(req.params.id);
    console.log(ingredients);
    res.json({
      recipe,
      user,
      comment,
      ingredients,
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});



router.post("/:id?", async (req, res) => {
  if (req.params.id) {
    try {
      console.log("comment ok");
      res.json(await db.Recipes.postComments(req.body.comment, req.params.id));
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    try {
      let User = await db.Recipes.postUser(req.body.username);
      let userid = User.insertId;
      let Recipe = await db.Recipes.postRecipe(
        req.body.imagelink,
        req.body.title,
        req.body.directions,
        req.body.description,
        req.body.cooktime,
        req.body.servings,
        userid
      );
      let recipeid = Recipe.insertId;
      let Ingredients = await db.Recipes.postIngredients(
        req.body.name,
        req.body.amount,
        recipeid
      );
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});

// router.post('/:id', async(req, res) => {

// })

export default router;
