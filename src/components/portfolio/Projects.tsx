'use client';

import React from 'react';
import Image from 'next/image';
import { useLang } from './i18n';

type Project = {
	id: string;
	name: string;
	image: string;
	category?: string;
	description?: string;
	tech?: string[];
	repo?: string;
	url?: string;
};

const fallbackProjects: Project[] = [
	{
		id: 'smartphn',
		name: 'SmartPHN',
		image: '/projects/smartphn.png',
		category: 'Industry',
		description: 'Back-office et outils de gestion (Sobraga).',
		tech: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
	},
	{
		id: 'gabomagpt',
		name: 'GabomaGPT',
		image: '/projects/gabomagpt.png',
		category: 'AI/LLM',
		description: 'Assistant IA spécialisé (mobile + web).',
		tech: ['React Native', 'Expo', 'LLM', 'Python'],
	},
	{
		id: 'oraculum',
		name: 'Oraculum (SportSense)',
		image: '/projects/oraculum.png',
		category: 'Sport',
		description: 'Analytique sportive et insights IA.',
		tech: ['Next.js', 'TensorFlow', 'Python', 'AWS'],
	},
];

export function ProjectsAdvancedWithModal() {
	const { lang } = useLang();
	const [projects, setProjects] = React.useState<Project[]>(fallbackProjects);
	const [active, setActive] = React.useState<Project | null>(null);

	React.useEffect(() => {
		fetch('/data/projects.json')
			.then((r) => r.json())
			.then((data) => {
				if (Array.isArray(data) && data.length > 0) {
					setProjects(data as Project[]);
				}
			})
			.catch(() => void 0);
	}, []);

	return (
		<section className="mx-auto max-w-6xl px-4 py-14">
			<h2 className="text-3xl font-semibold mb-6">
				{lang === 'en' ? 'Projects' : 'Projets'}
			</h2>
			<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((p) => (
					<button
						key={p.id}
						onClick={() => setActive(p)}
						className="text-left rounded overflow-hidden border border-white/10 hover:border-white/30 transition-colors"
					>
						<div className="relative w-full h-48">
							<Image src={p.image} alt={p.name} fill className="object-cover" />
						</div>
						<div className="p-4">
							<p className="text-sm opacity-70">{p.category}</p>
							<p className="font-medium mt-1">{p.name}</p>
						</div>
					</button>
				))}
			</div>

			{active && (
				<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setActive(null)}>
					<div className="bg-neutral-900 text-white rounded max-w-xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
						<div className="relative w-full h-56">
							<Image src={active.image} alt={active.name} fill className="object-cover" />
						</div>
						<div className="p-5 space-y-3">
							<p className="text-xs opacity-70">{active.category}</p>
							<h3 className="text-xl font-semibold">{active.name}</h3>
							{active.description && <p className="opacity-85">{active.description}</p>}
							{active.tech && active.tech.length > 0 && (
								<div className="flex flex-wrap gap-2 pt-2">
									{active.tech.map((t) => (
										<span key={t} className="text-xs px-2 py-1 rounded-full border border-white/15">
											{t}
										</span>
									))}
								</div>
							)}
							<div className="flex gap-3 pt-2">
								{active.repo && (
									<a href={active.repo} target="_blank" rel="noreferrer" className="px-3 py-2 rounded border border-white/20">
										GitHub
									</a>
								)}
								{active.url && (
									<a href={active.url} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-white text-black">
										{lang === 'en' ? 'Visit' : 'Visiter'}
									</a>
								)}
								<button onClick={() => setActive(null)} className="ml-auto px-3 py-2 rounded border border-white/20">
									{lang === 'en' ? 'Close' : 'Fermer'}
								</button>
							</div>
						</div>
					</div>
			)}
		</section>
	);
}


