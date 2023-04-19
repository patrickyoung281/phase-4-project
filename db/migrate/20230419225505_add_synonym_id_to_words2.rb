class AddSynonymIdToWords2 < ActiveRecord::Migration[6.1]
  def change
    add_column :words, :synonym_id, :integer
  end
end
