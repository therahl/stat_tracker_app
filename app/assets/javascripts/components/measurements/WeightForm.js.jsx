class WeightForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let data = {
      date: React.findDOMNode(this.refs.date).value,
      weight: React.findDOMNode(this.refs.weight).value,
      neck: React.findDOMNode(this.refs.neck).value,
      shoulders: React.findDOMNode(this.refs.shoulders).value,
      bicep: React.findDOMNode(this.refs.bicep).value,
      chest: React.findDOMNode(this.refs.chest).value,
      waist: React.findDOMNode(this.refs.waist).value,
      hips: React.findDOMNode(this.refs.hips).value,
      thigh: React.findDOMNode(this.refs.thigh).value,
      calf: React.findDOMNode(this.refs.calf).value
    }
    MeasurementActions.addMeasurements(this.props.id, data, () => {
      $(React.findDOMNode(this)).find('form')[0].reset();
    });
  }
  render(){
    return(
      <div className="well">
        <form onSubmit={this.handleSubmit} className="form-horizontal">
          <fieldset>
            <legend>Add New</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Date</label>
              <div className="col-xs-10">
                <input ref='date' type="Date" className="form-control" id="inputDate" placeholder="mm/dd/yyyy" required="required" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Weight</label>
              <div className="col-xs-10">
                <input ref='weight' type="number" className="form-control" id="inputWeight" maxLength="5" placeholder="145" required="required" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Neck</label>
              <div className="col-xs-4">
                <input ref='neck' type="number" className="form-control" id="inputWeight" maxLength="5" placeholder="145" />
              </div>
              <label className="col-xs-2 control-label">Shoulders</label>
              <div className="col-xs-4">
                <input ref='shoulders' type="number" className="form-control" id="inputNeck" maxLength="5" placeholder="14" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Bicep</label>
              <div className="col-xs-4">
                <input ref='bicep' type="number" className="form-control" id="inputWeight" maxLength="5" placeholder="145" />
              </div>
              <label className="col-xs-2 control-label">Chest</label>
              <div className="col-xs-4">
                <input ref='chest' type="number" className="form-control" id="inputNeck" maxLength="5" placeholder="14" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Waist</label>
              <div className="col-xs-4">
                <input ref='waist' type="number" className="form-control" id="inputWeight" maxLength="5" placeholder="145" />
              </div>
              <label className="col-xs-2 control-label">Hips</label>
              <div className="col-xs-4">
                <input ref='hips' type="number" className="form-control" id="inputNeck" maxLength="5" placeholder="14" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Thigh</label>
              <div className="col-xs-4">
                <input ref='thigh' type="number" className="form-control" id="inputWeight" maxLength="5" placeholder="145" />
              </div>
              <label className="col-xs-2 control-label">Calf</label>
              <div className="col-xs-4">
                <input ref='calf' type="number" className="form-control" id="inputNeck" maxLength="5" placeholder="14" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="reset" className="btn btn-default">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
