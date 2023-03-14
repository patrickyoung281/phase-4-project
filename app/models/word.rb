class Word < ApplicationRecord

has_many :synonym_words
has_many :synonyms, through: :synonym_words

validates :word_entry, presence: true
validates :definition, presence: true
validates :english_translation, presence: true

end
