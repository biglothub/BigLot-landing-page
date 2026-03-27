<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { locale } from 'svelte-i18n';

	function switchLocale() {
		const currentPath = $page.url.pathname;
		const currentLang = $locale || 'th';
		const newLang = currentLang === 'th' ? 'en' : 'th';
		const newPath = currentPath.replace(`/${currentLang}`, `/${newLang}`);
		goto(newPath);
	}
</script>

<button onclick={switchLocale} class="lang-toggle" aria-label="Switch language">
	{$locale === 'th' ? 'EN' : 'TH'}
</button>

<style>
	.lang-toggle {
		background: transparent;
		border: 1.5px solid rgba(255, 255, 255, 0.3);
		color: white;
		padding: 0.35rem 0.75rem;
		border-radius: 6px;
		font-size: 0.85rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		letter-spacing: 0.5px;
	}
	.lang-toggle:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.5);
	}
</style>
