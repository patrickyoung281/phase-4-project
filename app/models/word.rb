class Word < ApplicationRecord

has_many :synonym_words
has_many :synonyms, through: :synonym_words

end
