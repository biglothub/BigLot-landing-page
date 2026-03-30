<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { LINE_OA_URL } from '$lib/config';
    import { _ } from 'svelte-i18n';

    type Tier = 'free' | 'premium' | 'vip';

    let selectedTier: Tier = $state('free');
    const needsSlip = $derived(selectedTier === 'premium' || selectedTier === 'vip');
    const needsBrokerAccount = $derived(selectedTier !== 'free');
    let name = $state('');
    let email = $state('');
    let brokerAccountId = $state('');
    let isSubmitting = $state(false);
    let errorMessage = $state('');

    function selectTier(tier: Tier) {
        selectedTier = tier;
        errorMessage = '';
    }

    async function handleSubmit(e: Event) {
        e.preventDefault();
        errorMessage = '';

        if (!name.trim() || !email.trim() || (needsBrokerAccount && !brokerAccountId.trim())) {
            errorMessage = $_('signupForm.error_required');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            errorMessage = $_('signupForm.error_email');
            return;
        }

        isSubmitting = true;

        try {
            const formData = new FormData();
            formData.append('name', name.trim());
            formData.append('email', email.trim());
            formData.append('broker_account_id', brokerAccountId.trim());
            formData.append('tier', selectedTier);

            const res = await fetch('/api/submit', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();

            if (!res.ok) {
                errorMessage = data.error || $_('signupForm.error_generic');
                return;
            }

            const lang = $page.params.lang || 'th';
            goto(`/${lang}/thank-you?tier=${selectedTier}`);
        } catch {
            errorMessage = $_('signupForm.error_connection');
        } finally {
            isSubmitting = false;
        }
    }
</script>

<section id="signup" class="signup">
    <div class="container">
        <div class="form-wrapper">
            <div class="form-glow"></div>
            <div class="form-card glass-card">
                <h2>
                    {$_('signupForm.heading')}
                </h2>
                <p class="form-desc">
                    {$_('signupForm.form_desc')}
                </p>

                <!-- Tier Selector -->
                <div class="tier-selector">
                    <button
                        class="tier-tab"
                        class:active={selectedTier === 'free'}
                        onclick={() => selectTier('free')}
                        type="button"
                    >
                        <span class="tier-tab-label">{$_('signupForm.tier_free_label')}</span>
                        <span class="tier-tab-desc">{$_('signupForm.tier_free_desc')}</span>
                    </button>
                    <button
                        class="tier-tab premium-tab"
                        class:active={selectedTier === 'premium'}
                        onclick={() => selectTier('premium')}
                        type="button"
                    >
                        <span class="tier-tab-label">{$_('signupForm.tier_premium_label')}</span>
                        <span class="tier-tab-desc">{$_('signupForm.tier_premium_desc')}</span>
                    </button>
                    <button
                        class="tier-tab vip-tab"
                        class:active={selectedTier === 'vip'}
                        onclick={() => selectTier('vip')}
                        type="button"
                    >
                        <span class="tier-tab-label">{$_('signupForm.tier_vip_label')}</span>
                        <span class="tier-tab-desc">{$_('signupForm.tier_vip_desc')}</span>
                    </button>
                </div>

                <form onsubmit={handleSubmit}>
                    <div class="field">
                        <label for="name">{$_('signupForm.label_name')}</label>
                        <input
                            type="text"
                            id="name"
                            bind:value={name}
                            placeholder={$_('signupForm.placeholder_name')}
                            required
                        />
                    </div>

                    <div class="field">
                        <label for="email">{$_('signupForm.label_email')}</label>
                        <input
                            type="email"
                            id="email"
                            bind:value={email}
                            placeholder={$_('signupForm.placeholder_email')}
                            required
                        />
                    </div>

                    {#if needsBrokerAccount}
                        <div class="field">
                            <label for="account">{$_('signupForm.label_broker_account')}</label>
                            <input
                                type="text"
                                id="account"
                                bind:value={brokerAccountId}
                                placeholder={$_('signupForm.placeholder_broker_account')}
                                required
                            />
                        </div>
                    {/if}

                    <!-- Line CTA for Slip (Premium & VIP) -->
                    {#if needsSlip}
                        <div class="field slip-field">
                            <p class="field-label">{$_('signupForm.slip_field_label', { values: { amount: selectedTier === 'vip' ? '$500' : '$100' } })}</p>
                            <a href={LINE_OA_URL} target="_blank" rel="noopener noreferrer" class="line-slip-cta">
                                <div class="line-slip-inner">
                                    <svg class="line-icon" width="32" height="32" viewBox="0 0 24 24" fill="#06C755" aria-hidden="true">
                                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                                    </svg>
                                    <div class="line-slip-text">
                                        <p>{$_('signupForm.slip_line_cta')}</p>
                                        <span>{$_('signupForm.slip_line_cta_sub')}</span>
                                    </div>
                                    <span class="line-arrow">&rarr;</span>
                                </div>
                            </a>
                            <p class="line-slip-note">{selectedTier === 'vip' ? $_('signupForm.slip_note_vip') : $_('signupForm.slip_note_ebook')}</p>
                        </div>
                    {/if}

                    {#if errorMessage}
                        <div class="error">
                            {errorMessage}
                        </div>
                    {/if}

                    <button type="submit" class="submit-btn" class:premium-submit={needsSlip} disabled={isSubmitting}>
                        <span>
                            {#if isSubmitting}
                                {$_('signupForm.submitting')}
                            {:else if selectedTier === 'vip'}
                                {$_('signupForm.submit_vip')}
                            {:else if selectedTier === 'premium'}
                                {$_('signupForm.submit_premium')}
                            {:else}
                                {$_('signupForm.submit_free')}
                            {/if}
                        </span>
                    </button>
                </form>

                <p class="privacy-note">
                    {$_('signupForm.privacy_note')}
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    .signup {
        padding: 6rem 0;
        position: relative;
    }

    .form-wrapper {
        max-width: 520px;
        margin: 0 auto;
        position: relative;
    }

    .form-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.06), transparent 70%);
        pointer-events: none;
        z-index: 0;
    }

    .form-card {
        position: relative;
        z-index: 1;
        padding: 3rem;
        text-align: center;
    }

    .form-card h2 {
        font-size: 2rem;
        margin-bottom: 0.75rem;
        color: #fff;
    }

    .form-desc {
        color: var(--text-muted);
        margin-bottom: 2rem;
        font-size: 0.95rem;
    }

    /* Tier Selector */
    .tier-selector {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
        margin-bottom: 2rem;
    }

    .tier-tab {
        padding: 1rem;
        background: rgba(255, 255, 255, 0.03);
        border: 2px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
        font-family: var(--font-main);
    }

    .tier-tab:hover {
        border-color: rgba(255, 255, 255, 0.2);
    }

    .tier-tab.active {
        border-color: rgba(74, 222, 128, 0.5);
        background: rgba(74, 222, 128, 0.05);
    }

    .tier-tab.premium-tab.active {
        border-color: rgba(255, 215, 0, 0.5);
        background: rgba(255, 215, 0, 0.05);
    }

    .tier-tab.vip-tab.active {
        border-color: rgba(255, 215, 0, 0.6);
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 165, 0, 0.05));
    }

    .tier-tab-label {
        display: block;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        margin-bottom: 0.25rem;
    }

    .tier-tab.active .tier-tab-label {
        color: #4ade80;
    }

    .tier-tab.premium-tab.active .tier-tab-label,
    .tier-tab.vip-tab.active .tier-tab-label {
        color: var(--primary);
    }

    .tier-tab:not(.active) .tier-tab-label {
        color: var(--text-muted);
    }

    .tier-tab-desc {
        font-size: 0.85rem;
        color: var(--text-muted);
    }

    .tier-tab.active .tier-tab-desc {
        color: #fff;
    }

    /* Form */
    form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .field {
        text-align: left;
    }

    label, .field-label {
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
    }

    input::placeholder {
        color: rgba(255, 255, 255, 0.3);
    }

    input:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
    }

    /* Line Slip CTA */
    .slip-field {
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-8px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .line-slip-cta {
        display: block;
        padding: 1.25rem 1.5rem;
        background: rgba(6, 199, 85, 0.05);
        border: 2px solid rgba(6, 199, 85, 0.2);
        border-radius: 16px;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .line-slip-cta:hover {
        border-color: rgba(6, 199, 85, 0.5);
        background: rgba(6, 199, 85, 0.08);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(6, 199, 85, 0.15);
    }

    .line-slip-inner {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .line-icon {
        flex-shrink: 0;
    }

    .line-slip-text {
        flex: 1;
        text-align: left;
    }

    .line-slip-text p {
        color: #06C755;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.2rem;
    }

    .line-slip-text span {
        color: var(--text-muted);
        font-size: 0.8rem;
    }

    .line-arrow {
        color: #06C755;
        font-size: 1.25rem;
        font-weight: 700;
        flex-shrink: 0;
    }

    .line-slip-note {
        margin-top: 0.75rem;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.35);
        line-height: 1.5;
        text-align: left;
    }

    /* Error */
    .error {
        padding: 12px 16px;
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.3);
        border-radius: 12px;
        color: #ef4444;
        font-size: 0.875rem;
        text-align: left;
    }

    /* Submit Button */
    .submit-btn {
        position: relative;
        width: 100%;
        padding: 16px;
        font-size: 1.1rem;
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

    .privacy-note {
        margin-top: 1.5rem;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.3);
    }

    .premium-submit {
        border-color: rgba(255, 215, 0, 0.3);
    }

    .premium-submit::before {
        background: conic-gradient(transparent, transparent, var(--primary));
    }

    @media (max-width: 767px) {
        .form-card {
            padding: 2rem 1.5rem;
        }
    }

    @media (max-width: 480px) {
        .tier-selector {
            grid-template-columns: 1fr;
        }
    }
</style>
