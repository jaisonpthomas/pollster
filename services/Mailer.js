const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor(poll, emailTemplate) {
    super();

    const { election, repCandidate, demCandidate, recipients } = poll;

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("no-reply@pollster.com");
    this.subject = `POLL: ${election} - ${repCandidate}(R) vs ${demCandidate}(D)`;
    this.body = new helper.Content("text/html", emailTemplate);
    this.recipients = this.formatAddresses(recipients);
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }
  formatAddresses(recipients) {
    return recipients.map(recip => new helper.Email(recip.email));
  }
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }
  addRecipients() {
    const personalization = new helper.Personalization();
    this.recipients.forEach(recip => personalization.addTo(recip));
    this.addPersonalization(personalization);
  }
  async send() {
    const req = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON()
    });
    const res = await this.sgApi.API(req);
    return res;
  }
}

module.exports = Mailer;
