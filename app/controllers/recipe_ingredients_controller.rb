class RecipeIngredientsController < ApplicationController
    def index
        @rp = Recipe_Ingredients.all
        render json: @rp, status: 200
    end
    
    private

    def recipe_ingredients_params
        params.permit(:recipe_id, :ingredient_id)
    end
end
