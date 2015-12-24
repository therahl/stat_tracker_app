import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    UserActions.login(this.refs.email.value, this.refs.password.value);
  }
  render(){
    return(
      <div>
        <form className="well form-horizontal" onSubmit={this.handleSubmit}>
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
          <a href="">Forgot password?</a>
        </form>
      </div>);
  }
}
export default Login;
