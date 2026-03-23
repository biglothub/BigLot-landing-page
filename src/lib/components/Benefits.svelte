<script>
    import { reveal } from '$lib/actions/reveal';
</script>

<section id="benefits" class="benefits" use:reveal>
    <div class="container">
        <h2 class="section-title">
            ทำไมต้อง <span class="text-gold">eBook เล่มนี้?</span>
        </h2>
        <p class="section-subtitle">
            เนื้อหาที่คัดสรรมาเพื่อช่วยให้คุณเทรดได้อย่างมั่นใจ
        </p>

        <div class="cards-grid">
            <div class="card glass">
                <div class="card-glow"></div>
                <div class="card-content">
                    <div class="icon">&#128218;</div>
                    <h3>พื้นฐานที่แน่น</h3>
                    <p>เรียนรู้หลักการเทรดตั้งแต่เริ่มต้น อธิบายง่าย เข้าใจได้ทันที แม้ไม่มีประสบการณ์</p>
                </div>
            </div>

            <div class="card glass">
                <div class="card-glow"></div>
                <div class="card-content">
                    <div class="icon">&#128200;</div>
                    <h3>กลยุทธ์ที่ใช้ได้จริง</h3>
                    <p>รวมเทคนิคและกลยุทธ์ที่ผ่านการทดสอบแล้ว พร้อม case study จริง</p>
                </div>
            </div>

            <div class="card glass">
                <div class="card-glow"></div>
                <div class="card-content">
                    <div class="icon">&#128737;</div>
                    <h3>บริหารความเสี่ยง</h3>
                    <p>เรียนรู้วิธีจัดการ Risk Management อย่างเป็นระบบ ปกป้องพอร์ตของคุณ</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .benefits {
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

    .cards-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .card {
        padding: 2.5rem;
        border-radius: 24px;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, border-color 0.3s ease;
        height: 100%;
    }

    .card:hover {
        transform: translateY(-8px);
        border-color: rgba(255, 215, 0, 0.3);
    }

    .card-glow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(600px circle at 50% 50%, rgba(255, 215, 0, 0.04), transparent 40%);
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
    }

    .card:hover .card-glow {
        opacity: 1;
    }

    .card-content {
        position: relative;
        z-index: 1;
    }

    .icon {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: var(--primary);
        background: rgba(255, 215, 0, 0.1);
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #fff;
    }

    p {
        color: var(--text-muted);
        font-size: 1rem;
        line-height: 1.7;
    }

    @media (min-width: 768px) {
        .cards-grid {
            grid-template-columns: repeat(3, 1fr);
        }

        .section-title {
            font-size: 3rem;
        }
    }
</style>
