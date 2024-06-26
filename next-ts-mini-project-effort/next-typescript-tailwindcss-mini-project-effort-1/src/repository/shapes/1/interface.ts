export interface Shape {
    id: number;
    name: string;
    dimensions: {
      width: number;
      height: number;
    };
    color: string;
  }

  interface ShapeProps {
    shape: ShapeType;
  }
  