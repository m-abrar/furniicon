// app/about/layout.tsx
import { ReactNode } from 'react';

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>About Section</h2>
      {children}
    </div>
  );
}
