class Api::RoomsController < ApplicationController
  def new
    @room = Room.new
  end

  def index
    @rooms = Room.in_bounds(params[:bounds])
    # @rooms = Room.all
  end

  def show
    @room = Room.find(params[:id])
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      render :show
    else
      render json: @room.errors.full_messages, status: 422
    end
  end

  def destroy
    @room = Room.find(params[:id])

    if @room.destroy
      render :show
    else
      render json: @room.errors.full_messages, status: 422
    end
  end

  private

  def room_params
    params.require(:room).permit(
      :title, :description, :address, :lng, :lat, :host_id,
      :price, :prop_type, :room_type, :num_guests, :bedrooms, :beds, :pic_url)
  end
end
