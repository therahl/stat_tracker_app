// TODO features
// user avatar
// devise settings, email, change password
// connect social accounts, twitter facebook

class Settings extends React.Component{
  constructor(props){
    super(props);
    SettingsActions.initialize();
    this.radioChange = this.radioChange.bind(this);
    this.genderChange = this.genderChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = SettingsStore.getState();
    this.state = UserStore.getState();
  }
  componentDidMount() {
    SettingsStore.listen(this.handleStateChange);
    UserStore.listen(this.handleStateChange);
  }
  componentWillUnmount() {
    SettingsStore.unlisten(this.handleStateChange);
    UserStore.unlisten(this.handleStateChange);
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
  genderChange(gender, checked){
    let units = '';
    switch (checked) {
      case 'first':
        units = 'male';
        break;
      case 'second':
        units = 'female';
        break;
      default:
        console.log('default hit');
    }
    console.log(gender);
    console.log(units);
  }

  render(){
    if(!this.state){
      return(<div></div>);
    }

    return(
      <div className="">
        <div className="page-header">
          <h1>Information</h1>
        </div>
        <form className="well form-horizontal">
          <fieldset>
            <div className="form-group">
              <label className="col-sm-1 control-label">Avatar</label>
              <div className="col-sm-5">
                <input className="form-control" type="file" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Name</label>
              <div className="col-sm-2">
                <input className="form-control" type="text" placeholder="First" defaultValue={this.state.given_name} />
              </div>
              <div className="col-sm-3">
                <input className="form-control" type="text" placeholder="Last" defaultValue={this.state.family_name} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Gender</label>
              <div className="">
                <RadioSet checkedField={this.state.gender} callback={this.radioChange} name='gender' labels={['Male', 'Female']} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Date of Birth</label>
              <div className="col-sm-5">
                <input className="form-control" type="date" defaultValue={this.state.dob} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Email</label>
              <div className="col-sm-5">
                <input className="form-control" type="text" defaultValue={this.state.email} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Password</label>
              <div className="col-sm-5">
                <input className="form-control" type="password" />
              </div>
              <div className="col-sm-5">
                <p className="italic">(Leave blank if you don't want to change it)</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Password Confirmation</label>
              <div className="col-sm-5">
                <input className="form-control" type="password" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Current Password</label>
              <div className="col-sm-5">
                <input className="form-control" type="password" />
              </div>
              <div className="col-sm-5">
                <p className="italic">(We need your current password to confirm your changes)</p>
              </div>
            </div>
          </fieldset>
          <div className="col-sm-6 form-group">
            <div className="pull-right">
              <button type="submit" className="btn btn-primary">Update</button>
            </div>
          </div>
        </form>
        <div className="page-header">
          <h1>Units</h1>
        </div>
        <form className="well form-horizontal col-xs-12">
          <fieldset>
            <div className="form-group">
              <label className="col-sm-2 control-label">Girth Measurements</label>
              <div className="col-sm-5">
                <RadioSet checkedField={this.state.girth_units} callback={this.radioChange} name='girth_units' labels={['Metric', 'US Standard']} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Weight</label>
              <div className="col-sm-5">
                <RadioSet checkedField={this.state.weight_units} callback={this.radioChange} name='weight_units' labels={['Metric', 'US Standard']} />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
