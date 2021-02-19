const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs

  const response = { success: false };

  const msg = {
    to: 'scrogginszach@gmail.com', // Change to your recipient
    from: 'me@zachscroggins.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  await sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
      response.success = true;
    })
    .catch(error => {
      console.error(error);
    });

  res.status(200).json(response);
};
