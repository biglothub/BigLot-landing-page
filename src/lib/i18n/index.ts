import { register, init, locale } from 'svelte-i18n';

register('th', () => import('./locales/th.json'));
register('en', () => import('./locales/en.json'));

export function setupI18n(lang: string = 'th') {
	init({
		fallbackLocale: 'th',
		initialLocale: lang
	});
}

export { locale };
