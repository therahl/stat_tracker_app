import React from 'react';
import { Link } from 'react-router';
import UserActions from '../actions/UserActions';
import Auth from '../services/AuthService';

class Login extends React.Component{
  constructor(props, context){
    super(props, context);
    // context.router;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const { location } = this.props
    console.log('location: ', location);
    Auth.login(this.refs.email.value, this.refs.password.value, () => {
      if (location.state && location.state.nextPathname) {
        this.props.history.replace(location.state.nextPathname);
      } else {
        this.props.history.replace('/');
      }
    });
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
            <button type="submit" className="btn btn-primary">Sign In</button>
          </div>
          <Link to="users/forgot_password">Forgot password?</Link>
        </form>
      </div>);
  }
}
Login.contextTypes = {
  router: React.PropTypes.object
}

export default Login;
