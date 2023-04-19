class RemoveSynonymIdAndIndexFromWordsTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :words, :synonym_id, :integer
    remove_column :words, name: "index_words_on_synonym_id"
  end
end
