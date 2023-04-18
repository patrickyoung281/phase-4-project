class SynonymsController < ApplicationController

def show_by_word_id
    word = Word.find(params[:id])
    synonyms = word.synonyms
    render json: synonyms 
end

def associated_words
    synonym=Synonym.find(params[:id])
    words=synonym.words
    render json: words, only: :word_entry
end

def index
    synonyms=Synonym.all 
    render json: synonyms, include: :word 
end

def create
    word = Word.find(params[:word_id])
    synonym = word.synonyms.create(synonym_params)
    if synonym.valid?
        render json: synonym, status: :created
    else
        render json: { errors: synonym.errors.full_messages }, status: :unprocessable_entity
    end
end

private

def synonym_params
    params.permit(:synonym, :gender, :plural)
end

end
