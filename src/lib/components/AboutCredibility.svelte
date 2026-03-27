<script>
    import { reveal } from '$lib/actions/reveal';
    import { _ } from 'svelte-i18n';
</script>

<section class="about" use:reveal>
    <div class="container">
        <h2 class="section-title">
            {$_('aboutCredibility.title')} <span class="text-gold">{$_('aboutCredibility.title_highlight')}</span>
        </h2>
        <p class="section-subtitle">
            {$_('aboutCredibility.subtitle')}
        </p>

        <div class="about-layout">
            <div class="about-photo glass">
                <div class="photo-frame">
                    <div class="avatar">{$_('aboutCredibility.avatar')}</div>
                </div>
                <h3>{$_('aboutCredibility.name')}</h3>
                <p class="role">{$_('aboutCredibility.role')}</p>
            </div>

            <div class="about-details">
                <div class="credentials-grid">
                    {#each [1,2,3,4] as i}
                    <div class="credential glass">
                        <span class="cred-number text-gold">{$_(`aboutCredibility.cred_number_${i}`)}</span>
                        <span class="cred-label">{$_(`aboutCredibility.cred_label_${i}`)}</span>
                    </div>
                    {/each}
                </div>

                <div class="about-story glass">
                    <p>"{$_('aboutCredibility.story')}"</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .about {
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

    .about-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .about-photo {
        padding: 2.5rem;
        border-radius: 24px;
        text-align: center;
    }

    .photo-frame {
        width: 100px;
        height: 100px;
        margin: 0 auto 1.5rem;
        border-radius: 50%;
        border: 2px solid var(--primary);
        box-shadow: 0 0 20px var(--primary-glow);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .avatar {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 800;
        color: var(--primary);
        background: rgba(255, 215, 0, 0.1);
    }

    .about-photo h3 {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 0.25rem;
    }

    .role {
        color: var(--primary);
        font-size: 0.9rem;
        font-weight: 600;
    }

    .about-details {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .credentials-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    .credential {
        padding: 1.25rem;
        border-radius: 16px;
        text-align: center;
        transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .credential:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 215, 0, 0.3);
    }

    .cred-number {
        display: block;
        font-size: 1.5rem;
        font-weight: 800;
        margin-bottom: 0.25rem;
    }

    .cred-label {
        display: block;
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    .about-story {
        padding: 1.5rem 2rem;
        border-radius: 16px;
        border-left: 3px solid var(--primary);
    }

    .about-story p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        line-height: 1.8;
        font-style: italic;
    }

    @media (min-width: 768px) {
        .about-layout {
            grid-template-columns: 1fr 2fr;
            align-items: start;
        }

        .section-title {
            font-size: 3rem;
        }
    }
</style>
