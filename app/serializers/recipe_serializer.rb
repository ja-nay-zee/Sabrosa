class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :dish_description, :image_url, :user_id
end
