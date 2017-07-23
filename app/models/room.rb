class Room < ApplicationRecord
  # has_many :pictures
  validates :title, :description, :address, :lng, :lat, :host_id,
            :price, :prop_type, :room_type, :num_guests, :bedrooms, :beds,
            :pic_url, presence: true

  # belongs_to :user

  belongs_to :user,
    primary_key: :id,
    foreign_key: :host_id

end
