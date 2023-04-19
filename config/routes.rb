Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :words
  resources :synonyms, only: [:index, :create]
  post "/login", to: "sessions#create"
  post "/register", to: "users#create"
  get '/words/:id/synonyms', to: 'synonyms#show_by_word_id'
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/words/:word_id/synonyms/:id/rate", to: "synonym_words#rate"
  get "/synonyms/:id/words", to: "synonyms#associated_words"

end