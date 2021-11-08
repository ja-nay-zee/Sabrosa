# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


User.create(first_name:"Yaneizy", last_name:"Castillo", username:"yanyan", email:"yccastillo18@gmail.com", password:"TestingApp21")

User.create(first_name:"Juliana", last_name:"Kenna", username:"julz", email:"Julz369@gmail.com", password:"LuckyElephant")

puts "User created! ✅"

Recipe.create(name:"PB&J", dish_description:"Simple lunch for those in a hurry!", image_url:"http://theheritagecook.com/wp-content/uploads/2013/10/PBJ-Triangles-w-fruit-iStock.jpg", user_id: 1)

Recipe.create(name:"Spaghetti & Meatballs", dish_description:"My grandma's infamous spaghetti and meatballs.", image_url:"https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg", user_id: 2)

puts "Recipe created! ✅"

Step.create([{ step_instruction: "Get two sliced of bread", recipe_id: 1 },
{ step_instruction: "Smear peanut butter on one slice", recipe_id: 1 },
{ step_instruction: "Smear jelly on other slice", recipe_id: 1 }, {step_instruction: "Put both slices together and VOILA!", recipe_id: 1}])

Step.create([{ step_instruction: "Boil water", recipe_id: 2 },
{ step_instruction: "Add garlic powder, chopped onion, and parlsey in to ground meat", recipe_id: 2 },
{ step_instruction: "Roll ground meat into small balls", recipe_id: 2 }, {step_instruction: "Bake them for 20 minutes", recipe_id: 2}, { step_instruction: "Boil tomato sauce", recipe_id: 2 }, { step_instruction: "Add spaghetti into boiling water for 5 minutes", recipe_id: 2 }, { step_instruction: "Drain the spaghetti", recipe_id: 2 }, { step_instruction: "Add spaghetti, meatballs, and tomato sauce all together", recipe_id: 2 },])

puts "Step created! ✅"

Ingredient.create(([{ ingredient_name: "Peanut Butter", recipe_id: 1 }, { ingredient_name: "A loaf of bread", recipe_id: 1}, { ingredient_name: "Jelly", recipe_id: 1}]))

Ingredient.create(([{ ingredient_name: "Ground meat", recipe_id: 2 }, { ingredient_name: "Spaghetti", recipe_id: 2}, { ingredient_name: "Tomato sauce", recipe_id:2}, { ingredient_name: "Parsley", recipe_id: 2 }, { ingredient_name: "Onion", recipe_id: 2 }, { ingredient_name: "Garlic Powder", recipe_id: 2 }]))

puts "Ingredient created! ✅"

RecipeIngredient.create(recipe_id: 1, ingredient_id: 1)
RecipeIngredient.create(recipe_id: 1, ingredient_id: 2)
RecipeIngredient.create(recipe_id: 1, ingredient_id: 3)

RecipeIngredient.create(recipe_id: 2, ingredient_id: 4)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 5)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 6)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 7)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 8)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 9)

puts "Recipe Ingredient Ids created! ✅"

puts "Done Seeding:) ✅"
