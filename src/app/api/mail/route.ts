import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; lastRequestTime: number }>();
const MAX_REQUESTS = 5;
const RATE_LIMIT = 300000;

export async function POST(request: NextRequest) {
    try{
        const clientIp = (request.headers.get("x-forwarded-for")?.split(",")[0].trim()) ||
"unknown";

        const currentTime = Date.now();
        const rateLimit = rateLimitMap.get(clientIp) || {
            count: 0,
            lastRequestTime: currentTime,
        };
        if (currentTime - rateLimit.lastRequestTime > RATE_LIMIT) {
            rateLimit.count = 1;
            rateLimit.lastRequestTime = currentTime;
            } else rateLimit.count ++;

        rateLimitMap.set(clientIp, rateLimit);

        if (rateLimit.count > MAX_REQUESTS)
            return NextResponse.json(
                { error: 'Too many requests. Otherwise you can contact me at my email: \'Contact@jossua.dev\'' },
                { status: 429 }
            );

        const { firstName, lastName, email, message, captcha } = await request.json();

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const isHuman = await validateHuman(captcha);
        if (!isHuman) {
            return NextResponse.json(
                { error: 'CAPTCHA verification failed' },
                { status: 400 }
            );
        }

        await sendEmail({ firstName, lastName, email, message });

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    }catch(error) {
        console.error('Error processing request:', error);
        return NextResponse.json(
            { error: 'An error occurred, but you can contact me at my email \'Contact@jossua.dev\'' },
            { status: 500 }
        );
    }
}
async function sendEmail({firstName, lastName, email, message,}: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        replyTo: email,
        subject: 'Nouveau Message depuis portfolio',
        text: `Nouveau message de: Name: ${firstName} ${lastName} Email: ${email}
        Message: ${message}
        `,
        html: `
        <p>Nouveau message reçu sur le Site:</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
                `,
        };

    await transporter.sendMail(mailOptions);
}
async function validateHuman(token: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
        throw new Error('RECAPTCHA_SECRET_KEY is not set in environment variables');
    }
    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(
                token
            )}`,
        }
    );
    const data = await response.json();
    return data.success;
}