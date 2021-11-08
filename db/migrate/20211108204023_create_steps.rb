class CreateSteps < ActiveRecord::Migration[6.1]
  def change
    create_table :steps do |t|
      t.string :step_instruction
      t.integer :recipe_id

      t.timestamps
    end
  end
end
