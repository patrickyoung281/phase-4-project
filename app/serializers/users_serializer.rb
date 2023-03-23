class UsersSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
end
