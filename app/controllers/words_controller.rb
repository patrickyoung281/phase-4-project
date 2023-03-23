class WordsController < ApplicationController

before_action :authorize
skip_before_action :authorize, only: [:index, :show]

def index
    words=Word.all
    render json: words
end

def show 
    word=Word.find_by(id: params[:id])
    if word
        render json: word
    else render json: { error: "Word not found"}, status: :not_found
    end
end

def create 
    word=Word.new(word_params)
    synonym_id=params[:synonym_id]
    if word.valid? && synonym_id
        word.save
        synonym_word = SynonymWord.create(word_id: word.id, synonym_id: synonym_id)
        render json: word, status: :created 
    else
        render json: { error: "A new word must have a word, a definition, and an English translation." }, status: :unprocessable_entity
    end
end

def update 
    word = Word.find_by(id: params[:id])
    if word
        word.update(word_params)
        render json: word
    else
        render json: { error: "Word not found" }, status: :not_found
    end
end

def destroy 
    word = Word.find_by(id: params[:id])
    if word
        word.destroy
        head :no_content
    else
        render json: { error: "Word not found" }, status: :not_found
    end
end

private 

def word_params
    params.permit(:word_entry, :definition, :image_url, :example_sentence, :gender, :plural, :part_of_speech, :english_translation)
end

def authorize 
    return render json: { error: "You must be logged in." }, status: :unauthorized unless session.include? :user_id
end

end