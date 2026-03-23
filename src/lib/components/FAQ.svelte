<script lang="ts">
    import { reveal } from '$lib/actions/reveal';

    const faqs = [
        {
            question: 'Broker Connext ปลอดภัยไหม?',
            answer: 'Connext เป็น Broker ที่จดทะเบียนถูกต้อง มีระบบรักษาความปลอดภัยมาตรฐานสากล รองรับ MT5 และมีทีมซัพพอร์ตภาษาไทย'
        },
        {
            question: 'ได้ eBook ภายในกี่นาที?',
            answer: 'eBook ฟรี (เล่ม 1) ส่งทันทีผ่าน Email หลังกรอกฟอร์ม สำหรับ Premium และ VIP จะส่งภายใน 24 ชั่วโมงหลังทีมงานตรวจสอบ Slip เสร็จ'
        },
        {
            question: 'ต้องมีประสบการณ์เทรดก่อนไหม?',
            answer: 'ไม่จำเป็น eBook เล่ม 1 ออกแบบมาสำหรับมือใหม่ที่ไม่เคยเทรดเลย อธิบายตั้งแต่พื้นฐานจนเปิดออเดอร์แรกได้'
        },
        {
            question: 'Deposit แล้วถอนเงินได้ไหม?',
            answer: 'ได้ เงิน Deposit เป็นเงินในบัญชีเทรดของคุณ สามารถเทรดหรือถอนออกได้ตามปกติ ไม่ใช่ค่าธรรมเนียม'
        },
        {
            question: 'Discord VIP ต้องจ่ายรายเดือนไหม?',
            answer: 'ไม่ต้อง Deposit $500 ครั้งเดียวก็ได้เป็นสมาชิก Discord VIP ตลอดชีพ ไม่มีค่าใช้จ่ายเพิ่มเติม'
        },
        {
            question: 'ถ้ามีปัญหาติดต่อได้ที่ไหน?',
            answer: 'แอดไลน์ @BigLot ได้เลย ทีมงานพร้อมตอบทุกคำถาม หรือแชทในห้อง Discord สำหรับสมาชิก VIP'
        }
    ];

    let openIndex = $state(-1);

    function toggle(index: number) {
        openIndex = openIndex === index ? -1 : index;
    }
</script>

<section id="faq" class="faq" use:reveal>
    <div class="container">
        <h2 class="section-title">
            คำถาม <span class="text-gold">ที่พบบ่อย</span>
        </h2>

        <div class="faq-list">
            {#each faqs as faq, i}
                <div class="faq-item glass" class:open={openIndex === i}>
                    <button class="faq-question" onclick={() => toggle(i)}>
                        <span>{faq.question}</span>
                        <span class="faq-icon">{openIndex === i ? '−' : '+'}</span>
                    </button>
                    {#if openIndex === i}
                        <div class="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .faq {
        padding: 6rem 0;
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

    .section-title :global(.text-gold) {
        -webkit-text-fill-color: var(--primary);
        text-shadow: 0 0 20px var(--primary-glow);
    }

    .faq-list {
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .faq-item {
        border-radius: 16px;
        overflow: hidden;
        transition: border-color 0.3s ease;
    }

    .faq-item.open {
        border-color: rgba(255, 215, 0, 0.2);
    }

    .faq-question {
        width: 100%;
        padding: 1.25rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        background: transparent;
        border: none;
        cursor: pointer;
        text-align: left;
        font-family: var(--font-main);
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        transition: color 0.3s ease;
    }

    .faq-question:hover {
        color: var(--primary);
    }

    .faq-icon {
        flex-shrink: 0;
        font-size: 1.5rem;
        color: var(--primary);
        font-weight: 300;
    }

    .faq-answer {
        padding: 0 1.5rem 1.25rem;
        animation: fadeIn 0.3s ease;
    }

    .faq-answer p {
        color: var(--text-muted);
        font-size: 0.925rem;
        line-height: 1.8;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media (min-width: 768px) {
        .section-title {
            font-size: 3rem;
        }
    }
</style>
