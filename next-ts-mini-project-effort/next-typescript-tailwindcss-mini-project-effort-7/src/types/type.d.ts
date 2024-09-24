export type BannerTypes = {
    title:string;
    desc:string;
}

export type navDataTypes = {
    title:string;
    url:string;
}

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
}

export type UserStore = {
    users:User[];
    fetchUsers:() => Promis<void>;
}

export type MetaData = {
  title:string;
  description:string;
}

export type OpenGraphImage =  {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export type OpenGraphMetadata =  {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images: OpenGraphImage[];
  videos?: OpenGraphImage[];
  audio?: { url: string }[];
  locale?: string;
  type?: string;
}

export type MetaProps =  {
  openGraph: OpenGraphMetadata;
}

export type AppProps = {
  children:React.ReactNode;
}