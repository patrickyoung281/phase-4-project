class AddColumnsToWords < ActiveRecord::Migration[6.1]
  def change
    add_column :words, :gender, :string
    add_column :words, :plural, :string
    add_column :words, :part_of_speech, :string
    add_column :words, :english_translation, :string
  end
end
