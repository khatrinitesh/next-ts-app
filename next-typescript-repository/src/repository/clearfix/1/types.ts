export interface Item{
    id:number;
    title:string;
    imgSrc:string;
}

export interface ItemListProps{
    items:Item[];
}