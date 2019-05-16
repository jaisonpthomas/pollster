import React from "react";
import PropTypes from "prop-types";

const PollItem = ({ repVotes, demVotes }) => {
  const totalVotes = repVotes + demVotes;
  const repPercent = Math.round(100 * (repVotes / totalVotes));
  const demPercent = Math.round(100 * (demVotes / totalVotes));
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">12th District Congressional</span>
        <p>Janice Jones (D) vs Mark Smith (R)</p>
        <span className="blue blue-text" style={{ fontSize: "0.8rem" }}>
          {"_".repeat(Math.round(demPercent / 2))}
        </span>
        <span className="red red-text" style={{ fontSize: "0.8rem" }}>
          {"_".repeat(Math.round(repPercent / 2))}
        </span>

        <div>
          <span className="blue-text darken-1">
            <strong>D</strong>: {demPercent}% <em>({demVotes})</em>
          </span>
          <span className="white-text">________________</span>
          <span className="red-text darken-1">
            <strong>R</strong>: {repPercent}% <em>({repVotes})</em>
          </span>
        </div>
      </div>
    </div>
  );
};

PollItem.propTypes = {};

export default PollItem;
