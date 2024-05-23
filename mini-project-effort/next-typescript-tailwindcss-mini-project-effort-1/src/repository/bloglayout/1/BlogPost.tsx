import { BlogPost as BlogPostType } from "./types";

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-md" key={post.id}>
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-2">{post.excerpt}</p>
        <p className="text-gray-800">{post.content}</p>
        <div className="mt-4 text-gray-500 text-sm">
          <span>By {post.author}</span> | <span>{post.publishedDate}</span>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
