class RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        render json: @recipes, status: 200
    end

    #(GET) INDEX TO APPEAR ON POSTMAN

    # def create
    #     @recipe = Recipe.create(recipes_params)
    #     render json: @recipe, status: 200
    # end

    #CREATE WORKS

    # def destroy
    #     @recipe = Recipe.find(params[:id])
    #     @recipe.destroy
    # end

    #DELETE WORKS

    # def create
    #     recipe = Recipe.new(recipes_params)
    #     recipes_params[:steps].each do |step_data|
    #         step = recipe.steps.build(step_data)
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

    # FOR ITERATING EACH INGREDIENT NAME ^ = HAVE TO TEST ON FRONT-END
    # !! FIRST TEST STEPS THEN TRY OUT INGREDIENTS !!

    private

    def recipes_params
        params.permit(:name, :dish_description, :image_url, :user_id)
    end
end
