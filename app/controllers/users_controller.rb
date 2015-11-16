class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def show
  end

  def update
    current_user.update(user_params)
    render json: 'Success!'
  end

  def edit
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:avatar, :given_name, :family_name)
  end
end
