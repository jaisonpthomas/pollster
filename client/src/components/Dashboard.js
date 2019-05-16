import React, { Fragment } from "react";
import PropTypes from "prop-types";
import PollItem from "./PollItem";

const Dashboard = () => {
  return (
    <Fragment>
      <PollItem repVotes={134} demVotes={80} />
      <PollItem repVotes={16} demVotes={25} />
      <PollItem repVotes={3} demVotes={98} />
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
