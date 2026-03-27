<script lang="ts">
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';

    let visible = $state(false);

    onMount(() => {
        const handleScroll = () => {
            visible = window.scrollY > 600;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

{#if visible}
    <div class="sticky-cta">
        <a href="#signup" class="sticky-btn">
            <span>{$_('stickyMobileCta.button')}</span>
        </a>
    </div>
{/if}

<style>
    .sticky-cta {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 12px 16px;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-top: 1px solid rgba(255, 215, 0, 0.15);
        z-index: 999;
        animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
        from { transform: translateY(100%); }
        to { transform: translateY(0); }
    }

    .sticky-btn {
        display: block;
        width: 100%;
        padding: 14px;
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
        color: #000;
        background: var(--primary);
        border-radius: 12px;
        transition: all 0.3s ease;
    }

    .sticky-btn:active {
        transform: scale(0.98);
    }

    .sticky-btn span {
        position: relative;
        z-index: 2;
    }

    @media (min-width: 768px) {
        .sticky-cta {
            display: none;
        }
    }
</style>
