class User < ApplicationRecord

    has_secure_password

    def show 
        user = User.find_by(id: session[:user_id])
        render json: user
    end

end
