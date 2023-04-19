class RemoveSynonymIdFromWords < ActiveRecord::Migration[6.1]
  def change
    remove_column :words, :synonym_id, :integer
  end
end
