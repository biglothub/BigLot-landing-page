import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import {
    EMAIL_PROVIDER,
    RESEND_API_KEY,
    RESEND_FROM_EMAIL,
    GMAIL_USER,
    GMAIL_APP_PASSWORD,
    EBOOK_FREE_DOWNLOAD_URL,
    EBOOK_PREMIUM_DOWNLOAD_URL,
    ADMIN_EMAIL,
    DISCORD_INVITE_URL
} from '$env/static/private';

// --- Providers ---

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const gmailTransporter = (GMAIL_USER && GMAIL_APP_PASSWORD)
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    })
    : null;

async function sendEmail({ from, to, subject, html }: { from: string; to: string; subject: string; html: string }) {
    if (EMAIL_PROVIDER === 'gmail') {
        if (!gmailTransporter) throw new Error('Gmail is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.');
        await gmailTransporter.sendMail({ from, to, subject, html });
    } else {
        if (!resend) throw new Error('Resend is not configured. Set RESEND_API_KEY.');
        await resend.emails.send({ from, to, subject, html });
    }
}

function getFromEmail(label = 'BigLot'): string {
    if (EMAIL_PROVIDER === 'gmail') {
        return `${label} <${GMAIL_USER}>`;
    }
    return RESEND_FROM_EMAIL;
}

// --- Helpers ---

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// --- Public API ---

