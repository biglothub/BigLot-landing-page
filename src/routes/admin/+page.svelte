<script lang="ts">
    let adminKey = $state('');
    let isAuthed = $state(false);
    let leads: any[] = $state([]);
    let loading = $state(false);
    let filter: 'pending' | 'approved' | 'all' = $state('pending');
    let actionLoading: string | null = $state(null);
    let message = $state('');
    let dbConnected = $state(true);

    async function login() {
        isAuthed = true;
        await fetchLeads();
    }

    async function fetchLeads() {
        loading = true;
        message = '';
        try {
            const res = await fetch(`/api/admin/leads?filter=${filter}&admin_key=${encodeURIComponent(adminKey)}`);
            const data = await res.json();
            if (!res.ok) {
                if (res.status === 401) {
                    message = 'รหัสผ่านไม่ถูกต้อง';
                    isAuthed = false;
                    return;
                }
                message = data.error || 'Error fetching leads';
                dbConnected = false;
                return;
            }
            dbConnected = true;
            leads = data.leads || [];
        } catch {
            dbConnected = false;
            message = '';
        } finally {
            loading = false;
        }
    }

    async function handleAction(leadId: string, action: 'approve' | 'reject') {
        actionLoading = leadId;
        message = '';
        try {
            const res = await fetch('/api/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ lead_id: leadId, action, admin_key: adminKey })
            });
            const data = await res.json();
            if (!res.ok) {
                message = data.error || 'Error';
                return;
            }
            message = data.message;
            await fetchLeads();
        } catch {
            message = 'เกิดข้อผิดพลาด';
        } finally {
            actionLoading = null;
        }
    }

    function tierLabel(tier: string) {
        if (tier === 'vip') return '👑 VIP';
        if (tier === 'premium') return '⭐ Premium';
        return 'Free';
    }

    function tierColor(tier: string) {
        if (tier === 'vip') return '#FFD700';
        if (tier === 'premium') return '#FFD700';
        return '#4ade80';
    }

    function timeAgo(dateStr: string) {
        const diff = Date.now() - new Date(dateStr).getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 60) return `${mins} นาทีที่แล้ว`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs} ชั่วโมงที่แล้ว`;
        const days = Math.floor(hrs / 24);
        return `${days} วันที่แล้ว`;
    }

    $effect(() => {
        if (isAuthed) {
            fetchLeads();
        }
    });
</script>

<svelte:head>
    <title>Admin Dashboard - BigLot</title>
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="admin">
    {#if !isAuthed}
        <div class="login-card">
            <div class="login-logo">BigLot</div>
            <h1>Admin Dashboard</h1>
            <p class="login-desc">กรอกรหัสผ่านเพื่อเข้าจัดการระบบ</p>
            <form onsubmit={(e) => { e.preventDefault(); login(); }}>
                <div class="input-group">
                    <span class="input-icon">🔑</span>
                    <input
                        type="password"
                        bind:value={adminKey}
                        placeholder="รหัสผ่าน Admin"
                        required
                    />
                </div>
                <button type="submit">เข้าสู่ระบบ</button>
            </form>
            {#if message}
                <p class="error">{message}</p>
            {/if}
        </div>
    {:else}
        <div class="dashboard">
            <div class="header">
                <h1>BigLot Admin</h1>
                <div class="header-actions">
                    <span class="status-dot" class:online={dbConnected}></span>
                    <button class="refresh-btn" onclick={fetchLeads} disabled={loading || !dbConnected}>
                        {loading ? '⏳' : '🔄'} Refresh
                    </button>
                </div>
            </div>

            {#if !dbConnected}
                <div class="setup-card">
                    <div class="setup-icon">⚙️</div>
                    <h2>ยินดีต้อนรับ Admin!</h2>
                    <p>Login สำเร็จ ✅ แต่ยังไม่ได้เชื่อมต่อ Database</p>
                    <div class="setup-steps">
                        <div class="setup-step">
                            <span class="step-num">1</span>
                            <div>
                                <strong>สร้าง Supabase Project</strong>
                                <p>ไปที่ supabase.com → New Project</p>
                            </div>
                        </div>
                        <div class="setup-step">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Run Migration SQL</strong>
                                <p>copy SQL จาก supabase/migrations/001_create_leads.sql ไปวางใน SQL Editor</p>
                            </div>
                        </div>
                        <div class="setup-step">
                            <span class="step-num">3</span>
                            <div>
                                <strong>ใส่ค่าใน .env</strong>
                                <p>PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY</p>
                            </div>
                        </div>
                        <div class="setup-step">
                            <span class="step-num">4</span>
                            <div>
                                <strong>Restart dev server</strong>
                                <p>แล้วกด Refresh</p>
                            </div>
                        </div>
                    </div>
                </div>
            {:else}
            <div class="filters">
                <button class="filter-btn" class:active={filter === 'pending'} onclick={() => { filter = 'pending'; }}>
                    ⏳ รอ Approve
                </button>
                <button class="filter-btn" class:active={filter === 'approved'} onclick={() => { filter = 'approved'; }}>
                    ✅ Approved
                </button>
                <button class="filter-btn" class:active={filter === 'all'} onclick={() => { filter = 'all'; }}>
                    📋 ทั้งหมด
                </button>
            </div>

            {#if message}
                <div class="toast">{message}</div>
            {/if}

            {#if loading}
                <p class="loading-text">กำลังโหลด...</p>
            {:else if leads.length === 0}
                <div class="empty">
                    <p>ไม่มีข้อมูล</p>
                </div>
            {:else}
                <div class="leads-list">
                    {#each leads as lead (lead.id)}
                        <div class="lead-card" class:approved={lead.approved}>
                            <div class="lead-top">
                                <span class="tier-badge" style="color: {tierColor(lead.tier)}">
                                    {tierLabel(lead.tier)}
                                </span>
                                <span class="time">{timeAgo(lead.created_at)}</span>
                            </div>

                            <div class="lead-info">
                                <div class="info-row">
                                    <span class="label">ชื่อ</span>
                                    <span class="value">{lead.name}</span>
                                </div>
                                <div class="info-row">
                                    <span class="label">Email</span>
                                    <span class="value">{lead.email}</span>
                                </div>
                                <div class="info-row">
                                    <span class="label">Account ID</span>
                                    <span class="value highlight">{lead.broker_account_id}</span>
                                </div>
                            </div>

                            <div class="lead-status">
                                {#if lead.approved}
                                    <span class="status approved-status">✅ Approved</span>
                                    {#if lead.email_sent}
                                        <span class="status sent-status">📧 Email ส่งแล้ว</span>
                                    {/if}
                                {:else}
                                    <div class="actions">
                                        <button
                                            class="btn-approve"
                                            onclick={() => handleAction(lead.id, 'approve')}
                                            disabled={actionLoading === lead.id}
                                        >
                                            {actionLoading === lead.id ? '⏳' : '✅'} Approve + ส่ง eBook
                                        </button>
                                        <button
                                            class="btn-reject"
                                            onclick={() => handleAction(lead.id, 'reject')}
                                            disabled={actionLoading === lead.id}
                                        >
                                            ❌ Reject
                                        </button>
                                    </div>
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
            {/if}
        </div>
    {/if}
</div>

<style>
    .admin {
        min-height: 100vh;
        background: #000;
        color: #fff;
        padding: 2rem 1rem;
        font-family: 'Helvetica Neue', Arial, sans-serif;
    }

    /* Login */
    .login-card {
        max-width: 420px;
        margin: 12vh auto 0;
        text-align: center;
        background: #0a0a0a;
        border: 1px solid #1a1a1a;
        border-radius: 24px;
        padding: 3rem 2.5rem;
    }

    .login-logo {
        font-size: 2rem;
        font-weight: 800;
        color: #FFD700;
        margin-bottom: 1.5rem;
        letter-spacing: -0.02em;
    }

    .login-card h1 {
        font-size: 1.35rem;
        margin-bottom: 0.5rem;
        color: #fff;
    }

    .login-desc {
        color: #666;
        font-size: 0.85rem;
        margin-bottom: 2rem;
    }

    .input-group {
        position: relative;
        margin-bottom: 1rem;
    }

    .input-icon {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1rem;
    }

    .login-card input {
        width: 100%;
        padding: 14px 16px 14px 44px;
        background: #111;
        border: 1px solid #222;
        border-radius: 12px;
        color: #fff;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.2s;
        box-sizing: border-box;
    }

    .login-card input:focus {
        border-color: #FFD700;
        box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.08);
    }

    .login-card button {
        width: 100%;
        padding: 14px;
        background: #FFD700;
        color: #000;
        font-weight: 700;
        font-size: 1rem;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s;
    }

    .login-card button:hover {
        box-shadow: 0 8px 24px rgba(255, 215, 0, 0.25);
        transform: translateY(-1px);
    }

    .error {
        color: #ef4444;
        margin-top: 1rem;
        font-size: 0.85rem;
        padding: 10px 14px;
        background: rgba(239, 68, 68, 0.08);
        border: 1px solid rgba(239, 68, 68, 0.15);
        border-radius: 8px;
    }

    /* Dashboard */
    .dashboard {
        max-width: 800px;
        margin: 0 auto;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    .header h1 {
        font-size: 1.5rem;
        color: #FFD700;
    }

    .refresh-btn {
        padding: 8px 16px;
        background: #111;
        border: 1px solid #333;
        border-radius: 8px;
        color: #fff;
        cursor: pointer;
        font-size: 0.85rem;
    }

    .refresh-btn:hover:not(:disabled) {
        border-color: #FFD700;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ef4444;
        display: inline-block;
    }

    .status-dot.online {
        background: #4ade80;
        box-shadow: 0 0 8px rgba(74, 222, 128, 0.5);
    }

    /* Setup Card */
    .setup-card {
        background: #0a0a0a;
        border: 1px solid #1a1a1a;
        border-radius: 20px;
        padding: 3rem 2rem;
        text-align: center;
    }

    .setup-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .setup-card h2 {
        font-size: 1.3rem;
        color: #FFD700;
        margin-bottom: 0.5rem;
    }

    .setup-card > p {
        color: #888;
        font-size: 0.9rem;
        margin-bottom: 2rem;
    }

    .setup-steps {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: left;
        max-width: 500px;
        margin: 0 auto;
    }

    .setup-step {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        padding: 1rem;
        background: #111;
        border: 1px solid #1a1a1a;
        border-radius: 12px;
    }

    .step-num {
        width: 28px;
        height: 28px;
        background: rgba(255, 215, 0, 0.1);
        color: #FFD700;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: 700;
        flex-shrink: 0;
    }

    .setup-step strong {
        color: #fff;
        font-size: 0.9rem;
        display: block;
        margin-bottom: 0.25rem;
    }

    .setup-step p {
        color: #666;
        font-size: 0.8rem;
        line-height: 1.4;
    }

    /* Filters */
    .filters {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .filter-btn {
        padding: 8px 16px;
        background: #111;
        border: 1px solid #222;
        border-radius: 99px;
        color: #888;
        cursor: pointer;
        font-size: 0.8rem;
        transition: all 0.2s;
    }

    .filter-btn.active {
        border-color: #FFD700;
        color: #FFD700;
        background: rgba(255, 215, 0, 0.05);
    }

    /* Toast */
    .toast {
        padding: 12px 16px;
        background: rgba(74, 222, 128, 0.1);
        border: 1px solid rgba(74, 222, 128, 0.2);
        border-radius: 8px;
        color: #4ade80;
        font-size: 0.85rem;
        margin-bottom: 1.5rem;
    }

    .loading-text {
        text-align: center;
        color: #666;
        padding: 3rem 0;
    }

    .empty {
        text-align: center;
        color: #555;
        padding: 4rem 0;
    }

    /* Lead Cards */
    .leads-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .lead-card {
        background: #0a0a0a;
        border: 1px solid #1a1a1a;
        border-radius: 16px;
        padding: 1.5rem;
        transition: border-color 0.2s;
    }

    .lead-card:hover {
        border-color: #333;
    }

    .lead-card.approved {
        opacity: 0.6;
    }

    .lead-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .tier-badge {
        font-weight: 700;
        font-size: 0.85rem;
    }

    .time {
        font-size: 0.75rem;
        color: #555;
    }

    .lead-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    .info-row {
        display: flex;
        gap: 1rem;
    }

    .info-row .label {
        color: #555;
        font-size: 0.8rem;
        min-width: 80px;
    }

    .info-row .value {
        color: #ccc;
        font-size: 0.85rem;
        word-break: break-all;
    }

    .info-row .highlight {
        color: #FFD700;
        font-weight: 600;
    }

    /* Status & Actions */
    .lead-status {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .status {
        font-size: 0.8rem;
        padding: 4px 12px;
        border-radius: 99px;
    }

    .approved-status {
        color: #4ade80;
        background: rgba(74, 222, 128, 0.1);
    }

    .sent-status {
        color: #60a5fa;
        background: rgba(96, 165, 250, 0.1);
    }

    .actions {
        display: flex;
        gap: 0.5rem;
        width: 100%;
    }

    .btn-approve {
        flex: 1;
        padding: 10px 16px;
        background: rgba(74, 222, 128, 0.1);
        border: 1px solid rgba(74, 222, 128, 0.3);
        border-radius: 10px;
        color: #4ade80;
        font-weight: 600;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .btn-approve:hover:not(:disabled) {
        background: rgba(74, 222, 128, 0.2);
        border-color: #4ade80;
    }

    .btn-reject {
        padding: 10px 16px;
        background: rgba(239, 68, 68, 0.05);
        border: 1px solid rgba(239, 68, 68, 0.2);
        border-radius: 10px;
        color: #ef4444;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .btn-reject:hover:not(:disabled) {
        background: rgba(239, 68, 68, 0.15);
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
