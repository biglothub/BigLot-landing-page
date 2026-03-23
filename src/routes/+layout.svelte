<script>
    import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import StickyMobileCTA from '$lib/components/StickyMobileCTA.svelte';

    let { children } = $props();
</script>

<Header />
<main>
    {@render children()}
</main>
<Footer />
<StickyMobileCTA />
