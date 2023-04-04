class SynonymWord < ApplicationRecord

belongs_to :synonym
belongs_to :word

# validates :user_rating, presence: {message: "must be entered to rate this synonym."}


end
