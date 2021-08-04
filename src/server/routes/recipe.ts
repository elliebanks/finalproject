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




export default router;