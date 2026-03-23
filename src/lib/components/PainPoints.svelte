<script>
    import { reveal } from '$lib/actions/reveal';
</script>

<section class="pain-points" use:reveal>
    <div class="container">
        <h2 class="section-title">
            คุณเคยเจอปัญหาเหล่านี้ไหม?
        </h2>

        <div class="pain-grid">
            <div class="pain-card glass">
                <div class="pain-icon">&#10060;</div>
                <h3>เทรดแล้วขาดทุนซ้ำๆ</h3>
                <p>ไม่มีระบบ ไม่มี SL/TP เปิดออเดอร์ตามอารมณ์ แล้วก็ล้างพอร์ตเหมือนเดิม</p>
            </div>

            <div class="pain-card glass">
                <div class="pain-icon">&#10060;</div>
                <h3>ไม่รู้จะเริ่มจากตรงไหน</h3>
                <p>ข้อมูลเยอะเกินไป ดู YouTube สอนคนละแบบ ยิ่งเรียนยิ่งสับสน</p>
            </div>

            <div class="pain-card glass">
                <div class="pain-icon">&#10060;</div>
                <h3>ไม่มีแผนการเทรดที่ชัดเจน</h3>
                <p>เทรดวันต่อวันไม่มี plan ไม่รู้ว่าเดือนนี้ควรทำกำไรเท่าไหร่ ความเสี่ยงเท่าไหร่</p>
            </div>
        </div>

        <p class="pain-solution">
            eBook ของเราออกแบบมาเพื่อ <span class="text-gold">แก้ปัญหาทั้งหมดนี้</span> ตั้งแต่พื้นฐานจนถึงแผนเทรดจริง
        </p>
    </div>
</section>

<style>
    .pain-points {
        padding: 6rem 0 3rem;
        position: relative;
    }

    .section-title {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        background: linear-gradient(135deg, #fff 30%, #aaa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .pain-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .pain-card {
        padding: 2rem;
        border-radius: 20px;
        border-color: rgba(239, 68, 68, 0.15);
        transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .pain-card:hover {
        transform: translateY(-4px);
        border-color: rgba(239, 68, 68, 0.3);
    }

    .pain-icon {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    .pain-card h3 {
        font-size: 1.25rem;
        color: #fff;
        margin-bottom: 0.75rem;
    }

    .pain-card p {
        color: var(--text-muted);
        font-size: 0.95rem;
        line-height: 1.7;
    }

    .pain-solution {
        text-align: center;
        font-size: 1.15rem;
        color: var(--text-muted);
        margin-top: 3rem;
        line-height: 1.8;
    }

    @media (min-width: 768px) {
        .pain-grid {
            grid-template-columns: repeat(3, 1fr);
        }

        .section-title {
            font-size: 3rem;
        }
    }
</style>
