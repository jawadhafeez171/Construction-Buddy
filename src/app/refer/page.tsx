import type { Metadata } from 'next';
import ReferClient from './ReferClient';

export const metadata: Metadata = {
  title: 'Refer & Earn | Construction Buddy Bengaluru',
  description: 'Refer a friend or family member for residential home or commercial construction projects in Bengaluru. Earn up to ₹1,00,000 in cash rewards upon their first project payment.',
  openGraph: {
    title: 'Refer & Earn | Construction Buddy Bengaluru',
    description: 'Refer a friend or family member for residential home or commercial construction projects in Bengaluru. Earn up to ₹1,00,000 in cash rewards upon their first project payment.',
    url: '/refer',
    images: [
      {
        url: '/friend_referral.webp',
        width: 1200,
        height: 630,
        alt: 'Refer & Earn - Construction Buddy',
      },
    ],
  },
};

export default function ReferPage() {
  return <ReferClient />;
}
