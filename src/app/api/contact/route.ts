import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const provider = process.env.EMAIL_PROVIDER || 'WEB3FORMS';
		const toEmail = process.env.CONTACT_TO_EMAIL || 'Contact@smartandjai.com';

		if (provider === 'WEB3FORMS') {
			const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
			if (!accessKey) {
				return NextResponse.json({ ok: false, error: 'Missing WEB3FORMS_ACCESS_KEY' }, { status: 400 });
			}
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ access_key: accessKey, to: toEmail, ...body }),
			});
			const data = await res.json();
			return NextResponse.json({ ok: data.success === true });
		}

		return NextResponse.json({ ok: false, error: 'Provider not configured' }, { status: 400 });
	} catch (error: unknown) {
		return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
	}
}


