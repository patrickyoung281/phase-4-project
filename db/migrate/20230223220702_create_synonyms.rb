class CreateSynonyms < ActiveRecord::Migration[6.1]
  def change
    create_table :synonyms do |t|
      t.string :synonym
      t.string :gender
      t.string :plural

      t.timestamps
    end
  end
end
