import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prototype | AppDirect DS',
  description: 'Prototype pages built with AppDirect Design System components',
};

export default function PrototypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
