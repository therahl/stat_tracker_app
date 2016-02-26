import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import auth from '../services/AuthService';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.dropdown = this.dropdown.bind(this);
    UserActions.initialize();
    this.state = UserStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    UserStore.listen(this.onChange);

    // let socket = io.connect();

    // socket.on('onlineUsers', (data) => {
    //   NavbarActions.updateOnlineUsers(data);
    // });

    // $(document).ajaxStart(() => {
    //   NavbarActions.updateAjaxAnimation('fadeIn');
    // });
    //
    // $(document).ajaxComplete(() => {
    //   setTimeout(() => {
    //     NavbarActions.updateAjaxAnimation('fadeOut');
    //   }, 750);
    // });
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  handleLogout(){
    UserActions.logout();
  }
  dropdown(e){
  }
  render() {
    console.log(this.state);
    let status = !auth.isLoggedIn() ? (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/users/sign_in">Sign In</Link></li>
      </ul>
    ) : (
      <ul className="nav navbar-nav navbar-right">
        <li>{this.state.email}</li>
        <li onClick={this.handleLogout}>
          <Link to='/'>Sign Out</Link>
        </li>
      </ul>
    );
    let links = auth.isLoggedIn() ?
      (
        <ul className="nav navbar-nav">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/measurements">Measurements</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
      ) : '';
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Stat Tracker</Link>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            {links}
            {status}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
