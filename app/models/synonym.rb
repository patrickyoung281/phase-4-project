class Synonym < ApplicationRecord

has_many :synonym_words
has_many :words, through: :synonym_words 


validates :synonym, length: {minimum: 2, message: "must be at least two characters in length."}
    
end
