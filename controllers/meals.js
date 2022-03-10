import { Ingredient } from "../models/ingredient.js";
import { Meal } from "../models/meal.js";


function index(req, res){
  if (!req.user){
    res.redirect('/')
  }
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


function newMeal(req, res){
  if (!req.user){
    res.redirect('/')
  }
  Ingredient.find({})
  .then(ingredients => {
    res.render('meals/new', {
      title: "Add A Meal Name!",
      ingredients,
    })
  })
}

function create(req, res){
  if (!req.user){
    res.redirect('/')
  }
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
  if (!req.user){
    res.redirect('/')
  }
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
  if (!req.user){
    res.redirect('/')
  }
  Meal.findById(req.params.id, function(err, meal){
    meal.ingredient.push(req.body.ingredientId)
    meal.save(function(err){
      res.redirect(`/meals/${meal._id}`)
    })
  }) 
}

function deleteMeals(req, res) {
  if (!req.user){
    res.redirect('/')
  }
  Meal.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/meals')
  })
}

function deleteMealIngredient(req, res){
  if (!req.user){
    res.redirect('/')
  }
  Meal.findById(req.params.id)
  .then((meal) => {
    meal.ingredient.remove({_id: req.params.ingredientId})
    meal.save(() => {
      res.redirect(`/meals/${meal._id}`)
    })
  })
}

function createGuide(req, res){
  if (!req.user){
    res.redirect('/')
  }
  Meal.findById(req.params.id)
  .then((meal) => {
    meal.guide.push(req.body)
    meal.save(() => {
      res.redirect(`/meals/${meal._id}`)
    })
  })
}

function deleteStep(req, res){
  if (!req.user){
    res.redirect('/')
  }
  Meal.findById(req.params.id)
  .then((meal) =>{
    meal.guide[req.params.stepId].remove()
    // meal.step.remove({_id: req.params.stepId})
    meal.save(() =>{
      res.redirect(`/meals/${meal._id}`)
    })
  })
}

function edit(req, res){
  Meal.findById(req.params.id)
  .then(meal => {
    res.render('meals/edit', {
      meal,
      title: 'Edit Meal Name!'
    })
  })
}

function update(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Meal.findByIdAndUpdate(req.params.id, req.body, function(err, meal) {
    res.redirect(`/meals/${meal._id}`)
  })

}

export{
  index,
  newMeal as new,
  create,
  show,
  addIngredients,
  deleteMeals as delete,
  deleteMealIngredient,
  createGuide,
  deleteStep,
  edit,
  update
}