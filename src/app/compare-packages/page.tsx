import type { Metadata } from 'next';
import CompareClient from './CompareClient';

export const metadata: Metadata = {
  title: 'Compare Construction Packages | Construction Buddy Bengaluru',
  description: 'Compare our home construction packages side-by-side. Inspect technical specifications for Standard, Premium, Luxury, Elite, Imperial, Royal Estate, and Palatial packages in Bengaluru.',
};

export default function ComparePackagesPage() {
  return <CompareClient />;
}
