# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Room.destroy_all

User.create(username: "Guest User", password: "SuperSecretPassword")
User.create(username: "Aaron", password: "Password")
User.create(username: "Keith", password: "somethingdirty")

Room.create(title: "Best Room Ever", description: "Seriously the Best", address: "1 Main St", planet: "Earth", lng: 1, lat: 1, host_id: 1, price: 400, prop_type: "House", room_type: "Whole House", num_guests: 1, bedrooms: 10, beds: 5, pic_url: "http://google.com")
