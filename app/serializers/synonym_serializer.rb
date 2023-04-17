class SynonymSerializer < ActiveModel::Serializer
  attributes :id, :gender, :plural, :synonym

  has_many :words 


end
