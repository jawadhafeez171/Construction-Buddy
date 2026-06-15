import type { Metadata } from 'next';
import ReferClient from './ReferClient';

export const metadata: Metadata = {
  title: 'Refer & Earn | Construction Buddy Bengaluru',
  description: 'Refer a friend or family member for residential home or commercial construction projects in Bengaluru. Earn up to ₹1,00,000 in cash rewards upon their first project payment.',
};

export default function ReferPage() {
  return <ReferClient />;
}
