import React from 'react';
import { Link } from 'react-router';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){

  }
  render(){
    return(
      <div>
        <form className="well form-horizontal flipInX animated" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label className="control-label">Email</label>
            <input ref="email" type="email" className="form-control" />
          </div>
          <div className="input-group">
            <label className="control-label">Password</label>
            <input ref="password" type="password" className="form-control" />
          </div>
          <div className="input-group">
            <label className="control-label">Password Confirmation</label>
            <input ref="password_confirmation" type="password" className="form-control" />
          </div>
          <div className="input-group">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
