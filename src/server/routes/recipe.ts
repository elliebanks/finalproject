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

// router.post("/", async (req, res) => {
//   try {
//     res.json((await db.Recipes.postRecipe()));
//   } catch (e) {
//     console.log(e);
//     res.sendStatus(500);
//   }
// });





export default router;