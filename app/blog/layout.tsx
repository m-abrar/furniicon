// app/blog/layout.tsx
import { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Blog Section</h2>
      {children}
    </div>
  );
}
