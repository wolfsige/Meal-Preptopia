import { Ingredient } from "../models/ingredient.js";

function create(req, res){
  if (!req.user){
    res.redirect('/')
  }
  Ingredient.create(req.body, function(err, ingredient){
    res.redirect('/ingredients/new')
  })
}

function newIngredient(req, res){
  if (!req.user){
    res.redirect('/')
  }
  Ingredient.find({}, function(err, ingredients){
    res.render('ingredients/new', {
      title: "Add Or Delete an Ingredient",
      ingredients,
    })
  })
}


function deleteIngredient(req, res){
  if (!req.user){
    res.redirect('/')
  }
  Ingredient.findByIdAndDelete(req.body.ingredientId)
  .then(() =>{
    res.redirect('/ingredients/new')
  })
}
 
export{
  create,
  newIngredient as new,
  deleteIngredient as delete
}