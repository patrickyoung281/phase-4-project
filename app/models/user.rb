class User < ApplicationRecord

    has_secure_password
    
    validates :username, length: {minimum: 5, message: "Usernames must be at least 5 characters long."}
    validates :password, length: {in: 6..20, message: "Passwords must be between 6 and 20 characters long."}
    # validates :username, uniqueness: true, {message: "This username already exists. Please choose a different username."}

end
