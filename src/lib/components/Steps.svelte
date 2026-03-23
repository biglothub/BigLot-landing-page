<script lang="ts">
    import { env } from '$env/dynamic/public';
    import { reveal } from '$lib/actions/reveal';

    const brokerLink = env.PUBLIC_BROKER_AFFILIATE_LINK || '#signup';
</script>

<section id="steps" class="steps" use:reveal>
    <div class="container">
        <h2 class="section-title">
            <span class="text-gold">3 ขั้นตอน</span> ง่ายๆ รับ eBook ฟรี
        </h2>
        <p class="section-subtitle">
            ใช้เวลาไม่ถึง 5 นาที ก็ได้ eBook แล้ว
        </p>

        <div class="steps-grid">
            <div class="step-card">
                <div class="step-number">1</div>
                <div class="step-line"></div>
                <div class="step-content glass">
                    <h3>สมัครบัญชี Broker</h3>
                    <p>กดปุ่มด้านล่างเพื่อสมัครบัญชีผ่าน Broker พาร์ทเนอร์ของเรา</p>
                    <a href={brokerLink} target="_blank" rel="noopener noreferrer" class="step-btn">
                        สมัครเลย &rarr;
                    </a>
                </div>
            </div>

            <div class="step-card">
                <div class="step-number">2</div>
                <div class="step-line"></div>
                <div class="step-content glass">
                    <h3>กรอกข้อมูล</h3>
                    <p>กลับมากรอก Email และเลข Account ID ที่ได้จาก Broker ในฟอร์มด้านล่าง</p>
                </div>
            </div>

            <div class="step-card">
                <div class="step-number">3</div>
                <div class="step-content glass">
                    <h3>รับ eBook ทาง Email</h3>
                    <p>ระบบจะส่ง eBook ไปที่ Email ของคุณทันที พร้อม link ดาวน์โหลด</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .steps {
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

    .steps-grid {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 600px;
        margin: 0 auto;
    }

    .step-card {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
        position: relative;
    }

    .step-number {
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        background: rgba(255, 215, 0, 0.1);
        border: 2px solid var(--primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--primary);
        position: relative;
        z-index: 2;
    }

    .step-line {
        position: absolute;
        left: 23px;
        top: 48px;
        width: 2px;
        height: calc(100% + 2rem);
        background: linear-gradient(to bottom, var(--primary), transparent);
        z-index: 1;
    }

    .step-content {
        flex: 1;
        padding: 2rem;
        border-radius: 20px;
    }

    .step-content h3 {
        font-size: 1.25rem;
        color: #fff;
        margin-bottom: 0.75rem;
    }

    .step-content p {
        color: var(--text-muted);
        font-size: 0.95rem;
        line-height: 1.7;
    }

    .step-btn {
        display: inline-block;
        margin-top: 1rem;
        padding: 10px 24px;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--primary);
        background: rgba(255, 215, 0, 0.08);
        border: 1px solid rgba(255, 215, 0, 0.25);
        border-radius: 99px;
        transition: all 0.3s ease;
    }

    .step-btn:hover {
        background: rgba(255, 215, 0, 0.15);
        border-color: var(--primary);
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
    }

    @media (min-width: 768px) {
        .section-title {
            font-size: 3rem;
        }

        .steps-grid {
            max-width: 700px;
        }
    }
</style>
