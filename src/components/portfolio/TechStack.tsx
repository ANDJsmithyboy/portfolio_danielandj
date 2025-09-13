'use client';

import Image from 'next/image';
import { useLang } from './i18n';

export function TechStackMarquee() {
	const { lang } = useLang();
	const logos = [
		{ name: 'Next.js', src: '/stack/nextjs.svg' },
		{ name: 'React', src: '/stack/react.svg' },
		{ name: 'Tailwind', src: '/stack/tailwind.svg' },
		{ name: 'TypeScript', src: '/stack/typescript.svg' },
		{ name: 'TensorFlow', src: '/stack/tensorflow.svg' },
		{ name: 'PyTorch', src: '/stack/pytorch.svg' },
		{ name: 'AWS', src: '/stack/aws.svg' },
		{ name: 'Docker', src: '/stack/docker.svg' },
	];
	return (
		<section className="mx-auto max-w-6xl px-4 py-10">
			<h2 className="text-2xl font-semibold mb-4">{lang === 'en' ? 'Tech stack' : 'Outils & stack'}</h2>
			<div className="flex flex-wrap items-center gap-4 opacity-90">
				{logos.map((l) => (
					<div key={l.name} className="h-8 w-auto flex items-center">
						<Image src={l.src} alt={l.name} width={80} height={24} className="h-6 w-auto object-contain" />
					</div>
				))}
			</div>
		</section>
	);
}


