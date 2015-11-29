class CreateUser < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :given_name
      t.string :family_name
      t.attachment :avatar
    end
    create_table :settings do |t|
      t.string :girth_units, default: 'metric'
      t.string :weight_units, default: 'metric'
      t.string :height_units, default: 'metric'
      t.references :user
    end
  end
end
