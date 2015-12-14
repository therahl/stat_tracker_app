// var Route = ReactRouter.Route;
//
// this.MyRoutes = (
//   <Route handler={App}>
//     <Route name='home' handler={Home} path='/' />
//     ...
//   </Route>
// );

// ReactRouter.run(routes, function (Handler) {
//   React.render(<Handler/>, document.body);
// });

var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute,
    RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

this.MyRoutes = (
  <Route handler={App}>
    <DefaultRoute handler={DashboardContainer} />
    <Route handler={PhotoContainer} path='/photos'/>
    <Route handler={MeasurementsContainer} path='/measurements'/>
    <Route handler={Settings} path='/settings'/>
    <Route handler={Login} path='/users/sign_in'/>
  </Route>
);
