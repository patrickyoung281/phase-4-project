class ChangeSynonymWordsSynonymIdNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :synonym_words, :synonym_id, true
  end
end