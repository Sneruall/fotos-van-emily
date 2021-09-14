const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler (req, res) {
    const body = JSON.parse(req.body);

    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Tel: ${body.tel}\r\n
    Onderwerp: ${body.onderwerp}\r\n
    Message: ${body.message}
  `;
  
  const data = {
      to: 'l.c.vanroomen@gmail.com',
      from: 'info@laurensvanroomen.nl',
      subject: `Nieuw contactform bericht van ${body.name}`,
      text: message,
      html: message.replace(/\r\n/g, '<br />'),
    };

    await mail.send(data);

    res.status(200).json({ status: 'OK' });
  };



  export default handler;