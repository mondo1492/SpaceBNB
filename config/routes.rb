Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: %i(create)
    resource :session, only: %i(create destroy)
  end
end
