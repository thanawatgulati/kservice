import React, { Component } from 'react';
import Login from './components/login/login';
import Header from './components/header/header';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { server, YES } from './constants';
// import { connect } from 'react-redux';

import Menu from './components/menu/menu';
import Dashboard from './components/dashboard/dashboard';
import Regis from './components/regis/regis';
import Regissuccess from './components/regissuccess/regissuccess';

// const isLoggedIn = () => {
//   return localStorage.getItem(server.LOGIN_PASSED) === YES;
// };

// const SecuredRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isLoggedIn() === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );

class App extends Component {
  //re login page
  // componentDidMount() {
  //   this.props.setApp(this);
  // }

  // redirectToLogin = () => {
  //   return <Redirect to="/login" />;
  // };
  render() {
    return (
      <Router>
        <div>
          {/* {isLoggedIn() && <Header />} */}
          {/* {isLoggedIn() && <Menu />} */}
          <Header />
          <Menu />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/regis" component={Regis} />
            <Route path="/regissuccess" component={Regissuccess} />
            {/* <Route path="/register" component={Register} />
            <SecuredRoute path="/stock" component={Stock} />
            <SecuredRoute path="/report" component={Report} />
            <SecuredRoute path="/stock-create" component={StockCreate} />
            <SecuredRoute path="/stock-edit/:id" component={StockEdit} /> */}
            <Route exact={true} path="/" component={this.redirectToLogin} />
            <Route exact={true} path="*" component={this.redirectToLogin} />
          </Switch>
          {/* {isLoggedIn() && <Footer />} */}
        </div>
      </Router>
    );
  }
}

export default App;
