class Synonym < ApplicationRecord

has_many :synonym_words
has_many :words, through: :synonym_words 
    
end
