class UsersController < ApplicationController

    def create
        username = User.create(user_params)
        render json: username, status: :created
    end
    
    private 
    
    def user_params
        params.permit(:username)
    end
end
