import React from "react";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleToken } from "../actions/auth";

const StripeWrapper = ({ handleToken }) => {
  return (
    <StripeCheckout
      name="pollster"
      description="$5 for 5 email credits"
      amount={500}
      token={token => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn btn-small">Add Credits</button>
    </StripeCheckout>
  );
};

StripeWrapper.propTypes = {
  handleToken: PropTypes.func.isRequired
};

export default connect(
  null,
  { handleToken }
)(StripeWrapper);
