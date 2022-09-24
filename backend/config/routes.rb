Rails.application.routes.draw do
  namespace :api do
    namespace :public do
      resources :todos, only: [:index]
    end
  end
end
