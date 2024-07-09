// pages/blog/[id]/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './page.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogPostPageProps {
  params: {
    id: string; // Assuming id is passed as a string
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = params; // Destructure id from params
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data: Post = await response.json();
        setPost(data);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false); // Handle loading state on error
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) return <div className={styles.loading}>Loading...</div>; // Apply loading style

  if (!post) return <div className={styles.error}>Failed to load post.</div>; // Apply error style

  return (
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
