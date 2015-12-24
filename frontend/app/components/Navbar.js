import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.getCharacterCount();

    let socket = io.connect();

    socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findCharacter({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }

  render() {
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

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="download" aria-expanded="false">
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
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
