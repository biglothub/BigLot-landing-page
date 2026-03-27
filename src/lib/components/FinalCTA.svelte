<script lang="ts">
    import { env } from '$env/dynamic/public';
    import { LINE_OA_URL } from '$lib/config';
    import { _ } from 'svelte-i18n';

    const brokerLink = env.PUBLIC_BROKER_AFFILIATE_LINK || 'https://clients.svg.connextfx.com/links/go/3069';
</script>

<section class="final-cta">
    <div class="glow-bg"></div>
    <div class="container">
        <div class="cta-card glass-card">
            <h2>{$_('finalCta.heading')}</h2>
            <p class="cta-desc">
                {$_('finalCta.description')}
            </p>

            <div class="cta-buttons">
                <a href={brokerLink} target="_blank" rel="noopener noreferrer" class="btn-broker">
                    <span class="btn-text">{$_('finalCta.btn_broker')}</span>
                    <span class="btn-arrow">&rarr;</span>
                </a>

                <a href={LINE_OA_URL} target="_blank" rel="noopener noreferrer" class="btn-line">
                    <svg class="line-icon" width="24" height="24" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                    <span>{$_('finalCta.btn_line')}</span>
                </a>
            </div>

            <p class="cta-sub">{$_('finalCta.cta_sub')}</p>
        </div>
    </div>
</section>

<style>
    .final-cta {
        padding: 4rem 0 2rem;
        position: relative;
        overflow: hidden;
    }

    .glow-bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        height: 400px;
        background: radial-gradient(ellipse, rgba(255, 215, 0, 0.06), transparent 70%);
        pointer-events: none;
    }

    .cta-card {
        text-align: center;
        max-width: 640px;
        margin: 0 auto;
        padding: 3.5rem 2.5rem;
        border-color: rgba(255, 215, 0, 0.15);
        position: relative;
    }

    h2 {
        font-size: 2rem;
        color: #fff;
        margin-bottom: 1rem;
        line-height: 1.3;
    }

    .cta-desc {
        font-size: 1.1rem;
        color: var(--text-muted);
        margin-bottom: 2.5rem;
        line-height: 1.6;
    }

    .cta-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .btn-broker {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 16px 40px;
        background: var(--primary);
        color: #000;
        font-size: 1.1rem;
        font-weight: 700;
        border-radius: 99px;
        transition: all 0.3s ease;
        text-decoration: none;
    }

    .btn-broker:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 40px rgba(255, 215, 0, 0.35);
    }

    .btn-arrow {
        font-size: 1.2rem;
        transition: transform 0.2s ease;
    }

    .btn-broker:hover .btn-arrow {
        transform: translateX(4px);
    }

    .btn-line {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        padding: 14px 32px;
        background: #06C755;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 99px;
        transition: all 0.3s ease;
        text-decoration: none;
    }

    .btn-line:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(6, 199, 85, 0.3);
    }

    .line-icon {
        flex-shrink: 0;
    }

    .cta-sub {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.3);
    }

    @media (min-width: 640px) {
        .cta-buttons {
            flex-direction: row;
            justify-content: center;
        }

        h2 {
            font-size: 2.25rem;
        }
    }
</style>
