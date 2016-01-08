class Api::V1::DashboardController < ApplicationController
  before_action :authenticate_with_token!

  def index
    @goals = current_user.goals
    render json: @goals
  end

  def weight
  end

  def strength
  end

  def girth
  end

  private

  # move to model method TODO
  def forecast
    Date.today
  end
end
