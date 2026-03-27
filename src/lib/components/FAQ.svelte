<script lang="ts">
    import { reveal } from '$lib/actions/reveal';
    import { _ } from 'svelte-i18n';

    const faqKeys = [1, 2, 3, 4, 5, 6];

    let openIndex = $state(-1);

    function toggle(index: number) {
        openIndex = openIndex === index ? -1 : index;
    }
</script>

<section id="faq" class="faq" use:reveal>
    <div class="container">
        <h2 class="section-title">
            {$_('faq.title')}
        </h2>

        <div class="faq-list">
            {#each faqKeys as key, i}
                <div class="faq-item glass" class:open={openIndex === i}>
                    <button class="faq-question" onclick={() => toggle(i)}>
                        <span>{$_(`faq.q_${key}`)}</span>
                        <span class="faq-icon">{openIndex === i ? '−' : '+'}</span>
                    </button>
                    {#if openIndex === i}
                        <div class="faq-answer">
                            <p>{$_(`faq.a_${key}`)}</p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .faq {
        padding: 6rem 0;
        position: relative;
    }

    .section-title {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        background: linear-gradient(135deg, #fff 30%, #aaa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .section-title :global(.text-gold) {
        -webkit-text-fill-color: var(--primary);
        text-shadow: 0 0 20px var(--primary-glow);
    }

    .faq-list {
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .faq-item {
        border-radius: 16px;
        overflow: hidden;
        transition: border-color 0.3s ease;
    }

    .faq-item.open {
        border-color: rgba(255, 215, 0, 0.2);
    }

    .faq-question {
        width: 100%;
        padding: 1.25rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        background: transparent;
        border: none;
        cursor: pointer;
        text-align: left;
        font-family: var(--font-main);
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        transition: color 0.3s ease;
    }

    .faq-question:hover {
        color: var(--primary);
    }

    .faq-icon {
        flex-shrink: 0;
        font-size: 1.5rem;
        color: var(--primary);
        font-weight: 300;
    }

    .faq-answer {
        padding: 0 1.5rem 1.25rem;
        animation: fadeIn 0.3s ease;
    }

    .faq-answer p {
        color: var(--text-muted);
        font-size: 0.925rem;
        line-height: 1.8;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media (min-width: 768px) {
        .section-title {
            font-size: 3rem;
        }
    }
</style>
