class SettingsController < ApplicationController
  def index
    @settings = current_user.settings
  end

  def update
    current_user.settings.update(settings_params)
  end

  private

  def settings_params
    params.require(:settings).permit(:metric)
  end
end
