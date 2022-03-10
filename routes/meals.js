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

router.get('/:id/edit', mealsCtrl.edit)

// POST - localhost:3000/meals/new
router.post('/', isLoggedIn, mealsCtrl.create)
// POST - localhost:3000/:id/ingredients
router.post('/:id/ingredients', mealsCtrl.addIngredients)
router.post('/:id/guide', mealsCtrl.createGuide)

// DELETE - localhost:3000/meals/:id
router.delete('/:id', mealsCtrl.delete)
router.delete('/:id/ingredient/:ingredientId', mealsCtrl.deleteMealIngredient)
router.delete('/:id/step/:stepId', mealsCtrl.deleteStep)

router.put('/:id', mealsCtrl.update)


export{
  router
}