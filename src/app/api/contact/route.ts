import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, package: selectedPackage, area, cost } = data;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required.' },
        { status: 400 }
      );
    }

    // In a production environment, this can be piped to an email service (Resend, SendGrid)
    // or a webhook (Slack, Telegram, Google Sheets, or CRM).
    console.log('[Inquiry Received]', {
      name,
      phone,
      package: selectedPackage || 'Not specified',
      area: area ? `${area} sqft` : 'Not specified',
      cost: cost || 'Not specified',
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully.',
    });
  } catch (error) {
    console.error('[Inquiry Error]', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry.' },
      { status: 500 }
    );
  }
}
