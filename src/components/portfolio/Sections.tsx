'use client';

import { useLang } from './i18n';

export function AboutSection() {
	const { lang } = useLang();
	return (
		<section className="mx-auto max-w-5xl px-4 py-14">
			<h2 className="text-3xl font-semibold mb-4">{lang === 'en' ? 'About me' : 'À propos'}</h2>
			<p className="opacity-80 leading-relaxed">
				{lang === 'en'
					? "I began tech with passion at age 7 on my father's computer. At 16, I explored entrepreneurship (MLM) and many domains — today I bring full-stack expertise across AI, web, mobile, and DevOps."
					: "J’ai commencé l’informatique par passion à 7 ans sur l’ordinateur de mon père. À 16 ans, j’ai exploré l’entrepreneuriat (MLM) et de nombreux domaines — aujourd’hui j’apporte une expertise full‑stack en IA, web, mobile et DevOps."}
			</p>
		</section>
	);
}

export function ServicesSection() {
	const { lang } = useLang();
	const items = [
		lang === 'en' ? 'AI/ML systems & LLM apps' : 'Systèmes IA/ML & apps LLM',
		lang === 'en' ? 'Web apps (Next.js)' : 'Applications web (Next.js)',
		lang === 'en' ? 'Mobile apps (React Native/Expo)' : 'Applications mobiles (React Native/Expo)',
		lang === 'en' ? 'Cloud & DevOps' : 'Cloud & DevOps',
	];
	return (
		<section className="mx-auto max-w-5xl px-4 py-14">
			<h2 className="text-3xl font-semibold mb-6">{lang === 'en' ? 'Services' : 'Services'}</h2>
			<ul className="grid gap-3 sm:grid-cols-2">
				{items.map((txt) => (
					<li key={txt} className="rounded border border-white/10 px-4 py-3">{txt}</li>
				))}
			</ul>
		</section>
	);
}

export function Footer() {
	const { lang } = useLang();
	return (
		<footer className="mx-auto max-w-5xl px-4 py-10 opacity-70 text-center">
			{lang === 'en' ? '© ' : '© '} {new Date().getFullYear()} Daniel ANDJ — {lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
		</footer>
	);
}


