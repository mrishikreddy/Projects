import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const MAIL_PASS = process.env.RTM_PASS;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rishiktechcore@gmail.com",
        pass: MAIL_PASS, // Use App Password instead of Gmail password
      },
    });

    const mailOptions = {
      from: "rishiktechcore@gmail.com",
      to: "malerishikreddy@gmail.com",
      subject: "A New Contact Form Submission Received",
      html: `
        <h2>Hello Boss, you have recevied a message from visitor at rishik.tech</h2>
        <br/>
        <h3>Name: ${name}</h3>
        <h3>Email: ${email}</h3>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: "Message sent successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
