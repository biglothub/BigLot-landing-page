<script>
    import { reveal } from '$lib/actions/reveal';
    import { _ } from 'svelte-i18n';
</script>

<section id="ebook-preview" class="ebook-preview" use:reveal>
    <div class="container">
        <h2 class="section-title">
            {$_('ebookPreview.title')}
        </h2>
        <p class="section-subtitle">
            {$_('ebookPreview.subtitle')}
        </p>

        <div class="preview-grid">
            <!-- Free eBook TOC -->
            <div class="toc-card glass">
                <div class="toc-badge free">{$_('ebookPreview.free_badge')}</div>
                <h3>{$_('ebookPreview.free_title')}</h3>
                <p class="toc-desc">{$_('ebookPreview.free_desc')}</p>
                <ul class="toc-list">
                    {#each [1,2,3,4,5,6,7] as i}
                    <li>
                        <span class="chapter-num">{String(i).padStart(2, '0')}</span>
                        <span>{$_(`ebookPreview.free_ch_${i}`)}</span>
                    </li>
                    {/each}
                </ul>
            </div>

            <!-- Premium eBook TOC -->
            <div class="toc-card glass premium-card">
                <div class="toc-glow"></div>
                <div class="toc-badge premium">{$_('ebookPreview.premium_badge')}</div>
                <h3>{$_('ebookPreview.premium_title')}</h3>
                <p class="toc-desc">{$_('ebookPreview.premium_desc')}</p>
                <ul class="toc-list">
                    {#each [1,2,3,4,5,6,7,8,9,10] as i}
                    <li>
                        <span class="chapter-num gold">{String(i).padStart(2, '0')}</span>
                        <span>{$_(`ebookPreview.premium_ch_${i}`)}</span>
                    </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>

<style>
    .ebook-preview {
        padding: 6rem 0;
        position: relative;
    }

    .section-title {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #fff 30%, #aaa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .section-title :global(.text-gold) {
        -webkit-text-fill-color: var(--primary);
        text-shadow: 0 0 20px var(--primary-glow);
    }

    .section-subtitle {
        text-align: center;
        color: var(--text-muted);
        font-size: 1.1rem;
        margin-bottom: 4rem;
    }

    .preview-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .toc-card {
        padding: 2.5rem;
        border-radius: 24px;
        position: relative;
        overflow: hidden;
    }

    .premium-card {
        border-color: rgba(255, 215, 0, 0.2);
    }

    .toc-glow {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.03), transparent 50%);
        pointer-events: none;
    }

    .toc-badge {
        display: inline-block;
        padding: 4px 16px;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        border-radius: 99px;
        margin-bottom: 1rem;
    }

    .toc-badge.free {
        color: #4ade80;
        background: rgba(74, 222, 128, 0.1);
        border: 1px solid rgba(74, 222, 128, 0.2);
    }

    .toc-badge.premium {
        color: var(--primary);
        background: rgba(255, 215, 0, 0.1);
        border: 1px solid rgba(255, 215, 0, 0.3);
    }

    .toc-card h3 {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 0.5rem;
    }

    .toc-desc {
        color: var(--text-muted);
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    }

    .toc-list {
        list-style: none;
        padding: 0;
    }

    .toc-list li {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.75);
        font-size: 0.925rem;
        line-height: 1.5;
    }

    .toc-list li:last-child {
        border-bottom: none;
    }

    .chapter-num {
        font-size: 0.75rem;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.3);
        flex-shrink: 0;
        width: 24px;
        font-family: monospace;
    }

    .chapter-num.gold {
        color: var(--primary);
    }

    @media (min-width: 768px) {
        .preview-grid {
            grid-template-columns: repeat(2, 1fr);
            align-items: start;
        }

        .section-title {
            font-size: 3rem;
        }

    }
</style>
