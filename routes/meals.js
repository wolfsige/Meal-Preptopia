import { Router } from 'express'
import * as mealsCtrl from "../controllers/meals.js"
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

// GET - localhost:3000/meals
router.get('/', mealsCtrl.index)
// GET - localhost:3000/meals/new
router.get('/new', isLoggedIn, mealsCtrl.new)


// POST - localhost:3000/meals/new
// router.post('/new', isLoggedIn, mealsCtrl.create)



export{
  router
}