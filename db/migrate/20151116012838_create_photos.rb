class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.attachment :photo
      t.date :date
      t.string :angle
      t.references :user
      t.timestamps null: false
    end
  end
end
