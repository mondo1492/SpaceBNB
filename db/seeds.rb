# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Room.destroy_all

user1 = User.create!(username: "Guest User", password: "SuperSecretPassword")
user2 = User.create!(username: "Aaron", password: "Password")
user3 = User.create!(username: "Keith", password: "somethingdirty")

Room.create!(title: "Best Room Ever", description: "Seriously the Best",
  address: "1 Main St", planet: "Earth", lng: 1, lat: 1, host_id: user1[:id],
  price: 400, prop_type: "House", room_type: "Whole House", num_guests: 1,
  bedrooms: 10, beds: 5,
  pic_url: "http://res.cloudinary.com/dluh2fsyd/image/upload/v1500916134/outerspace_fgw6bx.jpg")
Room.create!(title: "Room on Mars", description: "Transportation not included", address: "1 Mars St", planet: "Europa", lng: 2, lat: 2, host_id: user1[:id], price: 4000, prop_type: "House", room_type: "Whole House", num_guests: 22, bedrooms: 10, beds: 2, pic_url: "http://res.cloudinary.com/dluh2fsyd/image/upload/v1500916134/Media-Space-allows-you-to-get-lost-in-space_ef04zi.jpg")
Room.create!(title: "Room on Europa", description: "Pack your coat!", address: "1 Europa St", planet: "Mars", lng: 3, lat: 3, host_id: user1[:id], price: 420, prop_type: "House", room_type: "Whole House", num_guests: 25, bedrooms: 10, beds: 4, pic_url: "http://res.cloudinary.com/dluh2fsyd/image/upload/v1500916134/f97e3c98755a87c03e81f1610220e22e_gsykvq.jpg")
Room.create!(title: "Basement Room!", description: "For the minimalists", address: "1 Spooner St", planet: "Earth", lng: 4, lat: 4, host_id: user1[:id], price: 5000, prop_type: "House", room_type: "Couch", num_guests: 1, bedrooms: 10, beds: 15, pic_url: "http://res.cloudinary.com/dluh2fsyd/image/upload/v1500916134/efe63a409afc79bdbea73da4f1092c73_gho0co.jpg")
Room.create!(title: "Tent!", description: "Yup, a tent, this is what spacebnb has come to", address: "1 Woods Drive", planet: "Earth", lng: 5, lat: 5, host_id: user1[:id], price: 9000, prop_type: "House", room_type: "Single Room", num_guests: 1, bedrooms: 10, beds: 12, pic_url: "http://res.cloudinary.com/dluh2fsyd/image/upload/v1500916134/e0ab05307007c4a950bda79f23ca91de_g7uplb.jpg")
