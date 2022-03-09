import { Ingredient } from "../models/ingredient.js";
import { Meal } from "../models/meal.js";


function index(req, res){
  Meal.find({})
  .then(meals => {
    res.render("meals/index", {
      meals,
      title: "All Current Meals!"
    })
  })
  .catch(err =>{
    console.log(err);
    res.redirect('/meals')
  })
}

// function newMeal(req, res){
//   Ingredient.find({})
//   .then(ngredient)
//   res.render('meals/new', {
//     title: 'Add A Meal Name!'
//   })
// }


function newMeal(req, res){
  Ingredient.find({})
  .then(ingredients => {
    res.render('meals/new', {
      title: "Add A Meal Name!",
      ingredients,
    })
  })
}

function create(req, res){
  Meal.create(req.body)
  .then(meal =>{
    res.redirect('/meals')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/meals')
  })
}

function show(req, res){
  Meal.findById(req.params.id)
  .populate('ingredient')
  .exec(function(err, meal){
    Ingredient.find({_id: {$nin: meal.ingredient}}, function(err, ingredients){ 
      res.render('meals/show', {
          title: meal.name,
          ingredients,
          meal,
      })
    })
  })
}

function addIngredients(req, res){
  Meal.findById(req.params.id, function(err, meal){
    meal.ingredient.push(req.body.ingredientId)
    meal.save(function(err){
      res.redirect(`/meals/${meal._id}`)
    })
  }) 
}

function deleteMeals(req, res) {
  Meal.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/meals')
  })
}

function deleteMealIngredient(req, res){
  Meal.findById(req.params.mealId)
  .then((meal) => {
    meal.ingredient.remove({_id: req.params.ingredientId})
    meal.save(() => {
      res.redirect(`/meals/${meal._id}`)
    })
  })
}

export{
  index,
  newMeal as new,
  create,
  show,
  addIngredients,
  deleteMeals as delete,
  deleteMealIngredient
}