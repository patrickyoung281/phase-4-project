class CreateSynonymWords < ActiveRecord::Migration[6.1]
  def change
    create_table :synonym_words do |t|
      t.string :synonym_id
      t.string :word_id

      t.timestamps
    end
  end
end
