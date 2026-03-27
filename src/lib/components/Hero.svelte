<script lang="ts">
    import { env } from '$env/dynamic/public';
    import { _ } from 'svelte-i18n';

    const brokerLink = env.PUBLIC_BROKER_AFFILIATE_LINK || '#signup';
</script>

<section class="hero">
    <div class="aura aura-1"></div>
    <div class="aura aura-2"></div>

    <div class="container hero-content">
        <div class="badge">
            <span class="dot"></span>
            {$_('hero.badge')}
        </div>

        <h1 class="animate-float">
            {$_('hero.title_1')}<br />
            <span class="text-gold">{$_('hero.title_2')}</span>
        </h1>

        <p class="subtitle">
            {$_('hero.subtitle')}
        </p>

        <div class="cta-group">
            <a href={brokerLink} target="_blank" rel="noopener noreferrer" class="btn-primary">
                <span>{$_('hero.cta_primary')}</span>
            </a>
            <a href="#signup" class="link-secondary">{$_('hero.cta_secondary')}</a>
        </div>

        <div class="hero-visual">
            <div class="ebook-mockup">
                <div class="ebook-cover glass-card">
                    <div class="ebook-inner">
                        <p class="ebook-label">{$_('hero.ebook_label')}</p>
                        <h3>{$_('hero.ebook_title_1')}<br/><span class="text-gold">{$_('hero.ebook_title_2')}</span></h3>
                        <p class="ebook-author">{$_('hero.ebook_author')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding-top: 80px;
    }

    .aura {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        opacity: 0.4;
        z-index: -1;
    }

    .aura-1 {
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, var(--primary), transparent 70%);
        top: -10%;
        left: -10%;
        animation: pulse-aura 10s ease-in-out infinite alternate;
    }

    .aura-2 {
        width: 800px;
        height: 800px;
        background: radial-gradient(circle, #4a4a4a, transparent 70%);
        bottom: -20%;
        right: -20%;
    }

    .hero-content {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 800px;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 8px 20px;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--primary);
        background: rgba(255, 215, 0, 0.08);
        border: 1px solid rgba(255, 215, 0, 0.2);
        border-radius: 99px;
        margin-bottom: 2rem;
    }

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--primary);
        animation: pulse-dot 2s ease-in-out infinite;
    }

    @keyframes pulse-dot {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
    }

    h1 {
        margin-bottom: 1.5rem;
        line-height: 1.1;
    }

    .subtitle {
        font-size: 1.15rem;
        color: var(--text-muted);
        margin-bottom: 2.5rem;
        max-width: 600px;
        line-height: 1.8;
    }

    .cta-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 4rem;
    }

    .btn-primary {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 14px 40px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 99px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-primary::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        background: conic-gradient(transparent, transparent, transparent, var(--primary));
        animation: rotate 4s linear infinite;
        transform: translate(-50%, -50%);
        z-index: 0;
    }

    .btn-primary::after {
        content: '';
        position: absolute;
        inset: 2px;
        background: #000;
        border-radius: 99px;
        z-index: 1;
    }

    .btn-primary span {
        position: relative;
        z-index: 2;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px -5px rgba(255, 215, 0, 0.2);
    }

    .link-secondary {
        color: var(--text-muted);
        font-weight: 500;
        font-size: 0.95rem;
        border-bottom: 1px solid transparent;
        transition: all 0.3s ease;
    }

    .link-secondary:hover {
        color: #fff;
        border-bottom-color: var(--primary);
    }

    /* eBook mockup */
    .hero-visual {
        width: 100%;
        max-width: 900px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ebook-mockup {
        perspective: 1000px;
    }

    .ebook-cover {
        width: 220px;
        height: 310px;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotateY(-8deg) rotateX(5deg);
        transition: transform 0.5s ease;
        box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 40px rgba(255, 215, 0, 0.05);
    }

    .ebook-cover:hover {
        transform: rotateY(0deg) rotateX(0deg);
        box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 60px rgba(255, 215, 0, 0.1);
    }

    .ebook-inner {
        text-align: center;
    }

    .ebook-label {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.3em;
        color: var(--primary);
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    .ebook-inner h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #fff;
        line-height: 1.3;
        margin-bottom: 1rem;
        background: none;
        -webkit-text-fill-color: unset;
    }

    .ebook-author {
        font-size: 0.75rem;
        color: var(--text-muted);
        font-weight: 500;
    }

    @media (min-width: 768px) {
        .cta-group {
            flex-direction: row;
            gap: 2rem;
        }

        .ebook-cover {
            width: 280px;
            height: 400px;
        }

        .ebook-inner h3 {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 767px) {
        .hero-content {
            margin-top: 40px;
        }
    }
</style>
