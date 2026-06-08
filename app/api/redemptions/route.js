import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, pointsRedeemed, cashValue, paymentMethod, paymentHandle } = body;

    // If Airtable isn't configured yet, just return success (email still goes through)
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      console.warn('Airtable not configured — redemption not logged to tracker.');
      return NextResponse.json({ success: true, note: 'Airtable not configured' });
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Redemptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
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

    if (!response.ok) {
      const err = await response.text();
      console.error('Airtable error:', err);
      // Don't fail the user — email still went through
      return NextResponse.json({ success: true, note: 'Airtable log failed but email sent' });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, id: data.id });

  } catch (error) {
    console.error('Redemption API error:', error);
    return NextResponse.json({ success: true, note: 'Airtable unreachable but email sent' });
  }
}
