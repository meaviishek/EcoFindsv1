'use client'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'

export default function ClientNavbar() {
  const pathname = usePathname();
  if (pathname === '/auth' || pathname === '/auth/otp') return null;
  return <Navbar />;
}