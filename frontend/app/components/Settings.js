import React from 'react';

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
    this.handleSubmit = this.handleSubmit.bind(this);
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
    UserActions.updateProfile({gender: units})
  }
  handleSubmit(e){
    e.preventDefault();
    // TODO add avatar
    let data = {
      dob: this.refs.dob,
      family_name: this.refs.family_name,
      given_name: this.refs.given_name,
      email: this.refs.email
    }
    UserActions.updateProfile(data);
  }
  render(){
    if(!this.state.email){
      return(<div></div>);
    }
    let girth = this.state.girth_units === "imperial" ? "US Standard" : this.state.girth_units
    let weight_units = this.state.weight_units === "imperial" ? "US Standard" : this.state.weight_units
    return(
      <div className="">
        <div className="page-header">
          <h1>Information</h1>
        </div>
        <form className="well form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label className="col-sm-1 control-label">Avatar</label>
              <div className="col-sm-5">
                <input ref="avatar" className="form-control" type="file" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Name</label>
              <div className="col-sm-2">
                <input ref="given_name" className="form-control" type="text" placeholder="First" defaultValue={this.state.given_name} />
              </div>
              <div className="col-sm-3">
                <input ref="family_name" className="form-control" type="text" placeholder="Last" defaultValue={this.state.family_name} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Gender</label>
              <div className="col-sm-5">
                <RadioSet checkedField={this.state.gender} callback={this.genderChange} name='gender' labels={['Male', 'Female']} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Date of Birth</label>
              <div className="col-sm-5">
                <input ref="dob" className="form-control" type="date" defaultValue={this.state.dob} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-1 control-label">Email</label>
              <div className="col-sm-5">
                <input ref="email" className="form-control" type="text" defaultValue={this.state.email} />
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
          <span className="clearfix"></span>
        </form>
        <div className="page-header">
          <h1>Units</h1>
        </div>
        <form className="well form-horizontal col-xs-12">
          <fieldset>
            <div className="form-group">
              <label className="col-sm-2 control-label">Girth Measurements</label>
              <div className="col-sm-5">
                <RadioSet checkedField={girth} callback={this.radioChange} name='girth_units' labels={['Metric', 'US Standard']} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Weight</label>
              <div className="col-sm-5">
                <RadioSet checkedField={weight_units} callback={this.radioChange} name='weight_units' labels={['Metric', 'US Standard']} />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default Settings;
