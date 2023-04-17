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
    word.user_id = current_user.id 
    synonym_id=params[:synonym_id]
    if word.valid? 
        word.save
        synonym_word = SynonymWord.create(word_id: word.id, synonym_id: synonym_id)
        render json: word, status: :created 
    else
        render json: { errors: word.errors.full_messages }, status: :unprocessable_entity
    end
end

def update 
    word = Word.find_by(id: params[:id])
    if word
        if word_belongs_to_current_user?(word)
            word.update(word_params)
            render json: word
        else
            render json: { error: "You are not authorized to update this word." }, status: :unauthorized
        end
    else
        render json: { error: "Word not found" }, status: :not_found
    end
end

def destroy 
    word = Word.find_by(id: params[:id])
    if word
        if word_belongs_to_current_user?(word)
            word.destroy
            head :no_content
          else
            render json: { error: "You are not authorized to delete this word." }, status: :unauthorized
          end
        else
          render json: { error: "Word not found" }, status: :not_found
        end
end

private 

def word_params
    params.permit(:word_entry, :definition, :image_url, :example_sentence, :gender, :plural, :part_of_speech, :english_translation, :synonym_id)
end

def authorize 
    return render json: { error: "You must be logged in." }, status: :unauthorized unless session.include? :user_id
end

def current_user
    current_user ||= User.find(session[:user_id]) if session[:user_id]
end

def word_belongs_to_current_user?(word)
    word.user_id == current_user.id
end


end