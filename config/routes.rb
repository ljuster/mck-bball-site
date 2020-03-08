Rails.application.routes.draw do
  resources :events

  namespace :api do
    resources :users
    resources :events
  end

  root 'welcome#index'
  get 'welcome/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
