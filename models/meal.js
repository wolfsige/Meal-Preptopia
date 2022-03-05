import mongoose from "mongoose";

const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: {type: String, required: true,}
})

const Meal = mongoose.Schema('Meal', mealSchema)

export{
  Meal
}