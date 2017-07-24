json.extract! room, :id, :title, :description, :address, :lng, :lat, :host_id,
              :price, :prop_type, :room_type, :num_guests, :bedrooms, :beds,
               :planet, :pic_url

# json.reviews do
#   json.partial! 'api/reviews/review', collection: room.reviews, as: :review
# end
