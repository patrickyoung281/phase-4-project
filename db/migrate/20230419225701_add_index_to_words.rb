class AddIndexToWords < ActiveRecord::Migration[6.1]
  def change
    add_index :words, :synonym_id, name: "index_words_on_synonym_id"
  end
end
