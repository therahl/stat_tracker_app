// TODO features
// user avatar
// devise settings, email, change password
// connect social accounts, twitter facebook

class Settings extends React.Component{
  constructor(props){
    super(props);
    SettingsActions.initialize();
    this.radioChange = this.radioChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = SettingsStore.getState();
  }
  componentDidMount() {
    SettingsStore.listen(this.handleStateChange);
  }
  componentWillUnmount() {
    SettingsStore.unlisten(this.handleStateChange);
  }
  handleStateChange(state) {
    this.setState(state);
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
    // create setting actions and store
    SettingsActions.updateSettings(this.props.id, {[unitName]: units});
    console.log(units);
  }
  render(){
    if(!this.state){
      return(<div></div>);
    }

    return(
      <div className="well">
        <form onSubmit={this.handeSubmit} className="form-horizontal">
          <fieldset>
            <legend>Units</legend>
            <div className="col-xs-12 form-group">
              <label className="control-label">Girth Measurements</label>
              <div className="">
                <RadioSet checkedField={this.state.girth_units} callback={this.radioChange} name='girth_units' labels={['Metric', 'US Standard']} />
              </div>
            </div>
            <div className="col-xs-12 form-group">
              <label className="control-label">Weight</label>
              <div className="">
                <RadioSet checkedField={this.state.weight_units} callback={this.radioChange} name='weight_units' labels={['Metric', 'US Standard']} />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
