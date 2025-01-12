import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Recipient:', process.env.EMAIL_RECIPIENT);

export async function POST(request: Request) {
  try {
    const { model, name, organization, phone, email, preferredDate, preferredTime } = await request.json();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Demo Request for ${model}`,
      text: `
        Model: ${model}
        Name: ${name}
        Organization: ${organization}
        Phone: ${phone}
        Email: ${email}
        Preferred Date: ${preferredDate}
        Preferred Time: ${preferredTime}
      `,
      html: `
        <h3>New Demo Request</h3>
        <p><strong>Model:</strong> ${model}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: "Demo request sent successfully" }, { status: 200 });
  } catch (error) {
    console.error('Error sending demo request:', error);
    return NextResponse.json(
      { error: "Failed to send demo request" },
      { status: 500 }
    );
  }
} 