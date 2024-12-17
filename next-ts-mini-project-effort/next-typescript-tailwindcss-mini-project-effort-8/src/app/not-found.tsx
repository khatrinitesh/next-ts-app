'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
      // Redirect to homepage after 2 seconds
      router.push('/'); // Homepage URL
    }, [router]);
  return (
    <>
  </>
  );
}

export default NotFound;
