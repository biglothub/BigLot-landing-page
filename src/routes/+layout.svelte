<script>
    import '../app.css';
    import { setupI18n } from '$lib/i18n';
    import { isLoading } from 'svelte-i18n';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import StickyMobileCTA from '$lib/components/StickyMobileCTA.svelte';

    setupI18n();

    let { children } = $props();
</script>

{#if !$isLoading}
<Header />
<main>
    {@render children()}
</main>
<Footer />
<StickyMobileCTA />
{/if}
