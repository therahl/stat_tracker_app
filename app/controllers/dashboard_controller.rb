class DashboardController < ApplicationController
  before_action :authenticate_user!
  def index
    @measurements = current_user.measurements
  end
end
