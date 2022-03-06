import mongoose from "mongoose"

const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: {type: String, required: true,},
  ingredient: [{type: Schema.Types.ObjectId, ref: "Ingredient"}]
})

const Meal = mongoose.model('Meal', mealSchema)

export{
  Meal
}