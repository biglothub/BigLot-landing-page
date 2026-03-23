<script>
    import { reveal } from '$lib/actions/reveal';
</script>

<section id="ebook-preview" class="ebook-preview" use:reveal>
    <div class="container">
        <h2 class="section-title">
            เนื้อหาภายใน <span class="text-gold">eBook</span>
        </h2>
        <p class="section-subtitle">
            เรียนรู้ตั้งแต่พื้นฐานจนถึงแผนเทรดจริง ครบจบในเล่มเดียว
        </p>

        <div class="preview-grid">
            <!-- Free eBook TOC -->
            <div class="toc-card glass">
                <div class="toc-badge free">FREE</div>
                <h3>7 วัน จาก 0 ถึงเทรดจริง</h3>
                <p class="toc-desc">สำหรับมือใหม่ที่ยังไม่เคยเทรด</p>
                <ul class="toc-list">
                    <li>
                        <span class="chapter-num">01</span>
                        <span>ทำความรู้จัก XAUUSD & ตลาด Forex</span>
                    </li>
                    <li>
                        <span class="chapter-num">02</span>
                        <span>เปิดบัญชี Connext & ติดตั้ง MT5</span>
                    </li>
                    <li>
                        <span class="chapter-num">03</span>
                        <span>อ่านกราฟเบื้องต้น & Candlestick</span>
                    </li>
                    <li>
                        <span class="chapter-num">04</span>
                        <span>Lot Size คืออะไร? คำนวณยังไง?</span>
                    </li>
                    <li>
                        <span class="chapter-num">05</span>
                        <span>ตั้ง SL/TP & กฎ 2% ป้องกันล้างพอร์ต</span>
                    </li>
                    <li>
                        <span class="chapter-num">06</span>
                        <span>เปิดออเดอร์แรกของคุณ (Demo)</span>
                    </li>
                    <li>
                        <span class="chapter-num">07</span>
                        <span>Checklist ก่อนเทรดจริงทุกวัน</span>
                    </li>
                </ul>
            </div>

            <!-- Premium eBook TOC -->
            <div class="toc-card glass premium-card">
                <div class="toc-glow"></div>
                <div class="toc-badge premium">PREMIUM</div>
                <h3>TRADE DECODER</h3>
                <p class="toc-desc">สำหรับคนที่พร้อมเทรดจริงจัง</p>
                <ul class="toc-list">
                    <li>
                        <span class="chapter-num gold">01</span>
                        <span>เข้าใจโครงสร้างตลาด Forex ระดับลึก</span>
                    </li>
                    <li>
                        <span class="chapter-num gold">02</span>
                        <span>Technical Analysis: Support, Resistance & Trendlines</span>
                    </li>
                    <li>
                        <span class="chapter-num gold">03</span>
                        <span>Indicator ที่ Pro ใช้จริง (RSI, MACD, EMA)</span>
                    </li>
                    <li>
                        <span class="chapter-num gold">04</span>
                        <span>Fundamental Analysis & ข่าวที่กระทบราคา</span>
                    </li>
                    <li>
                        <span class="chapter-num gold">05</span>
                        <span>Money Management แบบมืออาชีพ</span>
                    </li>
                    <li>
                        <span class="chapter-num gold">06</span>
                        <span>สร้างระบบเทรดของคุณเอง</span>
                    </li>
                    <li>
                        <span class="chapter-num gold">07</span>
                        <span>Case Study: การเทรดจริง 5 สถานการณ์</span>
                    </li>
                    <li>
                        <span class="chapter-num gold">08</span>
                        <span>Trading Psychology & วิธีควบคุมอารมณ์</span>
                    </li>
                    <li>
                        <span class="chapter-num gold">09</span>
                        <span>Trading Journal: บันทึกเพื่อพัฒนา</span>
                    </li>
                    <li>
                        <span class="chapter-num gold">10</span>
                        <span>แผน 90 วัน: จาก Demo สู่ Real Account</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="sample-gallery">
            <p class="gallery-label">ตัวอย่างเนื้อหาจริงใน eBook</p>
            <div class="gallery-row">
                <div class="gallery-item glass">
                    <img src="/images/preview-sessions.png"
                         alt="เทียบเวลา Forex Sessions กับเวลาไทย"
                         loading="lazy" />
                    <p class="gallery-caption">เทียบเวลา Forex Sessions กับเวลาไทย</p>
                </div>
                <div class="gallery-item glass">
                    <img src="/images/preview-supply-demand.webp"
                         alt="Supply & Demand Zone"
                         loading="lazy" />
                    <p class="gallery-caption">Supply & Demand Zone Analysis</p>
                </div>
                <div class="gallery-item glass">
                    <img src="/images/preview-currencies.jpg"
                         alt="8 Major Currency Pairs"
                         loading="lazy" />
                    <p class="gallery-caption">8 Major Currency Pairs</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .ebook-preview {
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

    .preview-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .toc-card {
        padding: 2.5rem;
        border-radius: 24px;
        position: relative;
        overflow: hidden;
    }

    .premium-card {
        border-color: rgba(255, 215, 0, 0.2);
    }

    .toc-glow {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.03), transparent 50%);
        pointer-events: none;
    }

    .toc-badge {
        display: inline-block;
        padding: 4px 16px;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        border-radius: 99px;
        margin-bottom: 1rem;
    }

    .toc-badge.free {
        color: #4ade80;
        background: rgba(74, 222, 128, 0.1);
        border: 1px solid rgba(74, 222, 128, 0.2);
    }

    .toc-badge.premium {
        color: var(--primary);
        background: rgba(255, 215, 0, 0.1);
        border: 1px solid rgba(255, 215, 0, 0.3);
    }

    .toc-card h3 {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 0.5rem;
    }

    .toc-desc {
        color: var(--text-muted);
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    }

    .toc-list {
        list-style: none;
        padding: 0;
    }

    .toc-list li {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.75);
        font-size: 0.925rem;
        line-height: 1.5;
    }

    .toc-list li:last-child {
        border-bottom: none;
    }

    .chapter-num {
        font-size: 0.75rem;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.3);
        flex-shrink: 0;
        width: 24px;
        font-family: monospace;
    }

    .chapter-num.gold {
        color: var(--primary);
    }

    /* Sample Gallery */
    .sample-gallery {
        margin-top: 3rem;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
    }

    .gallery-label {
        text-align: center;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--text-muted);
        margin-bottom: 1.25rem;
    }

    .gallery-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(200px, 1fr));
        gap: 1rem;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .gallery-item {
        border-radius: 16px;
        overflow: hidden;
        transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .gallery-item:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 215, 0, 0.25);
    }

    .gallery-item img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        display: block;
    }

    .gallery-caption {
        padding: 0.6rem 1rem;
        font-size: 0.75rem;
        color: var(--text-muted);
        text-align: center;
    }

    @media (min-width: 768px) {
        .preview-grid {
            grid-template-columns: repeat(2, 1fr);
            align-items: start;
        }

        .section-title {
            font-size: 3rem;
        }

        .gallery-row {
            grid-template-columns: repeat(3, 1fr);
            overflow-x: unset;
        }
    }
</style>
