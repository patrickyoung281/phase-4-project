class User < ApplicationRecord

    has_secure_password
    
    validates :username, length: {minimum: 5, message: "must be at least 5 characters long."}
    validates :password, length: {in: 6..20, message: "must be between 6 and 20 characters long."}
    validates :username, uniqueness: {message: "already exists. Please choose a different username."}

end
