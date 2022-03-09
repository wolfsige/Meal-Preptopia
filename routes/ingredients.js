import { Router } from 'express'
import * as ingredientsCtrl from '../controllers/ingredients.js'

const router = Router()

// GET - loclahost:3000/ingredients/new
router.get('/new', ingredientsCtrl.new)

// POST - localhost:3000/ingredients
router.post('/', ingredientsCtrl.create)

// DELETE - localhost:3000/ingredients/:id
router.delete('/', ingredientsCtrl.delete)

export {
  router
}