<script>
    import Hero from '$lib/components/Hero.svelte';
    import PainPoints from '$lib/components/PainPoints.svelte';
    import Benefits from '$lib/components/Benefits.svelte';
    import EbookPreview from '$lib/components/EbookPreview.svelte';
    import AboutCredibility from '$lib/components/AboutCredibility.svelte';
    import SocialProof from '$lib/components/SocialProof.svelte';
    import IndicatorSection from '$lib/components/IndicatorSection.svelte';
    import Steps from '$lib/components/Steps.svelte';
    import ComparisonTable from '$lib/components/ComparisonTable.svelte';
    import EbookTiers from '$lib/components/EbookTiers.svelte';
    import SignupForm from '$lib/components/SignupForm.svelte';
    import FAQ from '$lib/components/FAQ.svelte';
    import FinalCTA from '$lib/components/FinalCTA.svelte';
</script>

<svelte:head>
    <title>BigLot - รับ eBook เทรดฟรี | หยุดเทรดแบบเดา เริ่มเทรดแบบมีระบบ</title>
    <meta name="description" content="ดาวน์โหลด eBook คู่มือเทรด Forex & XAUUSD ฟรี เรียนรู้ระบบเทรดที่ผ่านการพิสูจน์แล้ว พร้อมแผน 90 วัน Money Management และ Case Study จากการเทรดจริง สมัครผ่าน Broker พาร์ทเนอร์แล้วรับทันที" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="BigLot - รับ eBook เทรดฟรี | หยุดเทรดแบบเดา เริ่มเทรดแบบมีระบบ" />
    <meta property="og:description" content="ดาวน์โหลด eBook คู่มือเทรด Forex & XAUUSD ฟรี เรียนรู้ระบบเทรดที่ผ่านการพิสูจน์แล้ว พร้อมแผน 90 วัน" />
    <meta property="og:site_name" content="BigLot" />
    <meta property="og:locale" content="th_TH" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="BigLot - รับ eBook เทรดฟรี" />
    <meta name="twitter:description" content="คู่มือเทรด Forex & XAUUSD ฟรี พร้อมแผน 90 วัน สมัครแล้วรับทันที" />
</svelte:head>

<Hero />
<PainPoints />
<Benefits />
<EbookPreview />
<AboutCredibility />
<SocialProof />
<IndicatorSection />
<Steps />
<ComparisonTable />
<EbookTiers />
<SignupForm />
<FAQ />
<FinalCTA />
