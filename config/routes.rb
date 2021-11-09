Rails.application.routes.draw do
  resources :recipe_ingredients
  resources :ingredients
  resources :steps
  resources :recipes
  # resources :recipes, only: [:index, :create, :update, :destroy]
  resources :users

  # get "/hello", to: "application#hello_world"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
