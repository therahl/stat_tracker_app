class API::V1::DashboardController < ApplicationController
  before_action :authenticate_with_token!
  
  def index
    @measurements = current_user.measurements
    render json: @measurements
  end
end
