<script lang="ts">
    import { onMount } from 'svelte';

    let scrolled = $state(false);
    let isMenuOpen = $state(false);

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        }
    };

    const closeMenu = () => {
        isMenuOpen = false;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = '';
        }
    };

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<header class:scrolled class:menu-active={isMenuOpen}>
    <div class="container header-inner">
        <a href="/" class="logo">BigLot</a>

        <nav class="desktop-nav">
            <a href="#benefits">ประโยชน์</a>
            <a href="#ebooks">แพ็กเกจ</a>
            <a href="#steps">ขั้นตอน</a>
            <a href="#signup">รับ eBook</a>
        </nav>

        <div class="actions">
            <a href="#signup" class="cta-btn">
                <span>รับ eBook ฟรี</span>
            </a>
            <button
                class="menu-btn"
                class:active={isMenuOpen}
                onclick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>

<div class="mobile-nav-overlay" class:active={isMenuOpen}>
    <nav class="mobile-nav">
        <div class="nav-links">
            <a href="#benefits" onclick={closeMenu}>ประโยชน์</a>
            <a href="#ebooks" onclick={closeMenu}>แพ็กเกจ</a>
            <a href="#steps" onclick={closeMenu}>ขั้นตอน</a>
            <a href="#signup" onclick={closeMenu}>รับ eBook ฟรี</a>
        </div>
        <a href="https://t.me/biglot_community" target="_blank" rel="noopener noreferrer" class="tg-btn" onclick={closeMenu}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.667l-2.945-.916c-.64-.203-.658-.64.135-.954l11.57-4.461c.537-.194 1.006.131.964.885z"/></svg>
            Telegram Community
        </a>
    </nav>
</div>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        padding: 24px 0;
        transition: all 0.3s var(--transition-smooth);
    }

    header.scrolled,
    header.menu-active {
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        padding: 16px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .header-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 800;
        color: #fff;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        z-index: 1001;
    }

    .desktop-nav {
        display: none;
        gap: 2.5rem;
    }

    .desktop-nav a {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.95rem;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    .desktop-nav a:hover {
        color: var(--primary);
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        z-index: 1001;
    }

    .cta-btn {
        display: none;
        position: relative;
        padding: 10px 24px;
        font-size: 0.875rem;
        font-weight: 600;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 215, 0, 0.3);
        border-radius: 99px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .cta-btn:hover {
        border-color: var(--primary);
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.15);
    }

    .cta-btn span {
        position: relative;
        z-index: 2;
    }

    .menu-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6px;
        cursor: pointer;
        width: 32px;
        height: 32px;
        background: transparent;
        border: none;
        padding: 0;
        z-index: 1001;
    }

    .menu-btn span {
        width: 100%;
        height: 2px;
        background: #fff;
        border-radius: 2px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .menu-btn.active span:nth-child(1) {
        transform: translateY(4px) rotate(45deg);
    }

    .menu-btn.active span:nth-child(2) {
        transform: translateY(-4px) rotate(-45deg);
    }

    .mobile-nav-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: 900;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mobile-nav-overlay.active {
        opacity: 1;
        visibility: visible;
    }

    .mobile-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        text-align: center;
        width: 100%;
        padding: 2rem;
        transform: translateY(20px);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        transition-delay: 0.1s;
    }

    .mobile-nav-overlay.active .mobile-nav {
        transform: translateY(0);
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .nav-links a {
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    .nav-links a:hover {
        color: var(--primary);
    }

    .tg-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 12px 28px;
        border-radius: 99px;
        background: rgba(91, 181, 229, 0.1);
        border: 1px solid rgba(91, 181, 229, 0.3);
        color: #5bb5e5;
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    .tg-btn:hover {
        background: rgba(91, 181, 229, 0.2);
        border-color: #5bb5e5;
    }

    @media (min-width: 768px) {
        .desktop-nav {
            display: flex;
        }
        .cta-btn {
            display: inline-flex;
        }
        .menu-btn {
            display: none;
        }
        .mobile-nav-overlay {
            display: none;
        }
    }
</style>
