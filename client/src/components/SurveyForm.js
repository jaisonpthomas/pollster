import React from "react";
import PropTypes from "prop-types";
import StripeWrapper from "./StripeWrapper";

const SurveyForm = props => {
  return (
    <div>
      <h3>New Survey</h3>
      <StripeWrapper />
    </div>
  );
};

SurveyForm.propTypes = {};

export default SurveyForm;
