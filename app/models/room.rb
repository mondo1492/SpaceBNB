class Room < ApplicationRecord
  # has_many :pictures
  validates :title, :description, :address, :lng, :lat, :host_id,
            :price, :prop_type, :room_type, :num_guests, :bedrooms, :beds,
            :pic_url, presence: true

  # belongs_to :user

  belongs_to :user,
    primary_key: :id,
    foreign_key: :host_id

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end
