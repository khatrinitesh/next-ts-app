export interface LayoutProps {
  children: ReactNode;
}

export interface NavItem{
  label:string;
  href:string;
}

export interface ProductComment{
  postId?:number;
  id:number;
  name:string;
  email:string;
  body:string;
}

export interface ProductPropsComment{
  comment:ProductComment[]
}

export interface ProductDetailProps {
  params: { id: string };
}

export interface BtnPrimaryProps{
  onClick:() => void;
  children:React.ReactNode;
  btnStyle:React.CSSProperties;
}

export interface AccordionProps {
  title: string;
  description: string;
}