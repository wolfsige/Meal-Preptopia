import { Ingredient } from "../models/ingredient.js";

function create(req, res){
  Ingredient.create(req.body, function(err, ingredient){
    res.redirect('/meals/new')
  })
}

function newIngredient(req, res){
  Ingredient.find({}, function(err, ingredients){
    console.log(ingredients);
    res.render('ingredients/new', {
      title: "Add Ingredient",
      ingredients,
    })
  })
}

export{
  create,
  newIngredient as new,
}