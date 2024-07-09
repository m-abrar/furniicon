// app/product/page.tsx
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './product.module.css'; // Assuming you have a CSS module for blog styles

interface Product {
  id: number;
  title: string;
  body: string;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>Products</h1>
      <ul className={styles.productList}>
        {products.map(product => (
          <li key={product.id} className={styles.productItem}>
            <Link href={`/product/${product.id}`} className={styles.productLink}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
