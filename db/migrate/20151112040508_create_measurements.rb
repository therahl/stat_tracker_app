class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.float :weight
      t.date :date
      t.float :neck, default: 0
      t.float :bicep, default: 0
      t.float :chest, default: 0
      t.float :shoulders, default: 0
      t.float :waist, default: 0
      t.float :hips, default: 0
      t.float :thigh, default: 0
      t.float :calf, default: 0
      t.references :user
    end
  end
end
