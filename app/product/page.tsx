// app/product/page.tsx
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './product.module.css';

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
    <div className={styles.container}>
      <h1 className={styles.heading}>Products</h1>
      <div className={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img 
              src={`https://via.placeholder.com/150?text=Product+${product.id}`} 
              alt={product.title} 
              className={styles.productImage}
            />
            <h2 className={styles.productTitle}>
              <Link href={`/product/${product.id}`} className={styles.productLink}>
                {product.title}
              </Link>
            </h2>
            <p className={styles.productBody}>{product.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
