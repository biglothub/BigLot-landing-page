<script>
    import { reveal } from '$lib/actions/reveal';
</script>

<section class="comparison" use:reveal>
    <div class="container">
        <h2 class="section-title">
            เปรียบเทียบ <span class="text-gold">แพ็กเกจ</span>
        </h2>
        <p class="section-subtitle">
            ดูความแตกต่างแต่ละระดับ เลือกให้ตรงกับเป้าหมายของคุณ
        </p>

        <div class="table-wrapper glass">
            <div class="table-scroll">
                <table class="compare-table">
                    <thead>
                        <tr>
                            <th class="feature-col">สิ่งที่ได้รับ</th>
                            <th class="tier-col"><span class="tier-header free-header">FREE</span></th>
                            <th class="tier-col"><span class="tier-header premium-header">PREMIUM</span></th>
                            <th class="tier-col vip-col"><span class="tier-header vip-header">VIP</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="feature-col">eBook เล่ม 1 (พื้นฐาน)</td>
                            <td class="check">&check;</td>
                            <td class="check gold">&check;</td>
                            <td class="check gold">&check;</td>
                        </tr>
                        <tr>
                            <td class="feature-col">eBook เล่ม 2 (Trade Decoder)</td>
                            <td class="cross">&cross;</td>
                            <td class="check gold">&check;</td>
                            <td class="check gold">&check;</td>
                        </tr>
                        <tr>
                            <td class="feature-col">Technical & Fundamental Analysis</td>
                            <td class="cross">&cross;</td>
                            <td class="check gold">&check;</td>
                            <td class="check gold">&check;</td>
                        </tr>
                        <tr>
                            <td class="feature-col">Money Management แบบ Pro</td>
                            <td class="cross">&cross;</td>
                            <td class="check gold">&check;</td>
                            <td class="check gold">&check;</td>
                        </tr>
                        <tr>
                            <td class="feature-col">Case Study + แผน 90 วัน</td>
                            <td class="cross">&cross;</td>
                            <td class="check gold">&check;</td>
                            <td class="check gold">&check;</td>
                        </tr>
                        <tr>
                            <td class="feature-col">Discord VIP ตลอดชีพ</td>
                            <td class="cross">&cross;</td>
                            <td class="cross">&cross;</td>
                            <td class="check gold">&check;</td>
                        </tr>
                        <tr>
                            <td class="feature-col">Gold Signal & XAUUSD Zone</td>
                            <td class="cross">&cross;</td>
                            <td class="cross">&cross;</td>
                            <td class="check gold">&check;</td>
                        </tr>
                        <tr>
                            <td class="feature-col">Live Trade & Zoom Live Trade</td>
                            <td class="cross">&cross;</td>
                            <td class="cross">&cross;</td>
                            <td class="check gold">&check;</td>
                        </tr>
                        <tr>
                            <td class="feature-col">Special Class & News Update</td>
                            <td class="cross">&cross;</td>
                            <td class="cross">&cross;</td>
                            <td class="check gold">&check;</td>
                        </tr>
                        <tr class="condition-row">
                            <td class="feature-col">เงื่อนไข</td>
                            <td>สมัคร Broker</td>
                            <td class="gold">Deposit $100</td>
                            <td class="gold">Deposit $500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-cta">
            <a href="#signup" class="choose-btn">เลือกแพ็กเกจ &darr;</a>
        </div>
    </div>
</section>

<style>
    .comparison {
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
        margin-bottom: 3rem;
    }

    .table-wrapper {
        border-radius: 24px;
        overflow: hidden;
        max-width: 900px;
        margin: 0 auto;
    }

    .table-scroll {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .compare-table {
        width: 100%;
        border-collapse: collapse;
        min-width: 500px;
    }

    thead {
        background: rgba(255, 255, 255, 0.03);
    }

    th, td {
        padding: 1rem 1.25rem;
        text-align: center;
        font-size: 0.9rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .feature-col {
        text-align: left;
        color: rgba(255, 255, 255, 0.85);
        font-weight: 500;
        min-width: 180px;
    }

    thead .feature-col {
        color: var(--text-muted);
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.05em;
    }

    .tier-col {
        min-width: 90px;
    }

    .tier-header {
        display: inline-block;
        padding: 4px 14px;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        border-radius: 99px;
    }

    .free-header {
        color: #4ade80;
        background: rgba(74, 222, 128, 0.1);
        border: 1px solid rgba(74, 222, 128, 0.2);
    }

    .premium-header {
        color: var(--primary);
        background: rgba(255, 215, 0, 0.1);
        border: 1px solid rgba(255, 215, 0, 0.3);
    }

    .vip-header {
        color: #000;
        background: var(--primary);
        border: 1px solid var(--primary);
        padding: 5px 18px;
    }

    .vip-col {
        background: rgba(255, 215, 0, 0.03);
    }

    tbody tr:nth-child(even) {
        background: rgba(255, 255, 255, 0.02);
    }

    .check {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.3);
    }

    .check.gold {
        color: var(--primary);
        text-shadow: 0 0 8px var(--primary-glow);
    }

    .cross {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.15);
    }

    .gold {
        color: var(--primary);
    }

    .condition-row {
        border-top: 1px solid rgba(255, 215, 0, 0.15);
    }

    .condition-row td {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-muted);
        padding: 1.25rem 1.25rem;
    }

    .condition-row .feature-col {
        color: var(--text-muted);
        font-weight: 700;
        letter-spacing: 0.05em;
    }

    .table-cta {
        text-align: center;
        margin-top: 2rem;
    }

    .choose-btn {
        display: inline-block;
        padding: 12px 32px;
        font-size: 1rem;
        font-weight: 600;
        color: var(--primary);
        background: rgba(255, 215, 0, 0.08);
        border: 1px solid rgba(255, 215, 0, 0.25);
        border-radius: 99px;
        transition: all 0.3s ease;
    }

    .choose-btn:hover {
        background: rgba(255, 215, 0, 0.15);
        border-color: var(--primary);
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
        transform: translateY(-2px);
    }

    @media (min-width: 768px) {
        .section-title {
            font-size: 3rem;
        }

        th, td {
            padding: 1rem 1.5rem;
        }
    }
</style>
