class Room < ApplicationRecord
  # has_many :pictures
  validates :title, :description, :address, :lng, :lat, :host_id,
            :price, :prop_type, :room_type, :num_guests, :bedrooms, :beds,
            presence: true
end