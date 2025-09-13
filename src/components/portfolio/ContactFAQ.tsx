'use client';

import { useLang } from './i18n';

export function ContactSection() {
	const { lang } = useLang();
	const whatsappNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '';
	const waText = encodeURIComponent(
		lang === 'en'
			? 'Hi Daniel, I want to discuss my project ✨'
			: 'Salut Daniel, je veux discuter de mon projet ✨',
	);
	const waHref = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${waText}` : undefined;

	return (
		<section className="mx-auto max-w-5xl px-4 py-14">
			<h2 className="text-3xl font-semibold mb-4">{lang === 'en' ? 'Contact' : 'Contact'}</h2>
			<div className="flex flex-col sm:flex-row gap-3">
				{waHref && (
					<a href={waHref} target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-green-500 text-white">
						{lang === 'en' ? 'WhatsApp' : 'WhatsApp'}
					</a>
				)}
				<a href="#contact-form" className="px-4 py-2 rounded border border-white/20">
					{lang === 'en' ? 'Send a message' : 'Envoyer un message'}
				</a>
			</div>
			<form id="contact-form" className="mt-6 grid gap-3 max-w-xl">
				<input className="px-3 py-2 rounded bg-black/20 border border-white/10" placeholder={lang === 'en' ? 'Your name' : 'Votre nom'} />
				<input className="px-3 py-2 rounded bg-black/20 border border-white/10" placeholder="Email" />
				<textarea className="px-3 py-2 rounded bg-black/20 border border-white/10" rows={4} placeholder={lang === 'en' ? 'Tell me about your project' : 'Parlez-moi de votre projet'} />
				<button type="button" className="px-4 py-2 rounded bg-white text-black disabled:opacity-50">
					{lang === 'en' ? 'Submit' : 'Envoyer'}
				</button>
			</form>
		</section>
	);
}

export function FAQSection() {
	const { lang } = useLang();
	const items = [
		{
			q: lang === 'en' ? 'Do you work remotely?' : 'Travaillez-vous à distance ?',
			a: lang === 'en' ? 'Yes, remote-first with on-site possible.' : 'Oui, remote-first avec déplacement possible.',
		},
		{
			q: lang === 'en' ? 'What industries?' : 'Quels secteurs ?',
			a: lang === 'en' ? 'Healthcare, education, trading, sport, and more.' : 'Santé, éducation, trading, sport, etc.'
		},
	];
	return (
		<section className="mx-auto max-w-5xl px-4 py-14">
			<h2 className="text-3xl font-semibold mb-4">FAQ</h2>
			<div className="grid gap-4">
				{items.map((it) => (
					<div key={it.q} className="rounded border border-white/10 p-4">
						<p className="font-medium">{it.q}</p>
						<p className="opacity-80">{it.a}</p>
					</div>
				))}
			</div>
		</section>
	);
}


