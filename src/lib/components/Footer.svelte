<footer class="glass">
    <div class="container">
        <div class="footer-top">
            <div class="col brand">
                <a href="/" class="logo">BigLot</a>
                <p>เครื่องมือเทรดระดับมืออาชีพ สำหรับทุกคน</p>
            </div>

            <div class="col">
                <h4>Links</h4>
                <a href="#benefits">ประโยชน์</a>
                <a href="#ebooks">แพ็กเกจ</a>
                <a href="#steps">ขั้นตอน</a>
                <a href="#signup">รับ eBook</a>
            </div>

            <div class="col">
                <h4>Contact</h4>
                <a href="https://lin.ee/6k6uh0E" target="_blank" rel="noopener noreferrer">Line Official</a>
                <a href="https://t.me/biglot_community" target="_blank" rel="noopener noreferrer" class="telegram-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.667l-2.945-.916c-.64-.203-.658-.64.135-.954l11.57-4.461c.537-.194 1.006.131.964.885z"/></svg>
                    Telegram Community
                </a>
            </div>
        </div>

        <div class="risk-disclaimer">
            <p><strong>คำเตือนความเสี่ยง:</strong> การเทรด Forex และ CFDs มีความเสี่ยงสูง คุณอาจสูญเสียเงินลงทุนทั้งหมด กรุณาศึกษาข้อมูลให้ครบถ้วนก่อนตัดสินใจลงทุน เนื้อหาใน eBook นี้เป็นเพียงความรู้เพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำในการลงทุน ผลการเทรดในอดีตไม่ได้เป็นเครื่องรับประกันผลในอนาคต</p>
        </div>

        <div class="footer-bottom">
            <p>&copy; {new Date().getFullYear()} BigLot. All rights reserved.</p>
        </div>
    </div>
</footer>

<style>
    footer {
        margin-top: 5rem;
        padding-top: 5rem;
        padding-bottom: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .footer-top {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-bottom: 4rem;
    }

    .logo {
        font-size: 2rem;
        font-weight: 800;
        color: #fff;
        display: block;
        margin-bottom: 1rem;
    }

    .brand p {
        color: var(--text-muted);
        max-width: 300px;
    }

    .col h4 {
        color: #fff;
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
    }

    .col a {
        display: block;
        color: var(--text-muted);
        margin-bottom: 0.8rem;
    }

    .col a:hover {
        color: var(--primary);
    }

    .telegram-link {
        display: flex !important;
        align-items: center;
        gap: 0.4rem;
        color: #5bb5e5 !important;
    }

    .telegram-link:hover {
        color: #7ecfff !important;
    }

    .risk-disclaimer {
        padding: 1.5rem 2rem;
        margin-bottom: 2rem;
        background: rgba(239, 68, 68, 0.03);
        border: 1px solid rgba(239, 68, 68, 0.1);
        border-radius: 12px;
    }

    .risk-disclaimer p {
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.4);
        line-height: 1.8;
    }

    .risk-disclaimer strong {
        color: rgba(239, 68, 68, 0.7);
    }

    .footer-bottom {
        text-align: center;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 2rem;
        color: rgba(255, 255, 255, 0.4);
    }

    @media (min-width: 768px) {
        .footer-top {
            grid-template-columns: 2fr 1fr 1fr;
        }
    }
</style>
