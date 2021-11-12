class StepsController < ApplicationController
    def index 
        @steps = Step.all
        render json: @steps, status: 200
    end

    def show
        step = Step.find_by(id: params[:id])
        if step
          render json: step
        else
          render json: { error: "Step not found" }, status: :not_found
        end
    end

    def create
      byebug
        @step = Step.create(steps_params)
        render json: @step, status: 200
    end


    def destroy
        @step = Step.find(params[:id])
        @step.destroy
    end

    def update
        step = Step.find_by(id: params[:id])
        if step
          step.update(steps_params)
          render json: step
        else
          render json: { error: "step not found" }, status: :not_found
        end
    end

    private

    def steps_params
        params.permit(:id, :step_instruction, :recipe_id)
    end
end
