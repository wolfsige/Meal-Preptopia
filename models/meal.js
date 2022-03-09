import mongoose from "mongoose"

const Schema = mongoose.Schema

const guideSchema = new Schema({
  step: String
})

const mealSchema = new Schema({
  name: {type: String, required: true,},
  guide: [guideSchema],
  ingredient: [{type: Schema.Types.ObjectId, ref: "Ingredient"}]
})

const Meal = mongoose.model('Meal', mealSchema)

export{
  Meal
}