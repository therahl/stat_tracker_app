import React from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

export default (ComposedComponent) => {
  return class AuthenticatedComponent extends React.Component {

    // static willTransitionTo(transition) {
      // This method is called before transitioning to this component. If the user is not logged in, we’ll send him or her to the Login page.
      // console.log('logged in....');
      // if (!UserStore.state.isLoggedIn) {
      //   transition.redirect('/users/sign_in');
      // }
    // }

    constructor() {
      super();
      this.handleStateChange = this.handleStateChange.bind(this);
      this.state = UserStore.getState();
    }

    componentDidMount() {
      UserStore.listen(this.handleStateChange);
    }

    handleStateChange(state) {
      this.setState(state);
    }

    componentWillUnmount() {
      UserStore.unlisten(this.handleStateChange);
    }

    render() {
      debugger;
      return (
      <ComposedComponent
        {...this.props}
        user={this.state.user}
        api_token={this.state.api_token}
        userLoggedIn={this.state.userLoggedIn} />
      );
    }
  }
};
