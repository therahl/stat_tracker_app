class PhotosController < ApplicationController
  def index
  end

  def create
    params[:photo] = {}
    params[:photo][:photo] = params[:file].tempfile
    current_user.photos.create(photo_params)
    render json: 'Success!!!! Created!!', status: 204
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
