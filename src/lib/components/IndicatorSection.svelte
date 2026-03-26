<script lang="ts">
    import { goto } from '$app/navigation';
    import { reveal } from '$lib/actions/reveal';

    let name = $state('');
    let email = $state('');
    let tvUsername = $state('');
    let isSubmitting = $state(false);
    let errorMessage = $state('');
    let submitted = $state(false);
    let submittedEmail = $state('');

    async function handleSubmit(e: Event) {
        e.preventDefault();
        errorMessage = '';

        if (!name.trim() || !email.trim() || !tvUsername.trim()) {
            errorMessage = 'กรุณากรอกข้อมูลให้ครบทุกช่อง';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            errorMessage = 'รูปแบบ Email ไม่ถูกต้อง';
            return;
        }

        const tvRegex = /^[a-zA-Z0-9_]{3,25}$/;
        if (!tvRegex.test(tvUsername.trim())) {
            errorMessage = 'TradingView Username ไม่ถูกต้อง (ตัวอักษร ตัวเลข หรือ _ เท่านั้น)';
            return;
        }

        isSubmitting = true;

        try {
            const formData = new FormData();
            formData.append('name', name.trim());
            formData.append('email', email.trim());
            formData.append('tradingview_username', tvUsername.trim());

            const res = await fetch('/api/indicator/submit', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();

            if (!res.ok) {
                errorMessage = data.error || 'เกิดข้อผิดพลาด กรุณาลองใหม่';
                return;
            }

            submittedEmail = email.trim();
            submitted = true;
            setTimeout(() => goto('/thank-you?type=indicator'), 2500);
        } catch {
            errorMessage = 'ไม่สามารถเชื่อมต่อได้ กรุณาลองใหม่';
        } finally {
            isSubmitting = false;
        }
    }
</script>

<section id="indicator" class="indicator-section" use:reveal>
    <div class="container">
        <div class="section-header" use:reveal>
            <div class="badge">FREE TOOL</div>
            <h2>รับ <span class="text-gold">Indicator ฟรี</span> บน TradingView</h2>
            <p class="section-subtitle">ก่อนสมัคร Broker — ลองใช้ Indicator ที่ทีมงานใช้เทรดจริง</p>
        </div>

        <div class="indicator-layout">
            <!-- Left: Showcase -->
            <div class="showcase" use:reveal>
                <div class="chart-card glass-card">
                    <div class="chart-header">
                        <span class="chart-symbol">XAUUSD · 1H</span>
                        <span class="chart-badge">BigLot Indicator</span>
                    </div>
                    <div class="chart-body">
                        <!-- SVG mock chart -->
                        <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" class="chart-svg">
                            <!-- Grid lines -->
                            <line x1="0" y1="40" x2="320" y2="40" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
                            <line x1="0" y1="80" x2="320" y2="80" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
                            <line x1="0" y1="120" x2="320" y2="120" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
                            <!-- Price line -->
                            <polyline points="0,120 40,100 70,110 100,80 130,85 160,60 190,70 220,45 250,55 280,35 320,40"
                                fill="none" stroke="rgba(255,215,0,0.6)" stroke-width="2"/>
                            <!-- Area fill -->
                            <polygon points="0,120 40,100 70,110 100,80 130,85 160,60 190,70 220,45 250,55 280,35 320,40 320,160 0,160"
                                fill="url(#goldGrad)" opacity="0.15"/>
                            <!-- BUY signal -->
                            <circle cx="100" cy="80" r="6" fill="rgba(74,222,128,0.9)"/>
                            <text x="100" y="70" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">BUY</text>
                            <!-- BUY signal 2 -->
                            <circle cx="220" cy="45" r="6" fill="rgba(74,222,128,0.9)"/>
                            <text x="220" y="35" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">BUY</text>
                            <!-- Resistance zone -->
                            <line x1="0" y1="38" x2="320" y2="38" stroke="rgba(255,215,0,0.3)" stroke-width="1" stroke-dasharray="4,4"/>
                            <text x="8" y="33" fill="rgba(255,215,0,0.6)" font-size="8">Resistance</text>
                            <!-- Support zone -->
                            <line x1="0" y1="112" x2="320" y2="112" stroke="rgba(96,165,250,0.3)" stroke-width="1" stroke-dasharray="4,4"/>
                            <text x="8" y="108" fill="rgba(96,165,250,0.6)" font-size="8">Support</text>
                            <!-- Gradient def -->
                            <defs>
                                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="#FFD700"/>
                                    <stop offset="100%" stop-color="#FFD700" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                <ul class="benefits-list">
                    <li>
                        <span class="check">&#10003;</span>
                        <span>สัญญาณ Buy แม่นยำ บน XAUUSD & Forex</span>
                    </li>
                    <li>
                        <span class="check">&#10003;</span>
                        <span>Zone Support & Resistance อัตโนมัติ</span>
                    </li>
                    <li>
                        <span class="check">&#10003;</span>
                        <span>ใช้ได้ฟรี บน TradingView (Invite-only)</span>
                    </li>
                    <li>
                        <span class="check">&#10003;</span>
                        <span>ทีมงานเพิ่ม Access ให้ภายใน 24 ชั่วโมง</span>
                    </li>
                </ul>
            </div>

            <!-- Right: Form or Success -->
            <div class="form-side" use:reveal>
                {#if submitted}
                    <div class="success-card glass-card">
                        <div class="success-icon">&#10003;</div>
                        <h3>ลงทะเบียนสำเร็จ!</h3>
                        <p>เราส่งอีเมลยืนยันไปที่<br/><span class="text-gold">{submittedEmail}</span></p>
                        <p class="success-sub">ทีมงานจะเพิ่ม Access ให้ภายใน 24 ชั่วโมง</p>
                    </div>
                {:else}
                    <div class="form-card glass-card">
                        <h3>รับ Indicator <span class="text-gold">ฟรี</span></h3>
                        <p class="form-desc">ไม่ต้องสมัคร Broker — กรอกข้อมูลด้านล่างได้เลย</p>

                        <form onsubmit={handleSubmit}>
                            <div class="field">
                                <label for="ind-name">ชื่อ</label>
                                <input
                                    type="text"
                                    id="ind-name"
                                    bind:value={name}
                                    placeholder="ชื่อของคุณ"
                                    required
                                />
                            </div>

                            <div class="field">
                                <label for="ind-email">Email</label>
                                <input
                                    type="email"
                                    id="ind-email"
                                    bind:value={email}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div class="field">
                                <label for="ind-tv">TradingView Username</label>
                                <input
                                    type="text"
                                    id="ind-tv"
                                    bind:value={tvUsername}
                                    placeholder="your_tv_username"
                                    required
                                    autocomplete="off"
                                />
                                <p class="field-hint">ดู Username ที่ TradingView &#8594; Profile &#8594; Settings</p>
                            </div>

                            {#if errorMessage}
                                <div class="error">{errorMessage}</div>
                            {/if}

                            <button type="submit" class="submit-btn" disabled={isSubmitting}>
                                <span>
                                    {isSubmitting ? 'กำลังส่ง...' : 'รับ Indicator ฟรี'}
                                </span>
                            </button>
                        </form>

                        <p class="privacy-note">ข้อมูลของคุณจะถูกเก็บเป็นความลับ</p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .indicator-section {
        padding: 6rem 0;
        position: relative;
    }

    .indicator-section::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        height: 400px;
        background: radial-gradient(ellipse, rgba(0, 200, 180, 0.04), transparent 70%);
        pointer-events: none;
    }

    .section-header {
        text-align: center;
        margin-bottom: 3.5rem;
    }

    .badge {
        display: inline-block;
        padding: 6px 16px;
        background: rgba(0, 200, 180, 0.1);
        border: 1px solid rgba(0, 200, 180, 0.3);
        border-radius: 99px;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: rgba(0, 220, 200, 0.9);
        margin-bottom: 1rem;
    }

    .section-header h2 {
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        color: #fff;
        margin-bottom: 0.75rem;
    }

    .section-subtitle {
        color: var(--text-muted);
        font-size: 1rem;
    }

    /* Layout */
    .indicator-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
        align-items: start;
        max-width: 960px;
        margin: 0 auto;
    }

    /* Chart card */
    .chart-card {
        padding: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .chart-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .chart-symbol {
        font-size: 0.875rem;
        font-weight: 700;
        color: var(--primary);
        letter-spacing: 0.05em;
    }

    .chart-badge {
        font-size: 0.7rem;
        font-weight: 600;
        padding: 3px 10px;
        background: rgba(255, 215, 0, 0.1);
        border: 1px solid rgba(255, 215, 0, 0.2);
        border-radius: 99px;
        color: rgba(255, 215, 0, 0.8);
    }

    .chart-body {
        border-radius: 8px;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.3);
    }

    .chart-svg {
        width: 100%;
        height: auto;
        display: block;
    }

    /* Benefits */
    .benefits-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
    }

    .benefits-list li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.8);
    }

    .check {
        color: var(--primary);
        font-weight: 700;
        font-size: 1rem;
        flex-shrink: 0;
        margin-top: 1px;
    }

    /* Form card */
    .form-card {
        padding: 2.5rem;
    }

    .form-card h3 {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 0.5rem;
    }

    .form-desc {
        color: var(--text-muted);
        font-size: 0.875rem;
        margin-bottom: 1.75rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .field {
        text-align: left;
    }

    label {
        display: block;
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-muted);
        margin-bottom: 0.5rem;
    }

    input[type="text"],
    input[type="email"] {
        width: 100%;
        padding: 14px 16px;
        font-size: 1rem;
        font-family: var(--font-main);
        color: #fff;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        outline: none;
        transition: all 0.3s ease;
        box-sizing: border-box;
    }

    input::placeholder {
        color: rgba(255, 255, 255, 0.3);
    }

    input:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
    }

    .field-hint {
        margin-top: 0.4rem;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.3);
        line-height: 1.5;
    }

    .error {
        padding: 12px 16px;
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.3);
        border-radius: 12px;
        color: #ef4444;
        font-size: 0.875rem;
        text-align: left;
    }

    /* Submit button — same conic gradient as SignupForm */
    .submit-btn {
        position: relative;
        width: 100%;
        padding: 16px;
        font-size: 1rem;
        font-weight: 700;
        font-family: var(--font-main);
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 0.5rem;
    }

    .submit-btn::before {
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

    .submit-btn::after {
        content: '';
        position: absolute;
        inset: 2px;
        background: #0a0a0a;
        border-radius: 10px;
        z-index: 1;
    }

    .submit-btn span {
        position: relative;
        z-index: 2;
    }

    .submit-btn:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px -5px rgba(255, 215, 0, 0.2);
    }

    .submit-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @keyframes rotate {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    .privacy-note {
        margin-top: 1.25rem;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.3);
        text-align: center;
    }

    /* Success card */
    .success-card {
        padding: 2.5rem;
        text-align: center;
    }

    .success-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(74, 222, 128, 0.15);
        border: 2px solid rgba(74, 222, 128, 0.4);
        color: #4ade80;
        font-size: 1.5rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.25rem;
    }

    .success-card h3 {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 0.75rem;
    }

    .success-card p {
        color: var(--text-muted);
        line-height: 1.7;
        margin-bottom: 0.5rem;
    }

    .success-sub {
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.35) !important;
        margin-top: 0.5rem;
    }

    /* Responsive */
    @media (max-width: 767px) {
        .indicator-layout {
            grid-template-columns: 1fr;
        }

        .form-side {
            order: -1;
        }

        .form-card,
        .success-card {
            padding: 2rem 1.5rem;
        }
    }
</style>
