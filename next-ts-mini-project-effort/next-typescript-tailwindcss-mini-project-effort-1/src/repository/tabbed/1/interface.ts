export interface Tab{
    id:number;
    title:string;
    content:string;
}

export interface TabProps{
    tabs:Tab[];
}