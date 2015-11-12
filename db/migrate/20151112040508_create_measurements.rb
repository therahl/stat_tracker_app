class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.float :weight
      t.float :neck
      t.float :chest
      t.float :shoulders
      t.float :waist
      t.float :hips
      t.float :thigh
      t.float :calf
      t.references :users
    end
  end
end
