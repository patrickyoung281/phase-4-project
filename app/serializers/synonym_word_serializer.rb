class SynonymWordSerializer < ActiveModel::Serializer
  attributes :id, :synonym_id, :word_id, :user_rating
end
