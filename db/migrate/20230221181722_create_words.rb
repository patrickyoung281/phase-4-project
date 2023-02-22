class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.string :word_entry
      t.string :definition
      t.string :image_url
      t.string :example_sentence

      t.timestamps
    end
  end
end
