class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className="navbar navbar-default navbar-fixed-top">
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
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="download" aria-expanded="false">Kyle Hennessy<span className="caret"></span></a>
                  <ul className="dropdown-menu" aria-labelledby="download">
                    <li><Link to="/settings">Settings</Link></li>
                    <li className="divider"></li>
                    <li>
                      <Link to="/">Sign Out</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    );
  }
}
