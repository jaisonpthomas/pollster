import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const Navbar = ({ auth: { userData }, logout }) => {
  const authLinks = (
    <Fragment>
      <li>
        <NavLink to="/polls/new">New Poll</NavLink>
      </li>
      <li>
        <NavLink to="/credits">Credits</NavLink>
      </li>
      <li>
        <NavLink onClick={logout} to="/">
          Logout
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <div className="nav-wrapper red darken-4">
        <div className="container">
          <NavLink to={"/polls"} className="left brand-logo">
            pollster
          </NavLink>
          <ul className="right">{userData && authLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
