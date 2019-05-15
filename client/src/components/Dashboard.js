import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Dashboard = () => {
  const repVotes = 134;
  const demVotes = 80;
  const totalVotes = repVotes + demVotes;
  const repPercent = Math.round((100 * repVotes) / totalVotes);
  const demPercent = Math.round((100 * demVotes) / totalVotes);

  return (
    <Fragment>
      <h3>Polls</h3>
      <div className="card">
        <div className="card-content">
          <span className="card-title">12th District</span>
          <p>Janice Jones (D) vs Mark Smith (R)</p>
          <span class="blue blue-text" style={{ fontSize: "0.8rem" }}>
            {"_".repeat(Math.round(demPercent / 2))}
          </span>
          <span class="red red-text" style={{ fontSize: "0.8rem" }}>
            {"_".repeat(Math.round(repPercent / 2))}
          </span>

          <div>
            <span class="blue-text darken-1">
              <strong>D</strong>: {demPercent}% <em>({demVotes})</em>
            </span>
            <span class="white-text">________________</span>
            <span class="red-text darken-1">
              <strong>R</strong>: {repPercent}% <em>({repVotes})</em>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
