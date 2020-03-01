import React, { Component } from 'react';
import './login.css';
import Logo from '../../image/login.svg';

class Login extends Component {
  render() {
    return (
      <div>
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>K</b>Service
            </a>
          </div>
          {/* /.login-logo */}
          <div
            className="login-box-body"
            style={{ background: 'whitesmoke', borderRadius: 10 }}
          >
            <p className="login-box-msg">Sign in to start your session</p>
            <form>
              <div className="form-group has-feedback">
                <input
                  onChange={e => {
                    this.setState({ username: e.target.value });
                  }}
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
                <span className="glyphicon glyphicon-lock form-control-feedback" />
              </div>
              {/* {this.props.loginReducer.isError ? this.showError() : null} */}
              <div className="row">
                <div className="col-xs-12">
                  <button
                    onClick={e => {
                      e.preventDefault();
                      this.props.login(this.props.history, this.state);
                    }}
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                  >
                    Sign In
                  </button>
                </div>
                {/* /.col */}
                <br />
                {/* /.col */}
              </div>
            </form>
          </div>
          {/* /.login-box-body */}
        </div>
      </div>
    );
  }
}

export default Login;
