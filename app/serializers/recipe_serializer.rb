class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :dish_description, :image_url, :user_id
  has_many :steps
  has_many :ingredients
end
