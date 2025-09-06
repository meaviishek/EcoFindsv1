'use client'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'

export default function ClientNavbar() {
  const pathname = usePathname();
  if (pathname === '/auth') return null;
  return <Navbar />;
}