import type { APIRoute } from 'astro';
import { main } from '../../../api/mail';

export const post: APIRoute = async ({ request }) => {
	console.log('request');

	const body = await request.json();
	const sentEmail = await main(JSON.stringify(body));

	return new Response(JSON.stringify({ message: 'Email sent successfully!' }));
};
