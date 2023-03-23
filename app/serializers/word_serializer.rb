class WordSerializer < ActiveModel::Serializer
  attributes :id, :word_entry, :definition, :image_url, :example_sentence, :gender, :plural, :part_of_speech, :"english_translation"
end
