import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const GET = (req: NextRequest, res: NextResponse) => {
  return new Response("Hello, Next.js!", {});
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();

  console.log(process.env.SMTP_USERNAME, process.env.SMTP_PASSWORD);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mail = await transporter.sendMail({
    from: body.email,
    to: process.env.SMTP_USERNAME,
    subject: "Media Solutions Pvt, Ltd. - Contact Us",
    html: `
      <h2>Contact Information</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Company:</strong> ${body.company}</p>
      <h2>Message</h2>
      <p>${body.message.replace(/\n/g, "<br>")}</p>
    `,
  });

  return NextResponse.json({
    success: true,
    data: { mailId: mail.messageId || null },
  });
};
