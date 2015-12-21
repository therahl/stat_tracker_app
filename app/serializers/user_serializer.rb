class UserSerializer < ActiveModel::Serializer
  attributes :id, :given_name, :family_name, :email, :auth_token

  has_many :measurements
  has_many :photos
  has_one :setting
end
