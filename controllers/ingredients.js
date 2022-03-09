import { Ingredient } from "../models/ingredient.js";

function create(req, res){
  Ingredient.create(req.body, function(err, ingredient){
    res.redirect('/meals/new')
  })
}

function newIngredient(req, res){
  Ingredient.find({}, function(err, ingredients){
    res.render('ingredients/new', {
      title: "Add Ingredient",
      ingredients,
    })
  })
}





function deleteIngredient(req, res){
  console.log("sany tek");
}
 
export{
  create,
  newIngredient as new,
  deleteIngredient as delete
}