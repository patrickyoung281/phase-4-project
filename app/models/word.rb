class Word < ApplicationRecord

has_many :synonym_words
has_many :synonyms, through: :synonym_words

validates :word_entry, presence: {message: "must exist to submit a new word entry."}
validates :part_of_speech, presence: {message: "must have a part of speech."}
validates :english_translation, presence: {message: "must have an English translation."}
validates :synonym_id, numericality: { only_integer: true, allow_nil: true }

end
