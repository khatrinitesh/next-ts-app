import { IconType } from 'react-icons';

export type BannerProps = {
    title:string;
    description:string;
}

export type ChildrenProps = {
    children:React.ReactNode;
}

export type HeaderProps = {
    label:string;
    url:string;
}

export type ButtonPrimary = {
    onClick:() => void;
    label:string;
}

export type SocialMedia ={
    label: string;
    url: string;
    Icon: IconType;
  }

  export type PostProps = {
    id:number;
    title:string;
    body:string;
  }

  export type Option = {
    value: string;
    label: string;
  }

  export type SelectDropdownProps = {
    options: Option[];
    selectedValue: string;
    onChange: (value: string) => void;
  }

  export type ModalProps = {
    isOpen:boolean;
    onClose:() => void;
    label:string;
    children:React.ReactNode;
  }