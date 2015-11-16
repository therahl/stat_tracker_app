# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.delete_all
Measurement.delete_all
Setting.delete_all

# unless User.find_by(email: 'kyle.hennessy@tracktrain.com') User.create!(email: 'kyle.hennessy@tracktrain.com', password: 'password')
10.times do
  Measurement.create(date: Time.now, weight: 190,
    shoulders: rand(10...100),
    bicep: rand(10...100),
    neck: rand(10...100),
    chest: rand(10...100),
    thigh: rand(10...100),
    calf: rand(10...100),
    waist: rand(10...100),
    hips: rand(10...100))
end
