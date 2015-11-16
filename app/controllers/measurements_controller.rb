class MeasurementsController < ApplicationController
  def index
    @measurements = current_user.measurements
    @user_id = current_user.id
  end

  def create
    # params.map { |measure| measure.to_unit.convert_to}
    # user = User.find(params[:id])
    current_user.measurements.create(measurement_params)
    render json: current_user.measurements
  end

  def update
    Measurement.find(params[:id]).update(measurement_params)
    render json: current_user.measurements
  end

  def destroy
    Measurement.find(params[:id]).destroy
    render json: current_user.measurements
  end

  private

  def measurement_params
    params.require(:measurements).permit(:neck, :shoulders, :weight, :chest, :waist, :hips, :thigh, :calf, :bicep, :date)
  end
end
