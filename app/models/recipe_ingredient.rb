class RecipeIngredient < ApplicationRecord
    belongs_to :recipe
    belongs_to :ingredient

    def ingredient_name=(ingredient_name)
       self.ingredient = Ingredient.find_or_create_by(ingredient_name: ingredient_name)
    end
end
