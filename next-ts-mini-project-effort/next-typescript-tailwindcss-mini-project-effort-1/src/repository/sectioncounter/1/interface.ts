export interface Section {
    id: number;
    title: string;
    count: number;
  }

  export interface SectionCounterProps {
    sections: Section[];
  }