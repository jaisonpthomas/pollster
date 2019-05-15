import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const Navbar = ({ auth: { userData }, logout }) => {
  const authLinks = (
    <Fragment>
      <li>
        <Link to="/surveys/new">New Survey</Link>
      </li>
      <li>
        <Link onClick={logout} to="/">
          Logout
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <div className="nav-wrapper red darken-4">
        <div className="container">
          <Link to={"/surveys"} className="left brand-logo">
            pollster
          </Link>
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
