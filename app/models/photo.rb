class Photo < ActiveRecord::Base
  belongs_to :user
  has_attached_file :photo, styles: { large: "600x600>", medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

  self.per_page = 2

  def self.group_by_date
    order('photos.date DESC').group_by &:date
  end

  def photo_url
    self.photo.url
  end
end
