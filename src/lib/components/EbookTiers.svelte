<script lang="ts">
    import { env } from '$env/dynamic/public';
    import { reveal } from '$lib/actions/reveal';
    import { _ } from 'svelte-i18n';

    const brokerLink = env.PUBLIC_BROKER_AFFILIATE_LINK || '#signup';
</script>

<section id="ebooks" class="ebooks" use:reveal>
    <div class="container">
        <h2 class="section-title">
            {$_('ebookTiers.title')}
        </h2>
        <p class="section-subtitle">
            {$_('ebookTiers.subtitle')}
        </p>

        <div class="tiers-grid">
            <!-- Free Tier -->
            <div class="tier-card glass">
                <div class="tier-badge free-badge">FREE</div>
                <div class="ebook-preview">
                    <div class="ebook-mini">
                        <p class="ebook-label">{$_('ebookTiers.free_ebook_label')}</p>
                        <h4>{$_('ebookTiers.free_ebook_mini_title')}<br/><small>{$_('ebookTiers.free_ebook_mini_subtitle')}</small></h4>
                    </div>
                </div>
                <h3>{$_('ebookTiers.free_card_title')}</h3>
                <p class="tier-title text-gold">{$_('ebookTiers.free_tier_title')}</p>
                <p class="tier-price">{$_('ebookTiers.free_price')}</p>
                <ul class="tier-features">
                    <li>{$_('ebookTiers.free_feature_1')}</li>
                    <li>{$_('ebookTiers.free_feature_2')}</li>
                    <li>{$_('ebookTiers.free_feature_3')}</li>
                    <li>{$_('ebookTiers.free_feature_4')}</li>
                </ul>
                <div class="tier-condition">
                    <span class="condition-label">{$_('ebookTiers.free_condition_label')}</span>
                    <p>{$_('ebookTiers.free_condition_text')}</p>
                </div>
                <a href="#signup" class="tier-btn free-btn">
                    <span>{$_('ebookTiers.free_cta')}</span>
                </a>
            </div>

            <!-- Premium Tier -->
            <div class="tier-card glass premium">
                <div class="tier-glow"></div>
                <div class="tier-badge premium-badge">PREMIUM</div>
                <div class="ebook-preview">
                    <div class="ebook-mini premium-ebook">
                        <p class="ebook-label">{$_('ebookTiers.premium_ebook_label')}</p>
                        <h4>TRADE<br/><small>DECODER</small></h4>
                    </div>
                </div>
                <h3>{$_('ebookTiers.premium_card_title')}</h3>
                <p class="tier-title text-gold">{$_('ebookTiers.premium_tier_title')}</p>
                <p class="tier-price">{$_('ebookTiers.premium_price')}</p>
                <ul class="tier-features">
                    <li>{$_('ebookTiers.premium_feature_1')}</li>
                    <li>{$_('ebookTiers.premium_feature_2')}</li>
                    <li>{$_('ebookTiers.premium_feature_3')}</li>
                    <li>{$_('ebookTiers.premium_feature_4')}</li>
                    <li>{$_('ebookTiers.premium_feature_5')}</li>
                </ul>
                <div class="tier-condition">
                    <span class="condition-label">{$_('ebookTiers.premium_condition_label')}</span>
                    <p>{$_('ebookTiers.premium_condition_text')}</p>
                </div>
                <a href="#signup" class="tier-btn premium-btn">
                    <span>{$_('ebookTiers.premium_cta')}</span>
                </a>
            </div>

            <!-- VIP Tier -->
            <div class="tier-card glass vip">
                <div class="tier-glow vip-glow"></div>
                <div class="vip-crown">&#128081;</div>
                <div class="tier-badge vip-badge">VIP</div>
                <div class="ebook-preview">
                    <div class="ebook-mini vip-ebook">
                        <p class="ebook-label">{$_('ebookTiers.vip_ebook_label')}</p>
                        <svg class="discord-logo" width="40" height="30" viewBox="0 0 24 24" fill="#5865F2" xmlns="http://www.w3.org/2000/svg" aria-label="Discord">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                        </svg>
                        <h4>Discord<br/><small>Membership</small></h4>
                    </div>
                </div>
                <h3>{$_('ebookTiers.vip_card_title')}</h3>
                <p class="tier-title text-gold">{$_('ebookTiers.vip_tier_title')}</p>
                <p class="tier-price">{$_('ebookTiers.vip_price')}</p>
                <ul class="tier-features">
                    <li>{$_('ebookTiers.vip_feature_1')}</li>
                    <li>{$_('ebookTiers.vip_feature_2')}</li>
                    <li>{$_('ebookTiers.vip_feature_3')}</li>
                    <li>{$_('ebookTiers.vip_feature_4')}</li>
                    <li>{$_('ebookTiers.vip_feature_5')}</li>
                    <li>{$_('ebookTiers.vip_feature_6')}</li>
                    <li>{$_('ebookTiers.vip_feature_7')}</li>
                </ul>
                <div class="tier-condition">
                    <span class="condition-label">{$_('ebookTiers.vip_condition_label')}</span>
                    <p>{$_('ebookTiers.vip_condition_text')}</p>
                </div>

                <div class="discord-preview">
                    <div class="discord-header">
                        <svg width="18" height="14" viewBox="0 0 24 24" fill="#5865F2" aria-hidden="true">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                        </svg>
                        <span>{$_('ebookTiers.discord_channels_header')}</span>
                    </div>
                    <div class="discord-channels">
                        <span class="channel">&#128200; {$_('ebookTiers.discord_ch_1')}</span>
                        <span class="channel">&#128172; {$_('ebookTiers.discord_ch_2')}</span>
                        <span class="channel">&#129689; xauusd-zone</span>
                        <span class="channel">&#128994; gold-signal</span>
                        <span class="channel">&#127760; currency-plans</span>
                        <span class="channel">&#128218; special-class</span>
                        <span class="channel">&#128240; news-update</span>
                        <span class="channel">&#128202; algo-prime</span>
                        <span class="channel">&#129309; live-trade</span>
                        <span class="channel">&#127909; zoom-live-trade</span>
                    </div>
                </div>

                <a href="#signup" class="tier-btn vip-btn">
                    <span>{$_('ebookTiers.vip_cta')}</span>
                </a>
            </div>
        </div>

        <div class="broker-cta">
            <p>{$_('ebookTiers.broker_cta_text')}</p>
            <a href={brokerLink} target="_blank" rel="noopener noreferrer" class="broker-btn">
                {$_('ebookTiers.broker_cta_button')}
            </a>
        </div>
    </div>
