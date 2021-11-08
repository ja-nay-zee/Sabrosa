class IngredientsController < ApplicationController
    def index
        @ingredients = Ingredient.all
        render json: @ingredients, status: 200
    end

    private

    def ingredients_params
        params.permit(:ingredient_name)
    end
end
