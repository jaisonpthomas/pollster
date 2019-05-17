const keys = require("../config/keys");

module.exports = poll => {
  const { election, repCandidate, demCandidate, recipients } = poll;
  return `
  <html>
  <body>
    <div style="text-align: center;">
      <h2>We'd like your input!</h2>
      <p>The <strong>${election} election is approaching. Will you be voting for?</p>
      <div>
        <a style="font-size:1.5rem; color:red;"
        href="${keys.redirectDomain}/api/polls/${poll.id}/rep">
          <strong>${repCandidate} (R)</strong>
        </a>
      </div>
      <p>OR </p>
      <div>
        <a style="font-size:1.5rem; color:blue;"
        href="${keys.redirectDomain}/api/polls/${poll.id}/dem">
          <strong>${demCandidate}</strong> (D)
        </a>
      </div>
      <p>Click on your preferred candidate's name to submit polling data.</p>
      <p><em>Note: This is for polling purposes only - this is <strong>NOT</strong> an official vote.</em></p>
    </div>
  </body>
</html>
  `;
};
