class MeasurementsController < ApplicationController
  def index
    @measurements = current_user.measurements.by_date
    @user_id = current_user.id
    respond_to do |format|
      format.json { render json: { measurements: @measurements, user_id: current_user.id } }
      format.html { render :index }
    end
  end

  def create
    # params.map { |measure| measure.to_unit.convert_to}
    # user = User.find(params[:id])
    current_user.measurements.create(measurement_params)
    render json: current_user.measurements.by_date
  end

  def update
    Measurement.find(params[:id]).update(measurement_params)
    render json: current_user.measurements.by_date
  end

  def destroy
    Measurement.find(params[:id]).destroy
    render json: current_user.measurements.by_date
  end

  private

  def measurements
    @measurements = current_user.measurements.by_date
  end

  def measurement_params
    params.require(:measurements).permit(:neck, :shoulders, :weight, :chest, :waist, :hips, :thigh, :calf, :bicep, :date)
  end
end
