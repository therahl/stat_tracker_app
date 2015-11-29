require 'ruby-units'
class Measurement < ActiveRecord::Base
  belongs_to :user
  scope :by_date, -> { order("measurements.date ASC") }

  # def chest=(amount)
  #   binding.pry
  #   units = User.find(self.user_id).first.settings.girth_units
  #   super("#{amount} #{units}".convert_to('cm').scalar.to_f.round(2))
  # end
  #
  # def chest
  #   units = User.find(self.user_id).first.settings.girth_units
  #   value = super().to_unit(units)
  #   value = value.convert_to(units)
  #   value.scalar.to_f
  # end

  def total_girth
    values = self.attributes.reject{ |k, v| ['date', 'weight', 'id', 'user_id'].include? k }
    total = 0
    values.each{ |key, value| total += value unless value.nil? }
    return total.round(2)
  end

  # def self.convert_units(weight_units, girth_units)
  #   binding.pry
  #   self.map do |k, v|
  #     if k == 'weight'
  #       v.to_unit('kg').convert_to(weight_units)
  #     else
  #       v.to_unit('cm').convert_to(girth_units) unless ['date', 'id', 'user_id'].include? k
  #     end
  #   end
  # end
  #
  # def convert_to_metric(weight_units, girth_units)
  #   binding.pry
  #   self.map do |k, v|
  #     if k == 'weight'
  #       v.to_unit(weight_units).convert_to('kg')
  #     else
  #       v.to_unit(girth_units).convert_to('cm') unless ['date', 'id', 'user_id'].include? k
  #     end
  #   end
  #
  # end
end
