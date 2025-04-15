export interface BannerState{
    children:React.ReactNode;
    bannerStyle:string;
}

export interface MainLayoutProps{
    children:React.ReactNode;
}

export interface Post {
    id: number;
    title: string;
  }

  export interface PostsState {
    posts: Post[];
    fetchPosts: () => Promise<void>;
    deletePost: (id: number) => void;
    editPost: (id: number, newTitle: string) => void;
  }
  