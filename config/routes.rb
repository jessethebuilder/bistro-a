Rails.application.routes.draw do
  resources :menus, only: [:show]
  root to: 'menus#show'
end
