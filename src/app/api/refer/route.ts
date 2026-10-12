import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { yourName, yourContact, friendName, friendContact, buildType, plotSize, notes } = data;

    if (!yourName || !yourContact || !friendName || !friendContact) {
      return NextResponse.json(
        { error: 'All required referral fields must be provided.' },
        { status: 400 }
      );
    }

    // In a production environment, this can be piped to an email service or CRM webhook.
    console.log('[Referral Registered]', {
      referrer: { name: yourName, contact: yourContact },
      referee: { name: friendName, contact: friendContact },
      buildType,
      plotSize,
      notes: notes || 'None',
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Referral registered successfully.',
    });
  } catch (error) {
    console.error('[Referral Error]', error);
    return NextResponse.json(
      { error: 'Failed to process referral registration.' },
      { status: 500 }
    );
  }
}
