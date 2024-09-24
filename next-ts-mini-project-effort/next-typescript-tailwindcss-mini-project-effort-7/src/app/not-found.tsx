"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [router]);

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl">404 - Page Not Found</h1>
      <p className="mt-4">You will be redirected to the home page shortly.</p>
      <button
        onClick={handleRedirect}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
