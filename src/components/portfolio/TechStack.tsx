'use client';

import { useLang } from './i18n';

export function TechStackMarquee() {
	const { lang } = useLang();
	const stack = [
		'Next.js',
		'React',
		'Tailwind CSS',
		'TypeScript',
		'Node.js',
		'Python',
		'TensorFlow',
		'PyTorch',
		'AWS',
		'Docker',
	];
	return (
		<section className="mx-auto max-w-6xl px-4 py-10">
			<h2 className="text-2xl font-semibold mb-4">{lang === 'en' ? 'Tech stack' : 'Outils & stack'}</h2>
			<div className="flex flex-wrap gap-2">
				{stack.map((name) => (
					<span key={name} className="px-3 py-1 rounded-full border border-white/15 text-sm">
						{name}
					</span>
				))}
			</div>
		</section>
	);
}


