class PhotosController < ApplicationController
  def index
  end

  def create
    # this is a bad way to assign the photo angle.  TODO
    angles = ['front', 'side', 'back', 'other']
    params[:photos].reject{ |v| v == 'undefined'}.each_with_index do |photo, i|
      binding.pry
      params[:photo] = {}
      params[:photo][:date] = params[:date]
      params[:photo][:photo] = photo.tempfile
      params[:photo][:angle] = angles[i]

      current_user.photos.create(photo_params)
    end
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
