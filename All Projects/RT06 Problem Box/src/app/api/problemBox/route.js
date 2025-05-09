import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, problem } = await req.json();

    if (!problem) {
      return new Response(JSON.stringify({ error: "Problem statement is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "malerishikreddy@gmail.com",
      subject: "New Problem Statement Received",
      html: `
        <h3>Boss A Problem Statement Received at Rishik Tech</h3>
        <p><strong>Name:</strong> ${name || "Anonymous"}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Problem:</strong> ${problem}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: "Message sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
