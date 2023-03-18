class AddUserRatingToSynonymWords < ActiveRecord::Migration[6.1]
  def change
    add_column :synonym_words, :user_rating, :integer
  end
end