export async function sendEbookEmail(name: string, email: string, tier: 'free' | 'premium' | 'vip') {
    const freeUrl = EBOOK_FREE_DOWNLOAD_URL;
    const premiumUrl = EBOOK_PREMIUM_DOWNLOAD_URL;
    const discordInvite = DISCORD_INVITE_URL;

    const ebookName = tier === 'vip'
        ? 'VIP Membership - eBook ทั้ง 2 เล่ม + Discord'
        : tier === 'premium'
            ? 'TRADE DECODER (Premium)'
            : '7 วัน จาก 0 ถึงเทรดจริง';

    const downloadUrl = tier === 'free' ? freeUrl : premiumUrl;

    const vipBothBooks = tier === 'vip' ? `
                    <table cellpadding="0" cellspacing="0" width="100%" style="margin-top:16px;">
                        <tr><td align="center">
                            <a href="${freeUrl}" style="display:inline-block; padding:12px 36px; background-color:rgba(255,255,255,0.1); color:#FFD700; font-size:14px; font-weight:600; text-decoration:none; border-radius:99px; border:1px solid rgba(255,215,0,0.3);">
                                ดาวน์โหลด eBook เล่ม 1 (ฟรี)
                            </a>
                        </td></tr>
                    </table>` : '';

    const discordSection = (tier === 'vip' && discordInvite) ? `
                    <table cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px;">
                        <tr><td style="padding:20px; background:#1a1a1a; border-radius:12px; border:1px solid rgba(88,101,242,0.3);">
                            <p style="color:#7289da; font-size:14px; font-weight:700; margin:0 0 12px; text-align:center;">
                                Discord VIP Membership
                            </p>
                            <p style="color:rgba(255,255,255,0.6); font-size:14px; line-height:1.6; margin:0 0 16px; text-align:center;">
                                กดปุ่มด้านล่างเพื่อเข้า Discord VIP
                            </p>
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tr><td align="center">
                                    <a href="${discordInvite}" style="display:inline-block; padding:14px 40px; background-color:#5865F2; color:#ffffff; font-size:15px; font-weight:700; text-decoration:none; border-radius:99px;">
                                        เข้า Discord VIP
                                    </a>
                                </td></tr>
                            </table>
                        </td></tr>
                    </table>` : '';

    const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:0; background-color:#000000; font-family:'Helvetica Neue',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000; padding:40px 20px;">
        <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a; border:1px solid rgba(255,255,255,0.1); border-radius:16px; overflow:hidden;">
                <tr><td style="padding:40px 40px 20px; text-align:center;">
                    <h1 style="color:#FFD700; font-size:28px; margin:0; font-weight:800;">BigLot</h1>
                </td></tr>
                <tr><td style="padding:20px 40px;">
                    <h2 style="color:#ffffff; font-size:24px; margin:0 0 16px;">สวัสดีคุณ ${escapeHtml(name)}!</h2>
                    <p style="color:rgba(255,255,255,0.7); font-size:16px; line-height:1.7; margin:0 0 8px;">
                        ${tier !== 'free'
                            ? 'ทีมงานได้ตรวจสอบ Slip ของคุณเรียบร้อยแล้ว!'
                            : 'ขอบคุณที่สมัคร Broker ผ่านเรา!'}
                    </p>
                    <p style="color:rgba(255,255,255,0.7); font-size:16px; line-height:1.7; margin:0 0 24px;">
                        <strong style="color:#FFD700;">${ebookName}</strong> พร้อมดาวน์โหลดแล้ว
                    </p>
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr><td align="center" style="padding:16px 0;">
                            <a href="${downloadUrl}" style="display:inline-block; padding:16px 48px; background-color:#FFD700; color:#000000; font-size:16px; font-weight:700; text-decoration:none; border-radius:99px;">
                                ดาวน์โหลด eBook${tier === 'vip' ? ' เล่ม 2 (Premium)' : ''}
                            </a>
                        </td></tr>
                    </table>
                    ${vipBothBooks}
                    ${discordSection}
                    <p style="color:rgba(255,255,255,0.4); font-size:14px; line-height:1.6; margin:24px 0 0; text-align:center;">
                        หากปุ่มไม่ทำงาน ใช้ link นี้:<br/>
                        <a href="${downloadUrl}" style="color:#FFD700; text-decoration:underline;">${downloadUrl}</a>
                        ${tier === 'vip' ? `<br/><a href="${freeUrl}" style="color:#FFD700; text-decoration:underline;">${freeUrl}</a>` : ''}
                        ${tier === 'vip' && discordInvite ? `<br/><a href="${discordInvite}" style="color:#5865F2; text-decoration:underline;">${discordInvite}</a>` : ''}
                    </p>
                </td></tr>
                <tr><td style="padding:30px 40px; border-top:1px solid rgba(255,255,255,0.05); text-align:center;">
                    <p style="color:rgba(255,255,255,0.3); font-size:12px; margin:0;">
                        &copy; ${new Date().getFullYear()} BigLot. All rights reserved.
                    </p>
                </td></tr>
            </table>
        </td></tr>
    </table>
</body>
</html>`;

    await sendEmail({
        from: getFromEmail(),
        to: email,
        subject: `${ebookName} - พร้อมดาวน์โหลดแล้ว!`,
        html: htmlContent,
    });
}

export async function sendIndicatorConfirmation(
    name: string,
    email: string,
    tvUsername: string,
    lineOaUrl: string
) {
    const safeName = escapeHtml(name);
    const safeTvUsername = escapeHtml(tvUsername);

    const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:0; background-color:#000000; font-family:'Helvetica Neue',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000; padding:40px 20px;">
        <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a; border:1px solid rgba(255,255,255,0.1); border-radius:16px; overflow:hidden;">
                <tr><td style="padding:40px 40px 20px; text-align:center;">
                    <h1 style="color:#FFD700; font-size:28px; margin:0; font-weight:800;">BigLot</h1>
                    <p style="color:rgba(255,255,255,0.4); font-size:13px; margin:8px 0 0;">TradingView Indicator</p>
                </td></tr>
                <tr><td style="padding:20px 40px;">
                    <h2 style="color:#ffffff; font-size:22px; margin:0 0 16px;">สวัสดีคุณ ${safeName}!</h2>
                    <p style="color:rgba(255,255,255,0.7); font-size:16px; line-height:1.7; margin:0 0 8px;">
                        เราได้รับคำขอของคุณแล้ว ทีมงานจะเพิ่ม Access ให้ภายใน <strong style="color:#FFD700;">24 ชั่วโมง</strong>
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;">
                        <tr><td style="padding:16px 20px; background:#1a1a1a; border-radius:12px; border:1px solid rgba(255,215,0,0.2);">
                            <p style="color:rgba(255,255,255,0.5); font-size:13px; margin:0 0 6px;">TradingView Username ของคุณ</p>
                            <p style="color:#FFD700; font-size:18px; font-weight:700; margin:0; letter-spacing:0.5px;">${safeTvUsername}</p>
                        </td></tr>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;">
                        <tr><td style="padding:20px; background:#111; border-radius:12px; border:1px solid rgba(255,255,255,0.08);">
                            <p style="color:rgba(255,255,255,0.6); font-size:14px; font-weight:600; margin:0 0 12px;">ขั้นตอนถัดไป:</p>
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="color:#FFD700; font-size:14px; font-weight:700; width:28px; padding-bottom:10px; vertical-align:top;">1.</td>
                                    <td style="color:rgba(255,255,255,0.7); font-size:14px; line-height:1.6; padding-bottom:10px;">รอทีมงานเพิ่ม Access ภายใน 24 ชั่วโมง</td>
                                </tr>
                                <tr>
                                    <td style="color:#FFD700; font-size:14px; font-weight:700; width:28px; padding-bottom:10px; vertical-align:top;">2.</td>
                                    <td style="color:rgba(255,255,255,0.7); font-size:14px; line-height:1.6; padding-bottom:10px;">เข้า TradingView → Indicators → Invite-only scripts → หา BigLot Indicator</td>
                                </tr>
                                <tr>
                                    <td style="color:#FFD700; font-size:14px; font-weight:700; width:28px; vertical-align:top;">3.</td>
                                    <td style="color:rgba(255,255,255,0.7); font-size:14px; line-height:1.6;">หากไม่ได้รับภายใน 24 ชม. ติดต่อทีมงานผ่าน Line ได้เลย</td>
                                </tr>
                            </table>
                        </td></tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px;">
                        <tr><td align="center">
                            <a href="${lineOaUrl}" style="display:inline-block; padding:14px 40px; background-color:#06C755; color:#ffffff; font-size:15px; font-weight:700; text-decoration:none; border-radius:99px;">
                                แอดไลน์ @BigLot
                            </a>
                        </td></tr>
                    </table>
                    <p style="color:rgba(255,255,255,0.3); font-size:13px; line-height:1.6; margin:20px 0 0; text-align:center;">
                        มีคำถามหรือปัญหา ติดต่อทีมงานผ่าน Line ได้เลย
                    </p>
                </td></tr>
                <tr><td style="padding:30px 40px; border-top:1px solid rgba(255,255,255,0.05); text-align:center;">
                    <p style="color:rgba(255,255,255,0.3); font-size:12px; margin:0;">
                        &copy; ${new Date().getFullYear()} BigLot. All rights reserved.
                    </p>
                </td></tr>
            </table>
        </td></tr>
    </table>
</body>
</html>`;

    await sendEmail({
        from: getFromEmail(),
        to: email,
        subject: `ขอบคุณ! ทีมงานจะเพิ่ม TradingView Access ให้ภายใน 24 ชม.`,
        html: htmlContent,
    });
}

