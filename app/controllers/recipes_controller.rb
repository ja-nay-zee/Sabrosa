class RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        render json: @recipes, status: 200
    end

    
    def create
      # byebug
        @recipe = Recipe.create(recipes_params)
        render json: @recipe, status: 200
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
          render json: recipe
        else
          render json: { error: "Recipe not found" }, status: :not_found
        end
    end


    # def create
    #     recipe = Recipe.new(recipes_params)
    #     recipes_params[:step_instruction].each do |step_data|
    #         step = recipe.step_instruction.build(step_data)
    #         if step.save
    #             render json: recipe, status: 200
    #         else
    #             render json: { error: "Step not found" }, status: :not_found
    #         end
    #     end
    # end

    # FOR ITERATING EACH STEP ^ = HAVE TO TEST ON FRONT-END

    # def create
    #     recipe = Recipe.new(recipes_params)
    #     recipes_params[:ingredients].each do |ingredient_data|
    #     ingredient = recipe.ingredients.build(ingredient_data)
    #         if ingredient.save
    #             render json: recipe, status: 200
    #         else
    #             render json: { error: "Ingredient not found" }, status: :not_found
    #         end
    #     end
    # end

    private

    def recipes_params
        # params.permit(:id, :name, :dish_description, :image_url, :user_id)
        params.permit(:id, :name, :dish_description, :image_url, :user_id, step_instruction: [], ingredient_name: [])
    end
end
