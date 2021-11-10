class RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        render json: @recipes, status: 200
    end

    #(GET) INDEX APPEARS ON POSTMAN

    def create
        @recipe = Recipe.create(recipes_params)
        render json: @recipe, status: 200
    end

    #CREATE WORKS (YOU HAVE TO ADD THE ID TO POST)

    def destroy
        @recipe = Recipe.find(params[:id])
        @recipe.destroy
    end

    #DELETE WORKS => TO TEST YOU NEED TO DO .../recipes/(id) AND IT WILL DELETE. THEN CHECK INDEX

    def show
        recipe = Recipe.find_by(id: params[:id])
        if recipe
          render json: recipe
        else
          render json: { error: "Recipe not found" }, status: :not_found
        end
    end

    #SHOW APPEARS ON POSTMAN

    def update
        recipe = Recipe.find_by(id: params[:id])
        if recipe
          recipe.update(recipes_params)
          render json: recipe
        else
          render json: { error: "Recipe not found" }, status: :not_found
        end
    end

    #PATCH APPEARS ON POSTMAN (YOU HAVE TO DO /{id}, GET IT, THEN USE PATCH (JSON, THEN CHECK INDEX AGAIN TO SEE CHANGES)

    def create
        recipe = Recipe.new(recipes_params)
        recipes_params[:step_instruction].each do |step_data|
            step = recipe.step_instruction.build(step_data)
            if step.save
                render json: recipe, status: 200
            else
                render json: { error: "Step not found" }, status: :not_found
            end
        end
    end

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
        params.permit(:id, :name, :dish_description, :image_url, :user_id)
    end
end
