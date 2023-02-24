class SynonymsController < ApplicationController

def index_by_id
    word = Word.find(params[:id])
    synonyms = word.synonyms
    render json: synonyms 
end

def index
    synonyms=Synonym.all 
    render json: synonyms 
end

def create
    word = Word.find(params[:word_id])
    synonym = word.synonyms.create(synonym_params)
    if synonym
        render json: synonym, status: :created
    else
        render json: { error: "Failed to create synonym" }, status: :unprocessable_entity
    end
end

private

def synonym_params
    params.permit(:synonym, :gender, :plural)
end

end
