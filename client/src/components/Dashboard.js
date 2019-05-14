import React, { Fragment } from "react";
import PropTypes from "prop-types";
import StripeWrapper from "./StripeWrapper";
import { connect } from "react-redux";

const Dashboard = ({ credits }) => {
  return (
    <Fragment>
      <h3>Dashboard</h3>
      <p>
        <strong>Email Credits:</strong> {credits}
      </p>
      <StripeWrapper />
    </Fragment>
  );
};

Dashboard.propTypes = {
  credits: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  credits: state.auth.userData.credits
});

export default connect(mapStateToProps)(Dashboard);
