import { PostStore } from "@/interface";
import { getPosts } from "@/services/postServices";
import { create } from "zustand";

const usePostStore = create <PostStore>((set) => ({
    isLoading:false,
    posts:[],
    fetchPosts:async() => {
        set({
            isLoading:true
        });
        try {
            const posts = await getPosts();
            set({
                posts,
                isLoading:false
            })
        } catch (error) {
            set({
                error:error.message,
                isLoading:false
            })
        }
    },
    deletePost: async (id: number) => {
        set({ isLoading: true });
        try {
          // Delete the post from the server (if required)
          await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
          });
    
          // Update the state to remove the deleted post
          set((state) => ({
            posts: state.posts.filter((post) => post.id !== id),
            isLoading: false,
          }));
        } catch (error) {
          set({ 
            error: error.message, 
            isLoading: false });
        }
      },
}))

export default usePostStore;