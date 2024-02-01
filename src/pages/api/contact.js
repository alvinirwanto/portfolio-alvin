import { transporter, mailOptions } from "../config/nodemailer";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Bad Request' })
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: subject,
                text: 'This is a test string',
                html: `<h1>Title</h1><br/><p>Name : ${name}</p> <br/> <p>Email: ${email}</p> <br/> <p>Subject: ${subject}</p> <br/> <p>Message: ${message}</p> <br/>`
            })
            return res.status(200).json({ success: true })
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: error.message })
        }
    }

    return res.status(400).json({ message: 'Bad Request' })
}
