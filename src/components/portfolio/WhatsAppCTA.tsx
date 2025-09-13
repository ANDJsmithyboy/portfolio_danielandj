'use client';

import { useLang } from './i18n';

export function WhatsAppCTA() {
	const { lang } = useLang();
	const number = process.env.NEXT_PUBLIC_WA_NUMBER || '';
	if (!number) return null;
	const text = encodeURIComponent(
		lang === 'en' ? 'Hi Daniel, I want to discuss my project ✨' : 'Salut Daniel, je veux discuter de mon projet ✨',
	);
	const href = `https://wa.me/${number}?text=${text}`;
	return (
		<div className="mx-auto max-w-5xl px-4 pb-6">
			<a href={href} target="_blank" rel="noreferrer" className="block w-full text-center rounded bg-green-500 text-white py-3">
				{lang === 'en' ? 'Chat on WhatsApp' : 'Discuter sur WhatsApp'}
			</a>
		</div>
	);
}


