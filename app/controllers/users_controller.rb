class UsersController < ApplicationController
  # before_action :authenticate_user!

  def index
  end

  def show
    json_object = {
      given_name: current_user.given_name,
      family_name: current_user.family_name,
      photo_url: ActionController::Base.helpers.asset_url(current_user.avatar.url(:thumb))
    }
    render json: current_user
  end

  def update
    current_user.update(user_params)
    render json: current_user, status: 200
  end

  def edit
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:avatar, :given_name, :family_name, :gender, :dob)
  end
end
