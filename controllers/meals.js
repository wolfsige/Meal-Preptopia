import { Meal } from "../models/meal.js";


function index(req, res){
  Meal.find({}, function (error, meals){
    res.render("meals/index", {
      error,
      meals,
      title: "All Meals!"
    })
  })
}

function newMeals(req, res){
  res.render('meals/new', {
    title: "Add A New Recipe"
  })
}

// function create(req, res){
//   Meal.create(req.body)
//   .then(meal =>{
//     res.redirect('/meals')
//   })
//   .catch(err =>{
//     console.log(err)
//     res.redirect('/meals')
//   })
// }

export{
  index,
  newMeals as new
}