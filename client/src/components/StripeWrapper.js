import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleToken } from "../actions/auth";

const StripeWrapper = ({ credits, handleToken }) => {
  return (
    <Fragment>
      <p>
        <strong>Pollster Credits:</strong> {credits}
      </p>
      <StripeCheckout
        name="pollster"
        description="$5 for 5 email credits"
        amount={500}
        token={token => handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-small black">Add Credits</button>
      </StripeCheckout>
    </Fragment>
  );
};

StripeWrapper.propTypes = {
  credits: PropTypes.number.isRequired,
  handleToken: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  credits: state.auth.userData.credits
});

export default connect(
  mapStateToProps,
  { handleToken }
)(StripeWrapper);
