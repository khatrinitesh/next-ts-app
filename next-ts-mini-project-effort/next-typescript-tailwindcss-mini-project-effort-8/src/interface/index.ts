

export interface BannerProps{
    title:string;
    description:string;
    bannerStyle:React.CSSProperties;
}

export interface MainLayoutProps{
    children:React.ReactNode;
}

export interface Post{
    id:number;
    title:string;
    body:string;
}

export interface PostStore {
    posts:Post[];
    fetchPosts:() => void;
    isLoading:boolean;
    error:string | null;
    deletePost:(id:number)=> void; // add deletepost method to the store
}

export interface AccordionProps{
    openItem:number | null;
    toggleItem:(id:number) => void;
}

export interface AccordionItemProps{
    id:number;
    title:string;
    content:string;
}