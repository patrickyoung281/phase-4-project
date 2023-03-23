class UsersController < ApplicationController

    def create
        username = User.create(user_params)
        if username.valid?
            render json: username, status: :created
        else
            render json: { errors: username.errors.full_messages }, status: :unprocessable_entity
        end
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
        params.permit(:username, :password, :password_confirmation)
    end
end
