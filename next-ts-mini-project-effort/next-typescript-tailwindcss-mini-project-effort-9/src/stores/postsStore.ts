import { Post, PostsState } from '@/interface';
import {create} from 'zustand';



export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  fetchPosts: async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
    const data = await response.json();
    set({ posts: data });
  },
  deletePost: (id) => {
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    }));
  },
  editPost: (id, newTitle) => {
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? { ...post, title: newTitle } : post
      ),
    }));
  },
}));
