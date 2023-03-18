class SynonymWordsController < ApplicationController

def rate 
    word = Word.find_by(id: params[:word_id])
    synonym_word=SynonymWord.find_by(id: params[:id])
    synonym_word.update(user_rating: params[:synonym_word][:user_rating])
    render json: { user_rating: synonym_word.user_rating }
end

end
