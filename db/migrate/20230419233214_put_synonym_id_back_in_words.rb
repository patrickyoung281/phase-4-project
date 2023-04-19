class PutSynonymIdBackInWords < ActiveRecord::Migration[6.1]
  def change
    add_column :words, :synonym_id, :integer
    add_index :words, :synonym_id
  end
end
