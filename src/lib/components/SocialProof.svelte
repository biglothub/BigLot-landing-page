<script>
    import { reveal } from '$lib/actions/reveal';
    import { _ } from 'svelte-i18n';

    const avatarClasses = ['', 'avatar-blue', 'avatar-green', 'avatar-purple', ''];
    const starRatings = ['&#9733;&#9733;&#9733;&#9733;&#9733;', '&#9733;&#9733;&#9733;&#9733;&#9733;', '&#9733;&#9733;&#9733;&#9733;&#9733;', '&#9733;&#9733;&#9733;&#9733;&#9733;', '&#9733;&#9733;&#9733;&#9733;&#9734;'];
</script>

<section class="social-proof" use:reveal>
    <div class="container">
        <div class="stats-bar">
            <div class="stat">
                <span class="stat-number text-gold">{$_('socialProof.stat_1')}</span>
                <span class="stat-label">{$_('socialProof.stat_label_1')}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
                <span class="stat-number text-gold">{$_('socialProof.stat_2')}</span>
                <span class="stat-label">{$_('socialProof.stat_label_2')}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
                <span class="stat-number text-gold">{$_('socialProof.stat_3')}</span>
                <span class="stat-label">{$_('socialProof.stat_label_3')}</span>
            </div>
        </div>

        <h2 class="section-title">
            {$_('socialProof.title')} <span class="text-gold">{$_('socialProof.title_highlight')}</span>
        </h2>

        <div class="testimonials-grid">
            {#each [1,2,3,4,5] as i}
                <div class="testimonial glass">
                    <div class="stars">{@html starRatings[i-1]}</div>
                    <p class="quote">"{$_(`socialProof.quote_${i}`)}"</p>
                    <div class="author">
                        <div class="avatar {avatarClasses[i-1]}">{$_(`socialProof.avatar_${i}`)}</div>
                        <div>
                            <p class="author-name">{$_(`socialProof.author_${i}`)}</p>
                            <p class="author-tier">{$_(`socialProof.tier_${i}`)}</p>
                            <p class="review-date">{$_(`socialProof.date_${i}`)}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <div class="results-strip">
            <div class="result-item glass">
                <span class="result-icon">&#128200;</span>
                <div>
                    <p class="result-stat text-gold">{$_('socialProof.result_stat_1')}</p>
                    <p class="result-desc">{$_('socialProof.result_desc_1')}</p>
                </div>
            </div>
            <div class="result-item glass">
                <span class="result-icon">&#128737;</span>
                <div>
                    <p class="result-stat text-gold">{$_('socialProof.result_stat_2')}</p>
                    <p class="result-desc">{$_('socialProof.result_desc_2')}</p>
                </div>
            </div>
            <div class="result-item glass">
                <span class="result-icon">&#128101;</span>
                <div>
                    <p class="result-stat text-gold">{$_('socialProof.result_stat_3')}</p>
                    <p class="result-desc">{$_('socialProof.result_desc_3')}</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .social-proof {
        padding: 6rem 0;
        position: relative;
    }

    .stats-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
        margin-bottom: 4rem;
        padding: 2rem;
        background: var(--bg-glass);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 20px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .stat {
        text-align: center;
    }

    .stat-number {
        display: block;
        font-size: 2rem;
        font-weight: 800;
    }

    .stat-label {
        font-size: 0.85rem;
        color: var(--text-muted);
        margin-top: 0.25rem;
        display: block;
    }

    .stat-divider {
        width: 1px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
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

    .testimonials-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .testimonial {
        padding: 2rem;
        border-radius: 20px;
        transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .testimonial:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 215, 0, 0.2);
    }

    .stars {
        color: var(--primary);
        font-size: 1.1rem;
        letter-spacing: 0.15em;
        margin-bottom: 1rem;
    }

    .quote {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        line-height: 1.8;
        margin-bottom: 1.5rem;
        font-style: italic;
    }

    .author {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 215, 0, 0.15);
        border: 1px solid rgba(255, 215, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
        font-weight: 700;
        color: var(--primary);
    }

    .author-name {
        font-size: 0.9rem;
        font-weight: 600;
        color: #fff;
    }

    .author-tier {
        font-size: 0.75rem;
        color: var(--text-muted);
    }

    .review-date {
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.3);
        margin-top: 2px;
    }

    .avatar-blue {
        background: rgba(88, 101, 242, 0.15);
        border-color: rgba(88, 101, 242, 0.3);
        color: #7289da;
    }

    .avatar-green {
        background: rgba(74, 222, 128, 0.15);
        border-color: rgba(74, 222, 128, 0.3);
        color: #4ade80;
    }

    .avatar-purple {
        background: rgba(168, 85, 247, 0.15);
        border-color: rgba(168, 85, 247, 0.3);
        color: #a855f7;
    }

    /* Results Strip */
    .results-strip {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        max-width: 800px;
        margin: 3rem auto 0;
    }

    .result-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.25rem 1.5rem;
        border-radius: 16px;
        transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .result-item:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 215, 0, 0.2);
    }

    .result-icon {
        font-size: 1.5rem;
    }

    .result-stat {
        font-size: 1.5rem;
        font-weight: 800;
    }

    .result-desc {
        font-size: 0.85rem;
        color: var(--text-muted);
    }

    @media (min-width: 768px) {
        .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
        }

        .section-title {
            font-size: 3rem;
        }

        .stats-bar {
            gap: 3rem;
        }

        .results-strip {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 480px) {
        .stat-divider {
            display: none;
        }

        .stats-bar {
            gap: 1.5rem;
        }
    }
</style>
