Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :words, only: [:index, :show, :create, :update, :destroy]
  resources :synonyms, only: [:index, :create]
  post "/login", to: "sessions#create"
  post "/register", to: "users#create"
  get '/words/:id/synonyms', to: 'synonyms#index_by_id'
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

end
