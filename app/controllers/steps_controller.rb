class StepsController < ApplicationController
    def index 
        @steps = Step.all
        render json: @steps, status: 200
    end

    private

    def steps_params
        params.permit(:step_instruction, :recipe_id)
    end
end
