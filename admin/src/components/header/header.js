import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../image/project.svg';

class Header extends Component {
  render() {
    return (
      <div>
        {' '}
        <nav className="main-header">
          <Link href="./index.php" className="logo">
            <span className="logo-mini">
              <b>K</b>SER
            </span>
            <span className="logo-lg">
              <b>K</b>SERVICE
            </span>
          </Link>
          <nav className="navbar navbar-static-top">
            <Link
              href="#"
              className="sidebar-toggle"
              data-toggle="push-menu"
              role="button"
            >
              <span className="sr-only">Toggle navigation</span>
            </Link>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                  <Link
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img
                      src={Profile}
                      className="user-image"
                      alt="User Image"
                    />
                    <span className="hidden-xs">Manager</span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img
                        src={Profile}
                        className="img-circle"
                        alt="User Image"
                      />
                      <p>
                        <small>Maneger</small>
                      </p>
                    </li>
                    <li className="user-footer">
                      <div className="pull-right">
                        <Link
                          href="../logout.php"
                          className="btn btn-default btn-flat"
                        >
                          Sign out
                        </Link>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </nav>
      </div>
    );
  }
}

export default Header;
