class MeasurementsController < ApplicationController
  before_action :measurements

  def index
    # @measurements = current_user.measurements.by_date
    # json_object = []
    # @measurements.each do |girth|
    #   json_object.push({ id: girth['id'], date: girth['date'], weight: girth['weight'], neck: girth['neck'],
    #     chest: girth['chest'], hips: girth['hips'], thigh: girth['thigh'], calf: girth['calf'],
    #     bicep: girth['bicep'], shoulders: girth['shoulders'], waist: girth['waist'], total: Measurement.find(girth['id']).total_girth })
    # end
    # @user_id = current_user.id
    respond_to do |format|
      format.json { render json: @data }
      format.html { render :index }
    end
  end

  def create
    params[:measurements].map do |k, v|
      v = 0 if v.blank?
      if k == 'weight'
        params[k] = "#{v} #{@weight_units}".convert_to('kg').scalar.to_f
      else
        params[k] = "#{v} #{@girth_units}".convert_to('cm').scalar.to_f unless ['date', 'id', 'user_id'].include? k
      end
    end
    current_user.measurements.create(measurement_params)
    render json: @data
  end

  def update
    params[:measurements].map do |k, v|
      v = 0 if v.blank?
      if k == 'weight'
        params[k] = "#{v} #{@weight_units}".convert_to('kg').scalar.to_f
      else
        params[k] = "#{v} #{@girth_units}".convert_to('cm').scalar.to_f unless ['date', 'id', 'user_id'].include? k
      end
    end
    Measurement.find(params[:id]).update(measurement_params)
    render json: @measurements
  end

  def destroy
    Measurement.find(params[:id]).destroy
    render json: @measurements
  end

  private

  def measurements
    paginated = current_user.measurements.by_date.paginate(page: params[:page])
    @measurements = paginated.to_a.map(&:serializable_hash)
    convert_units
    json_object = []
    @measurements.each do |girth|
      json_object.push({ id: girth['id'], date: girth['date'], weight: girth['weight'], neck: girth['neck'],
        chest: girth['chest'], hips: girth['hips'], thigh: girth['thigh'], calf: girth['calf'],
        bicep: girth['bicep'], shoulders: girth['shoulders'], waist: girth['waist'], total: Measurement.find(girth['id']).total_girth })
    end
    @data = { current_page: paginated.current_page, total_pages: paginated.total_pages, measurements: json_object, user_id: current_user.id, girth_units: current_user.setting.girth_units, height_units: current_user.setting.height_units, weight_units: current_user.setting.weight_units }

  end

  def convert_units
    @weight_units = current_user.setting.weight_units
    @girth_units = current_user.setting.girth_units
    @measurements.map do |measurement|
      measurement.map do |k, v|
        v ||= 0
        if k == 'weight'
          measurement[k] = v.to_unit('kg').convert_to(@weight_units).scalar.round(2)
        else
          measurement[k] = v.to_unit('cm').convert_to(@girth_units).scalar.round(2) unless ['date', 'id', 'user_id'].include? k
        end
      end
    end
  end

  def to_metric
  end

  def measurement_params
    params.require(:measurements).permit(:neck, :shoulders, :weight, :chest, :waist, :hips, :thigh, :calf, :bicep, :date)
  end
end
