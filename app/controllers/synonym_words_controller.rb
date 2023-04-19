class SynonymWordsController < ApplicationController

def rate 
    word = Word.find_by(id: params[:word_id])
    synonym_word=SynonymWord.find_by(id: params[:id])
    if synonym_word.valid?
        synonym_word.update(user_rating: params[:synonym_word][:user_rating])
        render json: { user_rating: synonym_word.user_rating }
    else
        render json: { errors: synonym_word.errors.full_messages }, status: :unprocessable_entity
    end
end


end
