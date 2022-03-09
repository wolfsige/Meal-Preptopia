import { Router } from 'express'
import * as mealsCtrl from "../controllers/meals.js"
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

// GET - localhost:3000/meals
router.get('/', mealsCtrl.index)
// GET - localhost:3000/meals/new
router.get('/new', isLoggedIn, mealsCtrl.new)
//GET - localhost:3000/meals/:id
router.get('/:id', mealsCtrl.show)

// POST - localhost:3000/meals/new
router.post('/', isLoggedIn, mealsCtrl.create)
// POST - localhost:3000/:id/ingredients
router.post('/:id/ingredients', mealsCtrl.addIngredients)

// DELETE - localhost:3000/meals/:id
router.delete('/:id', mealsCtrl.delete)



export{
  router
}