</section>

<style>
    .ebooks {
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

    .tiers-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        max-width: 1100px;
        margin: 0 auto;
    }

    .tier-card {
        padding: 2.5rem;
        border-radius: 24px;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .tier-card:hover {
        transform: translateY(-8px);
    }

    /* Premium */
    .tier-card.premium {
        border-color: rgba(255, 215, 0, 0.3);
    }

    .tier-card.premium:hover {
        border-color: rgba(255, 215, 0, 0.5);
    }

    /* VIP */
    .tier-card.vip {
        border-color: rgba(255, 215, 0, 0.4);
        background: linear-gradient(135deg, rgba(10, 10, 10, 0.3), rgba(255, 215, 0, 0.03));
    }

    .tier-card.vip:hover {
        border-color: var(--primary);
    }

    .vip-crown {
        position: absolute;
        top: -10px;
        right: 20px;
        font-size: 2.5rem;
        filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.4));
        animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
    }

    .tier-glow {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.03), transparent 50%);
        pointer-events: none;
    }

    .vip-glow {
        background: radial-gradient(circle at 50% 30%, rgba(255, 215, 0, 0.06), transparent 50%);
    }

    .tier-badge {
        display: inline-block;
        padding: 4px 16px;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        border-radius: 99px;
        margin-bottom: 1.5rem;
    }

    .free-badge {
        color: #4ade80;
        background: rgba(74, 222, 128, 0.1);
        border: 1px solid rgba(74, 222, 128, 0.2);
    }

    .premium-badge {
        color: var(--primary);
        background: rgba(255, 215, 0, 0.1);
        border: 1px solid rgba(255, 215, 0, 0.3);
    }

    .vip-badge {
        color: #000;
        background: var(--primary);
        border: 1px solid var(--primary);
        font-size: 0.8rem;
        padding: 5px 20px;
    }

    /* eBook preview mini */
    .ebook-preview {
        display: flex;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    .ebook-mini {
        width: 120px;
        height: 170px;
        background: var(--bg-card);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .tier-card:hover .ebook-mini {
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .ebook-mini.premium-ebook {
        border-color: rgba(255, 215, 0, 0.2);
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.05);
    }

    .ebook-mini.vip-ebook {
        border-color: rgba(255, 215, 0, 0.3);
        box-shadow: 0 0 40px rgba(255, 215, 0, 0.08);
        background: linear-gradient(135deg, var(--bg-card), rgba(255, 215, 0, 0.05));
    }

    .discord-logo {
        margin-bottom: 0.5rem;
        filter: drop-shadow(0 0 8px rgba(88, 101, 242, 0.4));
    }

    .ebook-mini .ebook-label {
        font-size: 0.55rem;
        font-weight: 600;
        letter-spacing: 0.2em;
        color: var(--primary);
        margin-bottom: 0.5rem;
    }

    .ebook-mini h4 {
        font-size: 0.75rem;
        font-weight: 700;
        color: #fff;
        line-height: 1.3;
    }

    .ebook-mini h4 small {
        font-size: 0.65rem;
        color: var(--text-muted);
        font-weight: 500;
    }

    h3 {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 0.5rem;
    }

    .tier-title {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
    }

    .tier-price {
        font-size: 1.75rem;
        font-weight: 800;
        color: #fff;
        margin-bottom: 1.5rem;
    }

    .tier-features {
        list-style: none;
        padding: 0;
        margin-bottom: 1.5rem;
    }

    .tier-features li {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
        color: var(--text-muted);
        font-size: 0.925rem;
        line-height: 1.5;
    }

    .tier-features li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--primary);
        font-weight: 700;
    }

    .tier-condition {
        padding: 1rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        margin-bottom: 1.5rem;
    }

    .condition-label {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        color: var(--text-muted);
        text-transform: uppercase;
        display: block;
        margin-bottom: 0.5rem;
    }

    .tier-condition p {
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.7);
    }

    /* Discord Preview */
    .discord-preview {
        padding: 1rem;
        background: rgba(88, 101, 242, 0.05);
        border: 1px solid rgba(88, 101, 242, 0.15);
        border-radius: 12px;
        margin-bottom: 1.5rem;
    }

    .discord-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.8rem;
        font-weight: 600;
        color: #7289da;
        margin-bottom: 0.75rem;
    }

    .discord-channels {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .channel {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 4px 10px;
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.6);
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 6px;
    }

    /* Buttons */
    .tier-btn {
        display: block;
        width: 100%;
        padding: 14px;
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
        border-radius: 12px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .free-btn {
        color: #fff;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .free-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }

    .premium-btn {
        color: #000;
        background: var(--primary);
        border: none;
    }

    .premium-btn:hover {
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        transform: translateY(-2px);
    }

    .vip-btn {
        color: #000;
        background: linear-gradient(135deg, var(--primary), #FFA500);
        border: none;
        font-size: 1.1rem;
        padding: 16px;
    }

    .vip-btn:hover {
        box-shadow: 0 10px 40px rgba(255, 215, 0, 0.4);
        transform: translateY(-2px);
    }

    .vip-btn span, .premium-btn span {
        position: relative;
        z-index: 2;
    }

    /* Broker CTA */
    .broker-cta {
        text-align: center;
        margin-top: 3rem;
        padding: 2rem;
    }

    .broker-cta p {
        color: var(--text-muted);
        margin-bottom: 1rem;
        font-size: 0.95rem;
    }

    .broker-btn {
        display: inline-block;
        padding: 12px 28px;
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--primary);
        background: rgba(255, 215, 0, 0.08);
        border: 1px solid rgba(255, 215, 0, 0.25);
        border-radius: 99px;
        transition: all 0.3s ease;
    }

    .broker-btn:hover {
        background: rgba(255, 215, 0, 0.15);
        border-color: var(--primary);
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
    }

    @media (min-width: 768px) {
        .tiers-grid {
            grid-template-columns: repeat(3, 1fr);
        }

        .tier-card.vip {
            transform: scale(1.05);
        }

        .tier-card.vip:hover {
            transform: scale(1.05) translateY(-8px);
        }

        .section-title {
            font-size: 3rem;
        }
    }
</style>
