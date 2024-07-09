// app/blog/layout.tsx
import { ReactNode } from 'react';

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Products Section</h2>
      {children}
    </div>
  );
}
