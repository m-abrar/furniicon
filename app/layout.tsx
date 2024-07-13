// app/layout.tsx
import { ReactNode } from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import styles from './layout.module.css'; // Import CSS module for styling

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="Company Logo" width={150} height={50} /> {/* Adjust width and height as needed */}
          </div>
          <nav className={styles.nav}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/about" className={styles.navLink}>About</a>
            <a href="/product" className={styles.navLink}>Products</a>
            <a href="/blog" className={styles.navLink}>Blogs</a>
            <a href="/contact" className={styles.navLink}>Contact</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
