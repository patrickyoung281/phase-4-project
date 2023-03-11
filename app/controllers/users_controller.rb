class UsersController < ApplicationController

    def create
        username = User.create(user_params)
        render json: username, status: :created
    end
    
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: { username: user.username }
        else
            render json: { error: "Not authorized" }, status: :unauthorized 
        end
    end

    private 
    
    def user_params
        params.permit(:username)
    end
end
