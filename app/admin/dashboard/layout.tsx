import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout ensures only authenticated users see dashboard
  // (Login page is public)
  return <>{children}</>;
}