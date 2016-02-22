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
  render() {
    console.log(this.state);
    let status = !auth.isLoggedIn() ? (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/users/sign_in">Sign In</Link></li>
      </ul>
    ) : (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
            <img src={this.state.photo_url} className="avatar-img" />{`${this.state.given_name} ${this.state.family_name}`}<span className="caret"></span>
          </a>
          <ul className="dropdown-menu" aria-labelledby="download">
            <li><Link to="/settings">Settings</Link></li>
            <li className="divider"></li>
            <li onClick={this.handleLogout}>
              <a href=''>Sign Out</a>
            </li>
          </ul>
        </li>
      </ul>
    );
    let links = auth.isLoggedIn() ?
      (
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
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
