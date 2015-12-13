class SettingsController < ApplicationController
  before_action :authenticate_user!

  def index
    respond_to do |format|
      format.json { render json: { girth_units: current_user.setting.read_attribute(:girth_units), weight_units: current_user.setting.read_attribute(:weight_units)} }
      format.html { render :index }
    end
  end

  def update
    current_user.setting.update(settings_params)
    respond_to do |format|
      format.json { render json: { girth_units: current_user.setting.read_attribute(:girth_units), weight_units: current_user.setting.read_attribute(:weight_units)} }
      format.html { render :index }
    end
  end

  private

  def settings_params
    params.require(:settings).permit(:girth_units, :weight_units, :height_units)
  end
end
