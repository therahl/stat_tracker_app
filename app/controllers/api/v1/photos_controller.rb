require 'application_helper'
class Api::V1::PhotosController < ApplicationController
  include ApplicationHelper
  before_action :authenticate_with_token!

  def create
    # this is a bad way to assign the photo angle.  TODO
    angles = ['front', 'side', 'back', 'other']
    begin
      params[:photos].reject{ |v| v == 'undefined'}.each_with_index do |photo, i|
        params[:file] = {}
        params[:file][:date] = params[:date]
        params[:file][:photo] = photo
        params[:file][:angle] = angles[i]
        current_user.photos.create(photo_params)
      end
    rescue => e
      binding.pry
      render json: e, status: 400
    end

    render json: current_user.photos.last, status: 200
  end

  def photo_box
    params[:angle] = 'front' unless params[:angle].present?
    photos = current_user.photos.where(angle: params[:angle])
    render json: { first: asset_url(photos.first.photo.url), current: asset_url(photos.last.photo.url), angle: params[:angle] }
  end

  def photo_table
    obj = []
    @photos = current_user.photos.group_by_date
    @photos.map do |group|
      temp = { date: group[0] }
      group[1].map do |photo|
        p = Photo.find(photo.id)
        temp[p.angle] = {}
        temp[p.angle][:url] = p.photo.url
        temp[p.angle][:id] = p.id
      end
      obj << temp
    end

    render json: { photos: obj }
  end

  def update
    current_user.photos.create(photo_params)
    render json: 'Success!'
  end

  def destroy
  end

  private

  def photo_params
    params.require(:file).permit(:date, :angle, :photo)
  end
end
