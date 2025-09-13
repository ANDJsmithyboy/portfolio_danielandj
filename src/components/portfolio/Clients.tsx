'use client';

import Image from 'next/image';
import { useLang } from './i18n';

export function TrustedBy() {
	const { lang } = useLang();
	const logos = [
		{ name: 'Client 1', src: '/clients/client1.svg' },
		{ name: 'Client 2', src: '/clients/client2.svg' },
		{ name: 'Client 3', src: '/clients/client3.svg' },
	];
	return (
		<section className="mx-auto max-w-6xl px-4 py-10">
			<h2 className="text-2xl font-semibold mb-4">{lang === 'en' ? 'Trusted by' : 'Ils me font confiance'}</h2>
			<div className="flex flex-wrap items-center gap-6 opacity-90">
				{logos.map((l) => (
					<div key={l.name} className="h-8 w-auto flex items-center">
						<Image src={l.src} alt={l.name} width={100} height={24} className="h-6 w-auto object-contain" />
					</div>
				))}
			</div>
		</section>
	);
}


