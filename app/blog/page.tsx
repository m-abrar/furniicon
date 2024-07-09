// app/blog/page.tsx
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './blog.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>Blog Posts</h1>
      <ul className={styles.postList}>
        {posts.map(post => (
          <li key={post.id} className={styles.postItem}>
            <Link href={`/blog/${post.id}`} className={styles.postLink}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
