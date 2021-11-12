Rails.application.routes.draw do
  resources :recipe_ingredients
  resources :ingredients
  resources :steps
  resources :recipes
  resources :users

  post "/signin", to: "sessions#create"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/signout", to: "sessions#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
