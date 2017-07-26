class Api::ReviewsController < ApplicationController
  def index
    user = User.find(params[:id])
    @listings = user.rooms
    @review = Room.in_bounds(params[:bounds]).includes(:user)
    # @rooms = Room.all
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      @room = Room.includes(:user).find(@room.id)
      render :show
    else
      render json: @room.errors.full_messages, status: 422
    end
  end

  def destroy
    @room = Room.includes(:user).find(params[:id])
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
