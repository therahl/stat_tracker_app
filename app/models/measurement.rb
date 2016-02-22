require 'ruby-units'
class Measurement < ActiveRecord::Base
  belongs_to :user
  scope :by_date, -> { order("measurements.date ASC") }

  self.per_page = 15

  def total_girth
    values = self.attributes.reject{ |k, v| ['date', 'weight', 'id', 'user_id'].include? k }
    total = 0
    values.each{ |key, value| total += value unless value.nil? }
    return total.round(2)
  end
end
