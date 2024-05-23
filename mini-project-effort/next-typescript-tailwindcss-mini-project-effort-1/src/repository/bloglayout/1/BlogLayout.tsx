
import { BlogPost as BlogPostType  } from './types';
import BlogPost from './BlogPost';

interface BlogLayoutProps {
    posts:BlogPostType[];
}

const BlogLayout: React.FC<BlogLayoutProps> = ({posts}) => {
   
    return (
      <>
       <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid gap-4">
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
      </>
    );
  };

export default BlogLayout