class Api::TripsController < ApplicationController
  def index
    user = User.find(params[:id])
    @trips = user.trips.all
  end

  def show
    @trip = Trip.find(params[:id])
  end

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      render :show
    else
      render json: @trip.errors.full_messages, status: 422
    end
  end

  private

  def trip_params
    params.require(:trip).permit(
      :start_date, :end_date, :room_id, :guest_id, :num_guests, :total_cost)
  end
end
