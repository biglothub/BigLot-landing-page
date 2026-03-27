<script>
    import { _ } from 'svelte-i18n';
    import Hero from '$lib/components/Hero.svelte';
    import PainPoints from '$lib/components/PainPoints.svelte';
    import Benefits from '$lib/components/Benefits.svelte';
    import EbookPreview from '$lib/components/EbookPreview.svelte';
    import AboutCredibility from '$lib/components/AboutCredibility.svelte';
    import SocialProof from '$lib/components/SocialProof.svelte';
    import Steps from '$lib/components/Steps.svelte';
    import ComparisonTable from '$lib/components/ComparisonTable.svelte';
    import EbookTiers from '$lib/components/EbookTiers.svelte';
    import SignupForm from '$lib/components/SignupForm.svelte';
    import FAQ from '$lib/components/FAQ.svelte';
    import FinalCTA from '$lib/components/FinalCTA.svelte';
</script>

<svelte:head>
    <title>{$_('meta.title')}</title>
    <meta name="description" content={$_('meta.description')} />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={$_('meta.og_title')} />
    <meta property="og:description" content={$_('meta.og_description')} />
    <meta property="og:site_name" content={$_('meta.og_site_name')} />
    <meta property="og:locale" content={$_('meta.og_locale')} />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={$_('meta.twitter_title')} />
    <meta name="twitter:description" content={$_('meta.twitter_description')} />
</svelte:head>

<Hero />
<PainPoints />
<Benefits />
<EbookPreview />
<AboutCredibility />
<SocialProof />
<Steps />
<ComparisonTable />
<EbookTiers />
<SignupForm />
<FAQ />
<FinalCTA />