export async function sendIndicatorAdminNotification(
    name: string,
    email: string,
    tvUsername: string
) {
    const adminEmail = ADMIN_EMAIL;
    if (!adminEmail) return;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0; padding:0; background-color:#000000; font-family:'Helvetica Neue',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000; padding:40px 20px;">
        <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a; border:1px solid rgba(255,255,255,0.1); border-radius:16px; overflow:hidden;">
                <tr><td style="padding:40px 40px 20px; text-align:center;">
                    <h1 style="color:#FFD700; font-size:24px; margin:0;">Indicator Request</h1>
                    <p style="color:rgba(255,255,255,0.4); font-size:13px; margin:8px 0 0;">เพิ่ม TradingView Access</p>
                </td></tr>
                <tr><td style="padding:20px 40px;">
                    <table width="100%" cellpadding="8" style="font-size:14px;">
                        <tr>
                            <td style="color:rgba(255,255,255,0.5); width:120px;">ชื่อ:</td>
                            <td style="color:#fff; font-weight:600;">${escapeHtml(name)}</td>
                        </tr>
                        <tr>
                            <td style="color:rgba(255,255,255,0.5);">Email:</td>
                            <td style="color:#fff;">${escapeHtml(email)}</td>
                        </tr>
                        <tr>
                            <td style="color:rgba(255,255,255,0.5);">TV Username:</td>
                            <td style="color:#FFD700; font-weight:700; font-size:16px;">${escapeHtml(tvUsername)}</td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px;">
                        <tr><td style="padding:16px 20px; background:#1a1a1a; border-radius:12px; border-left:3px solid #FFD700;">
                            <p style="color:rgba(255,255,255,0.6); font-size:13px; margin:0; line-height:1.6;">
                                ไปที่ TradingView → Pine Script ของคุณ → Manage Access แล้วเพิ่ม username ด้านบน<br/>
                                จากนั้นกด "Mark as Granted" ใน Admin Dashboard
                            </p>
                        </td></tr>
                    </table>
                </td></tr>
            </table>
        </td></tr>
    </table>
</body>
</html>`;

    await sendEmail({
        from: getFromEmail('BigLot System'),
        to: adminEmail,
        subject: `[Indicator Request] ${escapeHtml(name)} - เพิ่ม TradingView Access`,
        html: htmlContent,
    });
}

export async function sendAdminNotification(
    name: string,
    email: string,
    brokerAccountId: string,
    slipUrl: string | null,
    tier: 'premium' | 'vip'
) {
    const adminEmail = ADMIN_EMAIL;
    if (!adminEmail) return;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0; padding:0; background-color:#000000; font-family:'Helvetica Neue',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000; padding:40px 20px;">
        <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a; border:1px solid rgba(255,255,255,0.1); border-radius:16px; overflow:hidden;">
                <tr><td style="padding:40px 40px 20px; text-align:center;">
                    <h1 style="color:#FFD700; font-size:24px; margin:0;">${tier === 'vip' ? 'VIP Membership' : 'Premium eBook'} Request</h1>
                </td></tr>
                <tr><td style="padding:20px 40px;">
                    <table width="100%" cellpadding="8" style="font-size:14px;">
                        <tr>
                            <td style="color:rgba(255,255,255,0.5); width:120px;">ชื่อ:</td>
                            <td style="color:#fff; font-weight:600;">${escapeHtml(name)}</td>
                        </tr>
                        <tr>
                            <td style="color:rgba(255,255,255,0.5);">Email:</td>
                            <td style="color:#fff;">${escapeHtml(email)}</td>
                        </tr>
                        <tr>
                            <td style="color:rgba(255,255,255,0.5);">Account ID:</td>
                            <td style="color:#FFD700; font-weight:600;">${escapeHtml(brokerAccountId)}</td>
                        </tr>
                        <tr>
                            <td style="color:rgba(255,255,255,0.5);">Tier:</td>
                            <td style="color:#FFD700; font-weight:600;">${tier.toUpperCase()}</td>
                        </tr>
                    </table>
                    ${slipUrl ? `
                    <div style="margin-top:20px; text-align:center;">
                        <p style="color:rgba(255,255,255,0.5); font-size:12px; margin-bottom:12px;">Slip:</p>
                        <img src="${slipUrl}" alt="Deposit Slip" style="max-width:100%; border-radius:8px; border:1px solid rgba(255,255,255,0.1);" />
                    </div>
                    ` : ''}
                    <table cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px;">
                        <tr><td align="center">
                            <p style="color:rgba(255,255,255,0.4); font-size:13px; margin-bottom:12px;">
                                Slip จะถูกส่งมาทาง Line — ตรวจสอบแล้ว approve ที่ Admin Dashboard
                            </p>
                        </td></tr>
                    </table>
                </td></tr>
            </table>
        </td></tr>
    </table>
</body>
</html>`;

    await sendEmail({
        from: getFromEmail('BigLot System'),
        to: adminEmail,
        subject: `[${tier.toUpperCase()} Request] ${escapeHtml(name)} - รอตรวจสอบ Slip (${tier === 'vip' ? '$500' : '$100'})`,
        html: htmlContent,
    });
}
