class RecipesController < ApplicationController
    def index
      # byebug
      if current_user
        render json: current_user.recipes, status: 200
      end
    end

    
    def create
        @recipe = Recipe.create(recipes_params)
        render json: @recipe, status: 200
        # byebug
    end


    def destroy
        @recipe = Recipe.find(params[:id])
        @recipe.destroy
    end


    def show
        recipe = Recipe.find_by(id: params[:id])
        if recipe
          render json: recipe
        else
          render json: { error: "Recipe not found" }, status: :not_found
        end
    end


    def update
        recipe = Recipe.find_by(id: params[:id])
        if recipe
          recipe.update(recipes_params)
          # byebug
          render json: recipe
        else
          render json: { error: "Recipe not found" }, status: :not_found
        end
    end

    private

    def recipes_params
        params.permit(:id, :name, :dish_description, :image_url, :user_id, steps_attributes: [:step_instruction, :recipe_id], recipe_ingredients_attributes: [:ingredient_name])
    end
end
