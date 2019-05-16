import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ auth: { userData } }) => {
  if (userData) return <Redirect to="/polls" />;
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>pollster </h1>
          <h6>Send polls via email to track your campaign's progress</h6>
          <br />
          <a className="btn red darken-3" href="/auth/google">
            Login With Google
          </a>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
