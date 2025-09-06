import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen p-4 max-w-5xl mx-auto">
      <header className="text-2xl font-bold mb-4">🏠 ALX Listing App</header>
      <main>{children}</main>
      <footer className="text-center mt-10 text-gray-500 text-sm">
        &copy; 2025 ALX Listing App
      </footer>
    </div>
  );
}
