import * as express from 'express';
const router = express.Router();
import recipeRouter from './recipe'

router.use('/recipes', recipeRouter)

export default router;