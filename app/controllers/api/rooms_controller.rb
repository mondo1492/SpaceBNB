class Api::RoomsController < ApplicationController
  def new
    @room = Room.new
  end

  def index
    @rooms = Room.all
  end
  
  def create
    @room = Room.new(room_params)
    @room.save
    render json: @room.errors.full_messages, status: 422
  end

  private

  def room_params
    params.require(:room).permit(
      :title, :description, :address, :lng, :lat, :host_id,
      :price, :prop_type, :room_type, :num_guests, :bedrooms, :beds)
  end
end
