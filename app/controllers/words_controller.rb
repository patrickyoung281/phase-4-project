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

end
