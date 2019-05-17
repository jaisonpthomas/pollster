import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PollItem from "./PollItem";
import { getPolls } from "../actions/poll";

const Dashboard = ({ polls, getPolls }) => {
  useEffect(() => {
    getPolls();
  }, []);

  return (
    <Fragment>
      <h3>Dashboard</h3>
      {polls.map(poll => (
        <PollItem poll={poll} key={poll._id} />
      ))
      //)
      }
    </Fragment>
  );
};

Dashboard.propTypes = {
  polls: PropTypes.array.isRequired,
  getPolls: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  polls: state.poll.polls
});

export default connect(
  mapStateToProps,
  { getPolls }
)(Dashboard);
