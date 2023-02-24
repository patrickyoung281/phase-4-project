class SynonymsController < ApplicationController

def index
    word = Word.find(params[:id])
    synonyms = word.synonyms
    render json: synonyms 
end

def create
    synonym=synonym.create(synonym_params)
    render json: synonym, status: :created
end


private

def synonym_params
    params.permit(:synonym, :gender, :plural)
end

end
