import { Router } from 'express'

const router = Router()


router.get('/', mealsCtrl.index)



export{
  router
}