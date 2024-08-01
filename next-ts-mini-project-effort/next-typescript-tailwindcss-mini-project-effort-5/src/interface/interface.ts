import { ReactNode } from "react";

export interface BannerProps{
    title:string;
    description:string;
}

export interface LinkData {
    textAnchor?: string; // textAnchor can be undefined
    url: string; // URL is required
  }


  export interface MainLayoutProps{
    children:ReactNode; // type the children prop
  }


export interface BtnPrimaryProps{
    label:string;
    onClick:() => void;
}

export interface MetaProps{
    title:string;
    description:string;
}