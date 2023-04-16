class ChangeSynonymWordsToInteger < ActiveRecord::Migration[6.1]
  def change
    change_column :synonym_words, :synonym_id, :integer
    change_column :synonym_words, :word_id, :integer
  end
end
