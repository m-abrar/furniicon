// app/contact/layout.tsx
import { ReactNode } from 'react';

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Contact Section</h2>
      {children}
    </div>
  );
}
