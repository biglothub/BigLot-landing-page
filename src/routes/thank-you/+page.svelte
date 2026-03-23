<script lang="ts">
    import { page } from '$app/stores';

    const tier = $derived(($page.url.searchParams.get('tier')) || 'free');
    const needsApproval = $derived(tier === 'premium' || tier === 'vip');
    const isVip = $derived(tier === 'vip');
</script>

<svelte:head>
    <title>ขอบคุณ! - BigLot eBook</title>
</svelte:head>

<section class="thank-you">
    <div class="aura"></div>

    <div class="container content">
        <div class="check-icon" class:premium-icon={needsApproval}>
            {#if isVip}
                <span class="vip-crown-icon">&#128081;</span>
            {:else if needsApproval}
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            {:else}
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            {/if}
        </div>

        {#if isVip}
            <h1>ลงทะเบียน VIP สำเร็จ!</h1>
            <p class="message">
                กรุณาส่ง <span class="text-gold">Slip Deposit $500</span> ผ่าน Line<br />
                เพื่อรับ eBook ทั้ง 2 เล่ม + Discord VIP Invite
            </p>
            <div class="info-box glass-card">
                <p>ขั้นตอนถัดไป:</p>
                <ol>
                    <li>กดปุ่ม Line ด้านล่าง</li>
                    <li>ส่ง Slip Deposit ให้ทีมงาน</li>
                    <li>รับ eBook + Discord Invite ทาง Email ภายใน 24 ชม.</li>
                </ol>
            </div>
        {:else if needsApproval}
            <h1>ลงทะเบียนสำเร็จ!</h1>
            <p class="message">
                กรุณาส่ง <span class="text-gold">Slip Deposit $100</span> ผ่าน Line<br />
                เพื่อรับ eBook Premium ทาง Email
            </p>
            <div class="info-box glass-card">
                <p>ขั้นตอนถัดไป:</p>
                <ol>
                    <li>กดปุ่ม Line ด้านล่าง</li>
                    <li>ส่ง Slip Deposit ให้ทีมงาน</li>
                    <li>รับ eBook Premium ทาง Email ภายใน 24 ชม.</li>
                </ol>
            </div>
        {/if}

        {#if needsApproval}
            <div class="line-cta glass-card">
                <p>ส่ง Slip ผ่าน Line เลย</p>
                <a href="https://lin.ee/6k6uh0E" target="_blank" rel="noopener noreferrer" class="line-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                    <span>ส่ง Slip ผ่าน Line</span>
                </a>
            </div>
        {/if}

        {#if !needsApproval}
            <h1>ขอบคุณ!</h1>
            <p class="message">
                เราส่ง eBook ไปที่ <span class="text-gold">Email</span> ของคุณแล้ว<br />
                กรุณาเช็ค Inbox หรือ Spam folder
            </p>
        {/if}

        <a href="/" class="back-btn">
            <span>&larr; กลับหน้าแรก</span>
        </a>
    </div>
</section>

<style>
    .thank-you {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }

    .aura {
        position: absolute;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.08), transparent 70%);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: blur(80px);
        pointer-events: none;
    }

    .content {
        text-align: center;
        position: relative;
        z-index: 1;
        max-width: 600px;
        margin: 0 auto;
    }

    .check-icon {
        width: 100px;
        height: 100px;
        background: rgba(74, 222, 128, 0.1);
        border: 2px solid #4ade80;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 2rem;
        color: #4ade80;
        animation: scale-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .check-icon.premium-icon {
        background: rgba(255, 215, 0, 0.1);
        border-color: var(--primary);
        color: var(--primary);
    }

    .vip-crown-icon {
        font-size: 3rem;
        filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.4));
    }

    @keyframes scale-in {
        0% { transform: scale(0); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }

    .message {
        font-size: 1.15rem;
        color: var(--text-muted);
        line-height: 1.8;
        margin-bottom: 2rem;
    }


    .info-box {
        text-align: left;
        padding: 1.5rem 2rem;
        margin-bottom: 2rem;
    }

    .info-box p {
        color: var(--text-muted);
        font-size: 0.875rem;
        margin-bottom: 0.75rem;
    }

    .info-box ol {
        list-style: decimal;
        padding-left: 1.25rem;
    }

    .info-box li {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.925rem;
        line-height: 1.8;
    }

    .line-cta {
        padding: 1.5rem 2rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    .line-cta p {
        color: var(--text-muted);
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .line-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 12px 28px;
        font-size: 0.95rem;
        font-weight: 600;
        color: #fff;
        background: #06C755;
        border-radius: 99px;
        transition: all 0.3s ease;
    }

    .line-btn:hover {
        background: #00B843;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(6, 199, 85, 0.3);
    }

    .line-btn svg {
        flex-shrink: 0;
    }

    .line-btn span {
        position: relative;
        z-index: 2;
    }

    .back-btn {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 14px 36px;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 99px;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .back-btn::before {
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

    .back-btn::after {
        content: '';
        position: absolute;
        inset: 2px;
        background: #000;
        border-radius: 99px;
        z-index: 1;
    }

    .back-btn span {
        position: relative;
        z-index: 2;
    }

    .back-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px -5px rgba(255, 215, 0, 0.2);
    }
</style>
