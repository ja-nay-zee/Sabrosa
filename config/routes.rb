Rails.application.routes.draw do
  resources :recipe_ingredients
  resources :ingredients
  resources :steps
  resources :recipes
  resources :users

  # get "/hello", to: "application#hello_world"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
