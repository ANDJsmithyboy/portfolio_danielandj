'use client';

import Image from 'next/image';
import { useLang } from './i18n';

export function Hero() {
	const { lang, toggle } = useLang();

	const whatsappNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '';
	const waText = encodeURIComponent(
		lang === 'en'
			? 'Hi Daniel, I want to discuss my project ✨'
			: 'Salut Daniel, je veux discuter de mon projet ✨',
	);
	const waHref = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${waText}` : undefined;

	const socials = [
		{ name: 'GitHub', href: process.env.NEXT_PUBLIC_SOCIAL_GITHUB },
		{ name: 'LinkedIn', href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN },
		{ name: 'TikTok', href: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK },
		{ name: 'Instagram', href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM },
		{ name: 'Facebook', href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK },
	].filter((s) => !!s.href);

	return (
		<section className="w-full py-16 text-center">
			<div className="mx-auto max-w-5xl px-4">
				<div className="flex justify-end">
					<button onClick={toggle} className="px-3 py-1 rounded border border-white/20">
						{lang.toUpperCase()}
					</button>
				</div>
				<div className="mt-4 flex flex-col items-center gap-4">
					<div className="relative h-28 w-28 rounded-full overflow-hidden border border-white/20">
						<Image src="/photo_andj_ceo.jpg" alt="Daniel ANDJ" fill className="object-cover" />
					</div>
					<h1 className="text-4xl sm:text-6xl font-bold">Daniel ANDJ</h1>
					<p className="mt-1 text-lg opacity-80">
						{lang === 'en' ? 'The Digital Doctor' : 'Le médecin du numérique'}
					</p>
				</div>

				<div className="mt-6 flex flex-wrap gap-3 justify-center">
					{waHref && (
						<a
							href={waHref}
							target="_blank"
							rel="noreferrer"
							className="px-4 py-2 rounded bg-green-500 text-white"
						>
							{lang === 'en' ? 'WhatsApp me' : 'Contacte-moi sur WhatsApp'}
						</a>
					)}
					{socials.map((s) => (
						<a
							key={s.name}
							href={s.href}
							target="_blank"
							rel="noreferrer"
							className="px-4 py-2 rounded border border-white/20"
						>
							{s.name}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}


