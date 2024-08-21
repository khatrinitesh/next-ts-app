"use client";
import BtnPrimary from "@/components/BtnPrimary";
import Banner from "@/layout/Banner";
import MainLayout from "@/layout/MainLayout";
import { PostProps } from "@/types";
import { useState, useEffect } from "react";
import { usePathname,useRouter } from "next/navigation";

export default function Service() {
  const [post, setPost] = useState<PostProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | null>(null);
  const pathname = usePathname();

  const router = useRouter();

  // Extract ID from pathname
  const id = pathname ? parseInt(pathname.split("/").pop() || "", 10) : null;

  const baseurlposts = process.env.NEXT_PUBLIC_POSTS || "";

  const fetchData = async () => {
    setLoading(true);
    setErrors(null);
    if (id) {
      try {
        const response = await fetch(`${baseurlposts}/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: PostProps = await response.json();
        setPost(data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleBack = () => {
    router.push('/service')
  }

  return (
    <MainLayout>
      <div className="content ServicePage">
        <Banner title="Service" description="Laborum commodo ad elit cupidatat ullamco laboris nisi excepteur." />
        <div className="container mx-auto">
            <BtnPrimary label="Back" onClick={handleBack}/>
          {loading && <p>Loading...</p>}
          {errors && <div>Error: {errors}</div>}
          {post && (
            <>
              <h2 className="post-title font-bold text-[24px]">{post.title}</h2>
              <p className="post-body font-medium text-[16px]">{post.body}</p>

            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
