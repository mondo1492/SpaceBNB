class Trip < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :guest_id

  belongs_to :room

end
