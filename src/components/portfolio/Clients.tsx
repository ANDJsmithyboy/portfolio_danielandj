'use client';

import { useLang } from './i18n';

export function TrustedBy() {
	const { lang } = useLang();
	const clients = ['Client A', 'Client B', 'Client C'];
	return (
		<section className="mx-auto max-w-6xl px-4 py-10">
			<h2 className="text-2xl font-semibold mb-4">{lang === 'en' ? 'Trusted by' : 'Ils me font confiance'}</h2>
			<div className="flex flex-wrap gap-3 opacity-80">
				{clients.map((c) => (
					<span key={c} className="px-3 py-1 rounded border border-white/15">
						{c}
					</span>
				))}
			</div>
		</section>
	);
}


