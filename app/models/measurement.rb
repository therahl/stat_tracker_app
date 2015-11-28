class Measurement < ActiveRecord::Base
  belongs_to :user

  def self.by_date
    order("date ASC")
  end

end
