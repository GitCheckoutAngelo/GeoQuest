'use client';

import NavBar from '@/components/NavBar';

export default function NavBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <NavBar height="72px" />
      </nav>
      <main style={{ height: `calc(100vh - 72px)` }}>{children}</main>
    </div>
  );
}
