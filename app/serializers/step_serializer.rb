class StepSerializer < ActiveModel::Serializer
  attributes :id, :step_instruction, :recipe_id
end
