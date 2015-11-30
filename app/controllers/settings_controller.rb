class SettingsController < ApplicationController
  def index
    @settings = current_user.setting
  end

  def update
    current_user.setting.update(settings_params)
  end

  private

  def settings_params
    params.require(:setting).permit(:girth_units, :weight_units, :height_units)
  end
end
