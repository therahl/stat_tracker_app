import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
// import { browserHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

// debugger;
ReactDOM.render(<Router history={createBrowserHistory()}>{routes}</Router>, document.getElementById('app'));
