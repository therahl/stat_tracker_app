class CreateUser < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :given_name
      t.string :family_name
      t.attachment :avatar
    end
    create_table :settings do |t|
      t.string :metric, default: true
      t.references :user
    end
  end
end
