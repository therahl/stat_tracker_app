import React from 'react';
import ReactDOM from 'react-dom';
import MeasurementActions from '../../actions/MeasurementActions';

class WeightForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let data = {
      date: ReactDOM.findDOMNode(this.refs.date).value,
      weight: ReactDOM.findDOMNode(this.refs.weight).value,
      neck: ReactDOM.findDOMNode(this.refs.neck).value,
      shoulders: ReactDOM.findDOMNode(this.refs.shoulders).value,
      bicep: ReactDOM.findDOMNode(this.refs.bicep).value,
      chest: ReactDOM.findDOMNode(this.refs.chest).value,
      waist: ReactDOM.findDOMNode(this.refs.waist).value,
      hips: ReactDOM.findDOMNode(this.refs.hips).value,
      thigh: ReactDOM.findDOMNode(this.refs.thigh).value,
      calf: ReactDOM.findDOMNode(this.refs.calf).value
    }
    MeasurementActions.addMeasurements(this.props.id, data, () => {
      $(ReactDOM.findDOMNode(this)).find('form')[0].reset();
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
export default WeightForm;
