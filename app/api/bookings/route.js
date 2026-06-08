import { NextResponse } from 'next/server';

// POST — owner manually logs an agent booking
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name, email, bookingSource, productType, destination,
      bookingAmount, commissionEarned, pointsAwarded,
      pointsStatus, travelDate, notes
    } = body;

    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      return NextResponse.json({ error: 'Airtable not configured' }, { status: 500 });
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Bookings`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'Name':              name || '',
            'Email':             email || '',
            'Booking Source':    bookingSource || 'Agent',
            'Product Type':      productType || '',
            'Destination':       destination || '',
            'Booking Amount':    bookingAmount || 0,
            'Commission Earned': commissionEarned || 0,
            'Points Awarded':    pointsAwarded || 0,
            'Points Status':     pointsStatus || 'Pending',
            'Travel Date':       travelDate || '',
            'Booked Date':       new Date().toISOString().split('T')[0],
            'Notes':             notes || '',
          }
        })
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error('Airtable booking error:', err);
      return NextResponse.json({ error: 'Failed to log booking' }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, id: data.id });

  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// GET — fetch all bookings (for future admin dashboard)
export async function GET() {
  try {
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      return NextResponse.json({ error: 'Airtable not configured' }, { status: 500 });
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Bookings?sort[0][field]=Booked%20Date&sort[0][direction]=desc`,
      {
        headers: { 'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}` }
      }
    );

    const data = await response.json();
    return NextResponse.json({ records: data.records || [] });

  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
