Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#main' 
  get '/charter', to: 'pages#charter'
  get '/jobs', to: 'pages#jobs'
  get '/members', to: 'pages#members'
  get '/staff', to: 'pages#staff'

  get '/contact', to: 'pages#contact'
  post '/contact', to: 'pages#submit_comment'
  
  get '/upcoming', to: 'pages#upcoming'
  get '/archived', to: 'pages#archived'

  get '/reports', to: 'pages#reports'

  get '/news', to: 'pages#news'

  get '/admin', to: 'admins#index'
  get '/admin/messages', to: 'admins#all_messages'
  get '/admin/messages/:id', to: 'admins#message', as: 'edit_message'
  put '/admin/messages/:id', to: 'admins#update_message'
end
