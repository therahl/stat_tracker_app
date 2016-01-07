class Api::V1::SettingsController < ApplicationController
  before_action :authenticate_with_token!

  def index
    render json: { girth_units: current_user.setting.read_attribute(:girth_units), weight_units: current_user.setting.read_attribute(:weight_units)}
  end

  def update
    current_user.setting.update(settings_params)
    render json: { girth_units: current_user.setting.read_attribute(:girth_units), weight_units: current_user.setting.read_attribute(:weight_units)}
  end

  private

  def settings_params
    params.require(:settings).permit(:girth_units, :weight_units, :height_units)
  end
end
