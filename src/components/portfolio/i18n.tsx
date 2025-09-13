'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

type Language = 'en' | 'fr';

type LanguageContextValue = {
	lang: Language;
	setLang: (lang: Language) => void;
	toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLang] = useState<Language>('en');

	const value = useMemo<LanguageContextValue>(
		() => ({
			lang,
			setLang,
			toggle: () => setLang((prev) => (prev === 'en' ? 'fr' : 'en')),
		}),
		[lang],
	);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
	const ctx = useContext(LanguageContext);
	if (!ctx) {
		throw new Error('useLang must be used within LangProvider');
	}
	return ctx;
}


