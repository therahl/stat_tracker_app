class ChangeMeasurements < ActiveRecord::Migration
  def change
    change_column :measurements, :date, :date
  end
end
