class PhotosController < ApplicationController
  def index
  end

  def update
    current_user.photos.create(photo_params)
    render json: 'Success!'
  end

  def destroy
  end

  private

  def photo_params
    params.require(:photo).permit(:date, :angle, :photo)
  end
end
