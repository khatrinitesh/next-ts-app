import { VerticalButtonGroupProps } from "./interface";


export const buttons:VerticalButtonGroupProps[] = [
    { text: 'Button 1', onClick: () => handleButtonClick('Button 1') },
    { text: 'Button 2', onClick: () => handleButtonClick('Button 2') },
    { text: 'Button 3', onClick: () => handleButtonClick('Button 3') },
    // Add more buttons as needed
  ];