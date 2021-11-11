class IngredientsController < ApplicationController
    def index
        @ingredients = Ingredient.all
        render json: @ingredients, status: 200
    end

    def show
        ingredient = Ingredient.find_by(id: params[:id])
        if ingredient
          render json: ingredient
        else
          render json: { error: "ingredient not found" }, status: :not_found
        end
    end

    def create
        @ingredient = Ingredient.create(ingredients_params)
        render json: @ingredient, status: 200
    end

    def destroy
        @ingredient = Ingredient.find(params[:id])
        @ingredient.destroy
    end

    def update
        ingredient = Ingredient.find_by(id: params[:id])
        if ingredient
          ingredient.update(ingredients_params)
          render json: ingredient
        else
          render json: { error: "ingredient not found" }, status: :not_found
        end
    end
    
    private

    def ingredients_params
        params.permit(:id, :ingredient_name, :recipe_id)
    end
end
