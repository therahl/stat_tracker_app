class Setting < ActiveRecord::Base
  belongs_to :user

  def girth_units
    read_attribute(:girth_units) == 'metric' ? 'cm' : 'in'
  end

  def weight_units
    read_attribute(:weight_units) == 'metric' ? 'kg' : 'lb'
  end

  def height_units
    read_attribute(:height_units) == 'metric' ? 'cm' : 'in'
  end
end
