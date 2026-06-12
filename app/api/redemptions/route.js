import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, pointsRedeemed, cashValue, paymentMethod, paymentHandle } = body;

    const results = { airtable: false, email: false };

    // 1. Log to Airtable
    const AIRTABLE_KEY  = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE = process.env.AIRTABLE_BASE_ID;

    if (AIRTABLE_KEY && AIRTABLE_BASE) {
      try {
        const atRes = await fetch(
          `https://api.airtable.com/v0/${AIRTABLE_BASE}/Redemptions`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${AIRTABLE_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fields: {
                'Name':            name || 'Unknown',
                'Email':           email || '',
                'Points Redeemed': pointsRedeemed,
                'Cash Value':      cashValue,
                'Payment Method':  paymentMethod,
                'Payment Handle':  paymentHandle,
                'Requested Date':  new Date().toISOString().split('T')[0],
                'Status':          'Pending',
              }
            })
          }
        );
        results.airtable = atRes.ok;
        if (!atRes.ok) console.warn('Airtable redemption error:', await atRes.text());
      } catch (err) {
        console.warn('Airtable fetch failed:', err.message);
      }
    }

    // 2. Send email notification via EmailJS
    const EJ_SERVICE  = process.env.EMAILJS_SERVICE_ID;
    const EJ_TEMPLATE = process.env.EMAILJS_TEMPLATE_ID;
    const EJ_PUBLIC   = process.env.EMAILJS_PUBLIC_KEY;
    const EJ_PRIVATE  = process.env.EMAILJS_PRIVATE_KEY;

    if (EJ_SERVICE && EJ_TEMPLATE && EJ_PUBLIC) {
      try {
        const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id:  EJ_SERVICE,
            template_id: EJ_TEMPLATE,
            user_id:     EJ_PUBLIC,
            ...(EJ_PRIVATE && { accessToken: EJ_PRIVATE }),
            template_params: {
              to_email:     'workhomebalancellc@gmail.com',
              from_name:    name || 'Unknown',
              from_email:   email || '',
              phone:        'N/A',
              destination:  `Redemption Request — ${Number(pointsRedeemed).toLocaleString()} pts ($${cashValue})`,
              travelers:    paymentMethod,
              budget:       `$${cashValue}`,
              travel_from:  paymentHandle,
              travel_to:    'N/A',
              cabin:        'N/A',
              notes:        `Rewards redemption request:\n\nAccount: ${email}\nName: ${name}\nPoints to redeem: ${Number(pointsRedeemed).toLocaleString()}\nCash value: $${cashValue}\nPayment method: ${paymentMethod}\nSend to: ${paymentHandle}\n\nPlease process within 2 business days.`,
              submitted_at: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }) + ' EST',
            },
          }),
        });
        results.email = emailRes.ok;
        if (!emailRes.ok) console.warn('EmailJS redemption error:', await emailRes.text());
      } catch (err) {
        console.warn('EmailJS fetch failed:', err.message);
      }
    }

    return NextResponse.json({ success: true, ...results });

  } catch (error) {
    console.error('Redemption API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
