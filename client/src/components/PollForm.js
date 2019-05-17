import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPoll } from "../actions/poll";

const PollForm = ({ credits, addPoll, history }) => {
  const [formData, setFormData] = useState({
    election: "",
    demCandidate: "",
    repCandidate: "",
    recipients: ""
  });
  const { election, demCandidate, repCandidate, recipients } = formData;
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    addPoll(formData);
    history.push("/polls");
  };
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
        <form className="white" onSubmit={e => onSubmit(e)}>
          <div className="input-field">
            <label htmlFor="election">
              Election <em> (ex. "12th District Congressional")</em>
            </label>
            <input
              type="text"
              id="election"
              name="election"
              value={election}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="demCandidate">Democratic Candidate</label>
            <input
              type="text"
              id="demCandidate"
              name="demCandidate"
              value={demCandidate}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="repCandidate">Republican Candidate</label>
            <input
              type="text"
              id="repCandidate"
              name="repCandidate"
              value={repCandidate}
              onChange={e => onChange(e)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="recipients">Email Recipients</label>
            <textarea
              className="materialize-textarea"
              name="recipients"
              value={recipients}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="input-field">
            <button className="btn black">Post</button>
          </div>
        </form>
      )}
    </div>
  );
};

PollForm.propTypes = {
  credits: PropTypes.number.isRequired,
  addPoll: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  credits: state.auth.userData.credits
});

export default connect(
  mapStateToProps,
  { addPoll }
)(PollForm);
