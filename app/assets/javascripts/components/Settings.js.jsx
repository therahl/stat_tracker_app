// TODO features
// user avatar
// devise settings, email, change password
// connect social accounts, twitter facebook

class Settings extends React.Component{
  constructor(props){
    super(props);
    this.radioChange = this.radioChange.bind(this);
  }
  radioChange(unitName, checked){
    let units = '';
    switch (checked) {
      case 'first':
        units = 'metric';
        break;
      case 'second':
        units = 'imperial';
        break;
      default:
        console.log('default hit');
    }
    console.log(units);
  }
  render(){
    return(
      <div className="well">
        <form onSubmit={this.handeSubmit} className="form-horizontal">
          <fieldset>
            <legend>Units</legend>
            <div className="form-group">
              <label className="control-label">Girth Measurements</label>
              <div className="col-xs-12">
                <RadioSet checked='metric' callback={this.radioChange} name='girth_units' labels={['Metric', 'US Standard']} />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label">Weight</label>
              <div className="col-xs-12">
                <RadioSet checked='imperial' callback={this.radioChange} name='weight_units' labels={['Metric', 'US Standard']} />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
