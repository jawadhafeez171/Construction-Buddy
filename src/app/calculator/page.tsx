import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Cost Calculator | Premium Construction Cost Estimator Bengaluru',
  description: 'Estimate your home construction cost in Bengaluru dynamically. Calculate estimates for standard and luxury packages based on plot dimensions (30x40, 40x60, 50x80) and floor counts.',
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
