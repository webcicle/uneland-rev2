import nodemailer from 'nodemailer';

export async function main(message: string) {
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: import.meta.env.EMAIL_HOST,
		port: 587,
		secure: false, // true for 465, false for other ports

		service: 'iCloud',
		auth: {
			user: import.meta.env.ICLOUD_UN, // generated ethereal user
			pass: import.meta.env.ICLOUD_PW, // generated ethereal password
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Unelandia Contact Form" <realviktorious@icloud.com>', // sender address
		to: 'viktor@unelandia.com', // list of receivers
		subject: 'Message from Unelandia Contact Form', // Subject line
		text: message, // plain text body
	});

	console.log('Message sent: %s', info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

	return { message: `Message sent: ${info.messageId}` };
}
