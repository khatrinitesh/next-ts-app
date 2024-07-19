export interface Quote {
    text: string;
    author?: string;
  }
  
  export interface RandomQuoteProps {
    quotes: Quote[];
  }