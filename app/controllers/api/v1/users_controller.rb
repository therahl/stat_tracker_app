class  Api::V1::UsersController < ApplicationController
  before_action :authenticate_with_token!, except: :index

  respond_to :json

  def index    
    json_object = {
      given_name: current_user.given_name,
      family_name: current_user.family_name,
      photo_url: ActionController::Base.helpers.asset_url(current_user.avatar.url(:thumb))
    }
    render json: { user: json_object }
  end

  def update
    if current_user.update(user_params)
      render json: current_user, status: 200
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def destroy
    current_user.destroy
    head 204
  end

  private

  def user_params
    params.require(:user).permit(:avatar, :given_name, :family_name, :gender, :dob)
  end
end
