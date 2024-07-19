export interface Option {
    id: number;
    label: string;
  }
  
  export interface SelectableProps {
    options: Option[];
    onSelect: (option: Option) => void;
  }