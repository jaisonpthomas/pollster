import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PollForm = ({ credits }) => {
  return (
    <div>
      <h3>New Poll</h3>
      {credits === 0 && (
        <p>
          <span className="red-text">
            <strong>You have 0 Pollster credits.</strong>
            <br />
          </span>
          <Link to="/credits"> Purchase </Link>{" "}
          <span className="red-text">credits to send a new poll.</span>
        </p>
      )}
      {credits !== 0 && (
        <form className="white" onSubmit={e => e.preventDefault()}>
          <div className="input-field">
            <label htmlFor="title">
              Election <em> (ex. "12th District Congressional")</em>
            </label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="input-field">
            <label htmlFor="demCandidate">Democratic Candidate</label>
            <input type="text" id="demCandidate" name="demCandidate" />
          </div>
          <div className="input-field">
            <label htmlFor="repCandidate">Republican Candidate</label>
            <input type="text" id="repCandidate" name="repCandidate" />
          </div>

          <div className="input-field">
            <label htmlFor="recipients">Email Recipients</label>
            <textarea className="materialize-textarea" name="recipients" />
          </div>
          <div className="input-field">
            <button className="btn blue darken-1">Post</button>
          </div>
        </form>
      )}
    </div>
  );
};

PollForm.propTypes = {
  credits: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  credits: state.auth.userData.credits
});

export default connect(mapStateToProps)(PollForm);
