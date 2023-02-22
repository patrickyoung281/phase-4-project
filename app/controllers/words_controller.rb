class WordsController < ApplicationController

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
    word=Word.create(word_params)
    render json: word, status: :created 
end

private 

def word_params
    params.permit(:word_entry, :definition, :image_url, :example_sentence, :gender, :plural, :part_of_speech, :english_translation)
end

end